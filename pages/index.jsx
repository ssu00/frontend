import { useEffect } from "react";
import styles from "./main.module.scss";
import { WhiteBtn, BlueBtn } from "../components/login/btn/mainBtn";
import { ImageLogo, TextLogo } from "../components/login/logos";
import router from "next/router";
import jwt_decode from "jwt-decode";

const Main = () => {
  let token = "";
  if (typeof window !== "undefined") {
    token = window.localStorage.getItem("accessToken");
    if (token) {
      const decodedJwt = jwt_decode(token);
      // const d = new Date(0);
      // d.setUTCSeconds(decodedJwt.exp);
      // console.log('dTimes=',d); //날짜확인용
      if (decodedJwt.exp * 1000 < Date.now()) {
        window.localStorage.removeItem("accessToken");
      }
    }
  }
  useEffect(() => {
    if (token) {
      router.push("/myclass");
    } else {
      router.push("/");
    }
  }, [token]);
  return (
    <div>
      <section className={styles.main}>
        <span className={styles.imageLogo}>
          <ImageLogo />
        </span>
        <span className={styles.textLogo}>
          <TextLogo />
        </span>
        <div className={styles.buttons}>
          <WhiteBtn
            text={"튜터로 로그인"}
            onClick={() => router.push("/login")}
          />
          <BlueBtn
            text={"회원가입"}
            onClick={() => router.push("/termsContainer")}
          />
        </div>
        <span className={styles.tutorlabText}>@tutorlab</span>
      </section>
    </div>
  );
};

export default Main;
