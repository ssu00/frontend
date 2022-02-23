import React from "react";
import styles from "./TopMenu.module.scss";

function Topmenu() {
  return (
    <div className={styles.container}>
      <img src={"/images/menteeall/튜터랩.svg"} width="54px" height="19px" />
      <div className={styles.centerbox}>
        <select name="location" id="location-select">
          <option value="">서울시 관악구</option>
        </select>
      </div>
      <div className={styles.rightbox}>
        <img src={"/images/menteeall/alarm.svg"} width="24px" height="24px" />
        <img
          src={"/images/menteeall/rightbutton.svg"}
          width="24px"
          height="24px"
        />
      </div>
    </div>
  );
}

export default Topmenu;
