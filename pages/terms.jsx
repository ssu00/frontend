import styles from "./terms.module.scss";
import TopBar from "../components/signup/topBar";
import BlueBtn from "../components/signup/button";
import { useState } from "react";
import router from "next/router";
const Terms = () => {
  const [disable, setDisable] = useState(true);
  return (
    <section className={styles.termSection}>
      <TopBar url={"/"} title={"이용약관"} />
      <section className={styles.termsContent}>
        <p>this is terms</p>
        {/* <input type="checkbox" id="agree" onChange={() => setDisable(!disable)} /> */}
        {/* <label htmlFor="agree" className={styles.agreement}>
        개인정보 처리 방침을 모두 읽었으며, 이에 동의합니다.
      </label>
      <div className={styles.fixedTab}>
        <BlueBtn
          text={"다음"}
          onClick={() => router.push("/terms2")}
          disable={disable}
        />
      </div> */}
      </section>
    </section>
  );
};
export default Terms;
