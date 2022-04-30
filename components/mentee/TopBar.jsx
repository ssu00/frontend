import React from "react";
import Image from "next/image";
import styles from "./TopBar.module.scss";
import router from "next/router";
import { IC_ArrowLeft } from "../../icons";

function TopBar(props) {
  return (
    <>
      <div className={styles.container}>
        <IC_ArrowLeft onClick={() => router.back()} />

        <h5>{props.title}</h5>
      </div>
      <div className={styles.bg}></div>
    </>
  );
}

export default TopBar;
