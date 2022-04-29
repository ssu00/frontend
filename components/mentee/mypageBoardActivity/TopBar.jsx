import React from "react";
import styles from "./TopBar.module.scss";
import { IC_ArrowLeft } from "../../../icons";
import router from "next/router";

function TopBar(props) {
  return (
    <>
      <div className={styles.container}>
        <IC_ArrowLeft onClick={() => router.push("/mentee/mypage")} />

        <h5>{props.title}</h5>
      </div>
      <div className={styles.bg}></div>
    </>
  );
}

export default TopBar;
