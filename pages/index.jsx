import { useEffect } from "react";
import router from "next/router";
import jwt_decode from "jwt-decode";
import styles from "./start.module.scss";
import BasicBtn from "../components/common/button/basicBtn";
import { ImageLogo, TextLogo } from "../components/common/icons/logos";
import classNames from "classnames";
import { basicBtnStyle } from "../components/common";

const Start = () => {
  let token = "";
  if (typeof window !== "undefined") {
    token = window.localStorage.getItem("accessToken");
    if (token) {
      const decodedJwt = jwt_decode(token);
      if (decodedJwt.exp * 1000 < Date.now()) {
        window.localStorage.removeItem("accessToken");
      }
    }
  }

  useEffect(() => {
    if (token) {
      router.push("/mentor/myclass/myClassList");
    } else {
      router.push("/");
    }
  }, [token]);

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
