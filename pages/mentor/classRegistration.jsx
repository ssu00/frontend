import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  ChangeField,
  Initialize,
  MoveStep,
  LectureUpdate,
  AddToArray,
  ChangeArray,
  DeleteArrayElement,
} from "../../core/redux/reducers/update";
import MyClassList from "./myclass/myClassList";
import Step01 from "../../components/mentor/class/step01";
import Step02 from "../../components/mentor/class/step02";
import Step03 from "../../components/mentor/class/step03";

const ClassRegistration = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(Initialize("classRegister"));
  }, [dispatch]);

  const { form } = useSelector(({ classRegister }) => ({
    form: classRegister.classInfo,
  }));

  const updateResult = useSelector(({ classRegister }) => ({
    updateSuccess: classRegister.updateSuccess,
    updateError: classRegister.updateError,
  }));

  const step = form.step;
  const onChange = (name, index) => async (e) => {
    let value = e.target.value;
    let discuss = form.discuss;
    switch (name) {
      case "lectureSubject":
        value = JSON.parse(e.target.value);
        break;
      case "lectureSubjectAdd":
        value = 1;
        break;
      case "online":
      case "discuss":
      case "personal":
      case "group":
        value = form[name] == "on" ? "off" : "on";
        break;
      case "offline":
        value = form.offline == "on" ? "off" : "on";
        if (value == "off") {
          discuss = "off";
        }
        break;
      default:
        break;
    }
    if (name == "lectureSubjectAdd") {
      dispatch(
        AddToArray({
          form: "classInfo",
          key: "lectureSubject",
          value,
        })
      );
    } else if (name == "lectureSubject") {
      dispatch(
        ChangeArray({
          form: "classInfo",
          key: "lectureSubject",
          index: index,
          value,
        })
      );
    } else if (name == "lectureSubjectDelete") {
      dispatch(
        DeleteArrayElement({
          form: "classInfo",
          key: "lectureSubject",
          index: index,
        })
      );
    } else if (name == "offline") {
      dispatch(
        ChangeField({
          form: "classInfo",
          key: name,
          value,
        })
      );
      dispatch(
        ChangeField({
          form: "classInfo",
          key: "discuss",
          discuss,
        })
      );
    } else {
      dispatch(
        ChangeField({
          form: "classInfo",
          key: name,
          value,
        })
      );
    }
  };

  const onSubmit = () => {
    dispatch(LectureUpdate({ form: form }));
  };

  const RandomMove = (step) => {
    dispatch(MoveStep(step));
  };

  switch (step) {
    case 1:
      return (
        <Step01 form={form} handleChange={onChange} MoveStep={RandomMove} />
      );
    case 2:
      return (
        <Step02 form={form} handleChange={onChange} MoveStep={RandomMove} />
      );
    case 3:
      return (
        <Step03
          form={form}
          handleChange={onChange}
          handleSubmit={onSubmit}
          MoveStep={RandomMove}
          updateResult={updateResult}
        />
      );

    default:
      <MyClassList />;
  }
};
export default ClassRegistration;
