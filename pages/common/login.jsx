import { useState } from "react";
import axios from "axios";
import router from "next/router";
import styles from "./login.module.scss";
import {
  BasicInputBox,
  BasicBtn,
  basicBtnStyle,
} from "../../components/common";
import { ImageLogo, NameLogo } from "../../components/common/icons/logos";
import classNames from "classnames";
import Login_API from "../../core/api/Login/login";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const checkAccount = async () => {
    const res = await Login_API(username, password);
  };

  const onChangeUsername = (e) => {
    setUsername(e.target.value);
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <section className={styles.loginSection}>
      <h1 className={styles.title}>{"로그인"}</h1>
      <span className={styles.imageLogo}>
        <ImageLogo />
      </span>
      <div className={styles.btns}>
        <BasicInputBox
          type={"email"}
          placeholder={"ID(Email)"}
          onChange={onChangeUsername}
          value={username}
          style={styles.loginInputBox}
        />
        <BasicInputBox
          type={"password"}
          placeholder={"Password"}
          onChange={onChangePassword}
          value={password}
          style={styles.loginInputBox}
        />
        {error ? (
          <span className={styles.failed}>
            아이디 또는 비밀번호가 일치하지 않습니다.
          </span>
        ) : (
          <></>
        )}
        <BasicBtn
          text={"로그인 하기"}
          onClick={checkAccount}
          btnStyle={classNames(styles.loginBtn, basicBtnStyle.btn_blue)}
          textStyle={styles.loginBtnText}
        />

        <span className={styles.textButtons}>
          <BasicBtn
            text={"아이디찾기"}
            btnStyle={classNames(styles.textBtn, basicBtnStyle.btn_transparent)}
            textStyle={styles.textBtnText}
            onClick={() => router.push("/mentor/findID")}
          />
          <BasicBtn
            text={"비밀번호찾기"}
            btnStyle={classNames(styles.textBtn, basicBtnStyle.btn_transparent)}
            textStyle={styles.textBtnText}
            onClick={() => router.push("/mentor/findPW")}
          />
        </span>
      </div>

      <NameLogo />
    </section>
  );
};

export default Login;
