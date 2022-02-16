import React from "react";
import Image from "next/image";
import styles from "./TopMenu.module.scss";
function TopMenu() {
  return (
    <div className={styles.container}>
      <div className={styles.left_box}>
        <Image
          src={"/images/lecture_detail_intro/icon_back.svg"}
          width="24px"
          height="24px"
        />
        <span className={styles.topic}>위시리스트</span>
      </div>

      <Image
        src={"/images/lecture_detail_intro/logo.svg"}
        width="24px"
        height="24px"
      />
    </div>
  );
}

export default TopMenu;
