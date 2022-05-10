import { useEffect } from "react";
import router from "next/router";
import styles from "./start.module.scss";
import BasicBtn from "../components/common/button/basicBtn";
import classNames from "classnames";
import { basicBtnStyle } from "../components/common";
import { IC_Logo, IC_LogoText } from "../icons";

const Start = () => {
  return (
    <section className={styles.main}>
      <span className={styles.imageLogo}>
        <IC_Logo width="56" height="56" />
      </span>
      <span className={styles.textLogo}>
        <IC_LogoText />
      </span>
      <div className={styles.buttons}>
        <BasicBtn
          text={"로그인"}
          onClick={() => router.push("/common/login")}
          btnStyle={classNames(styles.loginBtn, basicBtnStyle.btn_white)}
          textStyle={styles.loginBtnText}
        />
        <BasicBtn
          text={"회원가입"}
          onClick={() => router.push("/mentor/signup")}
          btnStyle={classNames(styles.loginBtn, basicBtnStyle.btn_blue)}
        />
      </div>
      <span className={styles.mentoridgeText}>@mentoridge</span>
    </section>
  );
};

export default Start;
