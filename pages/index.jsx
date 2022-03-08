import { useEffect } from "react";
import router from "next/router";
import styles from "./start.module.scss";
import BasicBtn from "../components/common/button/basicBtn";
import { ImageLogo, TextLogo } from "../components/common/icons/logos";
import classNames from "classnames";
import { basicBtnStyle } from "../components/common";

const Start = () => {
  return (
    <section className={styles.main}>
      <span className={styles.imageLogo}>
        <ImageLogo />
      </span>
      <span className={styles.textLogo}>
        <TextLogo />
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
