import React from "react";
import styles from "./BottomNavBar.module.scss";

function BottomNavBar() {
  return (
    <div className={styles.container}>
      <button>
        <img
          src={"/images/lecture_detail_intro/heart-icon.svg"}
          width={"24px"}
          height={"24px"}
        />
      </button>
      <button>
        <img
          src={"/images/lecture_detail_intro/share.svg"}
          width={"24px"}
          height={"24px"}
        />
      </button>
      <button className={styles.subscription}>강의 신청</button>
      <div className={styles.indicator}></div>
    </div>
  );
}

export default BottomNavBar;
