import React from "react";

import router from "next/router";
import styles from "./TopMenu.module.scss";
import { IC_ArrowLeft, IC_Logo } from "../../../icons";
function TopMenu() {
  return (
    <div className={styles.container}>
      <div className={styles.left_box}>
        <IC_ArrowLeft onClick={() => router.back()} />
        <span className={styles.topic}>위시리스트</span>
      </div>
      <IC_Logo />
    </div>
  );
}

export default TopMenu;
