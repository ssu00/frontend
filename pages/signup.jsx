import Step01 from "../components/signup/step/step01";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  ChangeField,
  Initialize,
  PrevStep,
  SignUp,
} from "../redux/reducers/signup";
import Main from ".";

const SignUpPage = () => {
  const dispatch = useDispatch();
  const { form } = useSelector(({ SignUpR }) => ({
    form: SignUpR.signup,
    signUpError: SignUpR.signUpError,
  }));
  const { initialState } = useSelector(({ loading }) => ({
    initialState: loading.loading,
  }));
  const step = form.step;
  const [selectL, setSelectL] = useState(0);
  const [selectM, setSelectM] = useState(0);
  const [selectS, setSelectS] = useState(0);

  const onChange = (name) => async (e) => {
    let value = "",
      select = "";
    switch (name) {
      case "gender":
        select = document.getElementById("gender");
        value = select.options[select.selectedIndex].value;
        break;
      case "birthYear":
        select = document.getElementById("birthYear");
        value = select.options[select.selectedIndex].value;
        break;
      case "stateL":
        value = document.querySelector(
          'input[name="stateElement1"]:checked'
        )?.id;
        if (value) hideState();
        setSelectL(selectL + 1);
        break;
      case "stateM":
        value = document.querySelector(
          'input[name="stateElement2"]:checked'
        )?.id;
        if (value) hideState();
        setSelectM(selectM + 1);
        break;
      case "stateS":
        value = document.querySelector(
          'input[name="stateElement3"]:checked'
        )?.id;
        if (value) hideState();
        setSelectS(selectS + 1);
        break;
      default:
        value = e.target.value;
        break;
    }
    dispatch(
      ChangeField({
        form: "signup",
        key: name,
        value,
      })
    );
  };

  const changeM = () => {
    let value = "";
    dispatch(
      ChangeField({
        form: "signup",
        key: "stateM",
        value,
      })
    );
  };

  const changeS = () => {
    let value = "";
    dispatch(
      ChangeField({
        form: "signup",
        key: "stateS",
        value,
      })
    );
  };

  useEffect(() => {
    changeM();
    changeS();
  }, [selectL]);

  useEffect(() => {
    changeS();
  }, [selectM]);

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(SignUp(form));
  };

  const showState = () => {
    const stateBack = document.getElementById("stateBackground");
    stateBack ? (stateBack.style.display = "block") : "";
  };

  const hideState = () => {
    const stateBack = document.getElementById("stateBackground");
    stateBack ? (stateBack.style.display = "none") : "";
  };

  const Close = () => {
    const background = document.getElementById("stateBackground");
    window.addEventListener("click", (e) => {
      e.target === background ? hideState() : false;
    });
  };

  const Prev = (e) => {
    e.preventDefault();
    dispatch(PrevStep());
  };

  useEffect(() => {
    dispatch(Initialize("signup"));
  }, [dispatch]);

  switch (step) {
    case 0:
      return <Main />;
    case 1:
      return (
        <Step01
          form={form}
          prevStep={Prev}
          handleChange={onChange}
          handleSubmit={onSubmit}
          showState={showState}
          close={Close}
          loading={initialState}
        />
      );
    default:
      return <Main />;
  }
};

export default SignUpPage;
