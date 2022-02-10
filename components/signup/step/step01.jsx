import styles from "./step01.module.scss";
import InputBox from "../inputBox";
import TopBar from "../topBar";
import BlueBtn from "../button";
import SelectBox from "../selectBox";
import Modal from "../modal";
import Gender from "../gender";
import { useState, useEffect } from "react";
import { SelectionWithoutTitle } from "../../mypage/selectBox";
import Loading from "../../../pages/loading";
const Step01 = ({
  form,
  prevStep,
  handleChange,
  handleSubmit,
  showState,
  close,
  loading,
}) => {
  const [error, setError] = useState("");
  const [disable, setDisable] = useState(true);
  useEffect(() => {
    ErrCheck();
    console.log(error);
  });

  if (typeof window === "undefined" || !window.document) {
    return <></>;
  }

  const ErrCheck = () => {
    const regex =
      /([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    if (
      form.email == "" ||
      form.gender == "" ||
      form.name == "" ||
      form.password == "" ||
      form.passwordConfirm == "" ||
      form.phoneNumber == "" ||
      form.stateL == ""
    ) {
      setError("빈칸을 모두 채워주세요.");
      setDisable(true);
    } else if (!regex.test(form.email)) {
      setError("이메일 형식을 확인해주세요");
    } else if (form.password.length < 6 || form.password.length > 14) {
      setError("비밀번호는 6-14자여야 합니다.");
      setDisable(true);
    } else if (form.password != form.passwordConfirm) {
      setError("비밀번호가 일치하지 않습니다.");
      setDisable(true);
    } else if (form.phoneNumber.length != 11) {
      setError("전화번호를 확인해주세요");
    } else {
      setError("");
      setDisable(false);
    }
  };

  return loading ? (
    <Loading></Loading>
  ) : (
    <section className={styles.signUp01} onClick={close}>
      <div className={styles.stateBackground} id="stateBackground">
        <div className={styles.stateModalPart} id="stateModal">
          <Modal form={form} onChange={handleChange} />
        </div>
      </div>
      <div className={styles.genderBackground} id="genderBackground">
        <div className={styles.genderModalPart} id="genderModal">
          <Gender onChange={handleChange} />
        </div>
      </div>
      <TopBar url={"/terms"} title={"회원가입"} />
      <div className={styles.contentSection}>
        <div className={styles.inputSection}>
          <InputBox
            type="text"
            placeholder={"이름"}
            onChange={handleChange("name")}
          />
          <InputBox
            type="email"
            placeholder={"ID(E-mail)"}
            onChange={handleChange("email")}
          />
          <InputBox
            type="password"
            placeholder={"비밀번호 입력(6-14자)"}
            onChange={handleChange("password")}
          />
          <InputBox
            type="password"
            placeholder={"비밀번호 재입력"}
            onChange={handleChange("passwordConfirm")}
          />
          <InputBox
            type="text"
            placeholder={"휴대폰 번호('-' 제외)"}
            onChange={handleChange("phoneNumber")}
          />
          <span className={styles.errText}>{error ? error : ""}</span>
        </div>
        <div className={styles.selectSection}>
          <span className={styles.row}>
            <SelectionWithoutTitle
              opt={2}
              name="birthYear"
              onChange={handleChange("birthYear")}
            />
            <SelectionWithoutTitle
              opt={1}
              name="gender"
              onChange={handleChange("gender")}
            />
          </span>
          <span className={styles.row}>
            <SelectBox
              btnText={form.stateL == "" ? "시" : form.stateL}
              num={2}
              onClick={showState}
              id="large"
            />
            <SelectBox
              btnText={form.stateM == "" ? "군" : form.stateM}
              num={2}
              onClick={showState}
              id="medium"
            />
          </span>
          <span className={styles.row}>
            <SelectBox
              btnText={form.stateS == "" ? "구" : form.stateS}
              num={2}
              onClick={showState}
              id="small"
            />
          </span>
        </div>
        <span className={styles.text}>동네 강의 추천을 위해 입력해주세요</span>
      </div>
      <div className={styles.footer}>
        <BlueBtn text={"완료"} onClick={handleSubmit} disable={disable} />
      </div>
    </section>
  );
};
export default Step01;
