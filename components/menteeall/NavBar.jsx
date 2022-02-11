import React from "react";
import styles from "./NavBar.module.scss";
function NavBar() {
  return (
    <div className={styles.container}>
      <div className={styles.list_box}>
        <div className={styles.item}>
          <img
            src={"/images/menteeall/home_icon.svg"}
            width="24px"
            height="24px"
          />
          <span>홈</span>
        </div>
        <div className={styles.item}>
          <img
            src={"/images/menteeall/자유게시판_icon.svg"}
            width="24px"
            height="24px"
          />

          <span>자유게시판</span>
        </div>
        <div className={styles.item}>
          <img
            src={"/images/menteeall/채팅_icon.svg"}
            width="24px"
            height="24px"
          />
          <span>채팅</span>
        </div>
        <div className={styles.item}>
          <img
            src={"/images/menteeall/마이_icon.svg"}
            width="24px"
            height="24px"
          />
          <span>마이페이지</span>
        </div>

        <div className={styles.indicator}></div>
      </div>
    </div>
  );
}

export default NavBar;
