import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  ChangeField,
  Initialize,
  NextStep,
  PrevStep,
  MoveStep,
  LectureUpdate,
  AddToArray,
  ChangeArray,
  DeleteArrayElement,
} from "../../core/redux/reducers/update";
import MyClassList from "./myClassList";
import Step01 from "../../components/mentor/class/step01";
import Step02 from "../../components/mentor/class/step02";
import Step03 from "../../components/mentor/class/step03";

const ClassRegistration = ({ distinct }) => {
  const dispatch = useDispatch();
  const { form } = useSelector(({ update }) => ({
    form: update.update,
  }));
  const step = form.step;

  const onChange = (name, index) => async (e) => {
    let value = e.target.value;
    let discuss = form.discuss;
    switch (name) {
      case "title":
      case "subtitle":
      case "introduction":
      case "level":
      case "lectureSubject":
      case "groupMax":
        value = e.target.value;
        break;
      case "lectureSubjectAdd":
        value = "프론트엔드";
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
          form: "update",
          key: "lectureSubject",
          value,
        })
      );
    } else if (name == "lectureSubject") {
      dispatch(
        ChangeArray({
          form: "update",
          key: "lectureSubject",
          index: index,
          value,
        })
      );
    } else if (name == "lectureSubjectDelete") {
      dispatch(
        DeleteArrayElement({
          form: "update",
          key: "lectureSubject",
          index: index,
        })
      );
    } else if (name == "offline") {
      dispatch(
        ChangeField({
          form: "update",
          key: name,
          value,
        })
      );
      dispatch(
        ChangeField({
          form: "update",
          key: "discuss",
          discuss,
        })
      );
    } else {
      dispatch(
        ChangeField({
          form: "update",
          key: name,
          value,
        })
      );
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(LectureUpdate({ form: form }));
  };

  const GoNext = () => {
    dispatch(NextStep());
  };

  const GoPrev = (e) => {
    dispatch(PrevStep());
  };

  const RandomMove = (step) => {
    dispatch(MoveStep(step));
  };

  if (distinct != 2) {
    useEffect(() => {
      dispatch(Initialize("update"));
    }, [dispatch]);
  }

  switch (step) {
    case 1:
      return (
        <Step01
          form={form}
          nextStep={GoNext}
          handleChange={onChange}
          MoveStep={RandomMove}
        />
      );
    case 2:
      return (
        <Step02
          form={form}
          nextStep={GoNext}
          prevStep={GoPrev}
          handleChange={onChange}
          MoveStep={RandomMove}
        />
      );
    case 3:
      return (
        <Step03
          form={form}
          prevStep={GoPrev}
          handleChange={onChange}
          handleSubmit={onSubmit}
          MoveStep={RandomMove}
        />
      );

    default:
      <MyClassList />;
  }
};
export default ClassRegistration;
