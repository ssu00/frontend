import React from "react";
import styles from "./BottomNavBar.module.scss";
import { IC_HeartEmpty } from "../../../icons";
import { IC_Share } from "../../../icons";

function BottomNavBar() {
  return (
    <div className={styles.container}>
      <button>
        <IC_HeartEmpty width={"24px"} height={"24px"} />
      </button>
      <button>
        <IC_Share width={"24px"} height={"24px"} />
      </button>
      <button className={styles.subscription}>강의 신청</button>
      <div className={styles.indicator}></div>
    </div>
  );
}

export default BottomNavBar;
