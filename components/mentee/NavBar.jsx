import React from "react";
import Image from "next/image";
import styles from "./NavBar.module.scss";

function NavBar() {
  return (
    <div className={styles.container}>
      <div className={styles.list_box}>
        <div className={styles.item}>
          <Image
            src={"/images/menteeall/home_icon.svg"}
            width="24px"
            height="24px"
          />
          <span>홈</span>
        </div>
        <div className={styles.item}>
          <Image
            src={"/images/menteeall/freeboard_icon.svg"}
            width="24px"
            height="24px"
          />

          <span>자유게시판</span>
        </div>
        <div className={styles.item}>
          <Image
            src={"/images/menteeall/chatting_icon.svg"}
            width="24px"
            height="24px"
          />
          <span>채팅</span>
        </div>
        <div className={styles.item}>
          <Image
            src={"/images/menteeall/my_icon_clicked.svg"}
            width="24px"
            height="24px"
          />
          <span className={styles.clicked}>마이페이지</span>
        </div>

        <div className={styles.indicator}></div>
      </div>
    </div>
  );
}

export default NavBar;
