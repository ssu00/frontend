import InputBox from "../components/login/btn/inputBox";
import { BlueBtn } from "../components/login/btn/mainBtn";
import { NameLogo } from "../components/login/logos";
import styles from "./findPW.module.scss";
const FindID = () => {
  return (
    <section className={styles.findPWSection}>
      <h1 className={styles.title}>{"비밀번호 찾기"}</h1>
      <div className={styles.inputs}>
        <h1 className={styles.largeText}>
          <span className={styles.blueText}>비밀번호</span>를 잊으셨나요?
        </h1>
        <InputBox type={"email"} placeholder={"ID(Email) 입력"} />
        <div className={styles.tel}>
          <InputBox
            type={"text"}
            placeholder={"휴대폰 번호 '-' 제외"}
            diff={1}
          />
          <button type="button" className={styles.authBtn}>
            인증번호 받기
          </button>
        </div>
        <InputBox type={"text"} placeholder={"인증번호 입력"} />
        <BlueBtn text={"확인"} />
      </div>
      <NameLogo />
    </section>
  );
};

export default FindID;
