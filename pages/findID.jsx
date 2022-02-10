import InputBox from "../components/login/btn/inputBox";
import { BlueBtn } from "../components/login/btn/mainBtn";
import { NameLogo } from "../components/login/logos";
import styles from "./findID.module.scss";
const FindID = () => {
  return (
    <section className={styles.findIDSection}>
      <h1 className={styles.title}>{"아이디 찾기"}</h1>
      <div className={styles.inputs}>
        <h1 className={styles.largeText}>
          <span className={styles.blueText}>아이디</span>를 잊으셨나요?
        </h1>
        <p className={styles.smallText}>
          이메일로 {/*문자 메세지 또는 카카오톡으로 */}
          <br /> 아이디 정보를 보내드립니다.
        </p>
        <InputBox type={"tel"} placeholder={"휴대폰 번호 '-' 제외"} />
        <BlueBtn text={"확인"} />
      </div>
      <NameLogo />
    </section>
  );
};

export default FindID;
