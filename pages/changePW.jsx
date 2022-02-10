import styles from "./changePW.module.scss";
import { ThickInputBox } from "../components/mypage/inputBox";
import OtherTopBar from "../components/mypage/topBar/otherPage";
import { BlueBtn } from "../components/mypage/myPageBtn";
import { useState } from "react";
import axios from "axios";
const ChangePW = () => {
  const [pw, setPW] = useState("");
  const [newPW, setNewPW] = useState("");
  const [pwConfirm, setPWConfirm] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const submitChange = () => {
    const data = {
      newPassword: newPW,
      newPasswordConfirm: pwConfirm,
      password: pw,
    };
    axios
      .put("/users/my-password", data)
      .then((res) => {
        console.log(res);
        setSuccess(true);
        setError(false);
      })
      .catch((err) => {
        console.log(err);
        setError(true);
        setSuccess(false);
      });
  };

  return (
    <section className={styles.changePW}>
      <OtherTopBar title={"비밀번호 변경"} url={"/profileEdit"} />
      <p className={styles.text}>
        주기적인 비밀번호 변경을 통해
        <br />
        개인정보를 안전하게 보호할 수 있습니다.
      </p>
      <div className={styles.line} />
      <section className={styles.content}>
        <ThickInputBox
          type={"password"}
          placeholder={"현재 비밀번호"}
          setValue={setPW}
        />
        <ThickInputBox
          type={"password"}
          placeholder={"새로운 비밀번호(6-14자 이내)"}
          setValue={setNewPW}
        />
        <ThickInputBox
          type={"password"}
          placeholder={"새로운 비밀번호 확인"}
          setValue={setPWConfirm}
        />
      </section>
      <div className={styles.fixed}>
        <BlueBtn text={"저장"} onClick={submitChange} />
      </div>
      <span className={styles.msg}>
        {success == true
          ? "정상적으로 변경되었습니다."
          : error == true
          ? "에러가 발생했습니다."
          : ""}
      </span>
    </section>
  );
};

export default ChangePW;
