import React from "react";
import styles from "./DisturbOn.module.scss";
function DisturbOn() {
  return (
    <div className={styles.container}>
      <h5>방해금지 모드</h5>
      <div className={styles.list_box}>
        <h6>방해금지 모드</h6>

        <span>방해금지 모드가 켜져 있는 동안 알림을 전하지않습니다. </span>
        <button className={styles.on}>
          <div className={styles.circle}></div>
        </button>
      </div>
      <span className={styles.time}>시간</span>
      <div className={styles.time_box}>
        <div>
          <span>시작 시간</span>
          <select>
            <option>오전 9:00</option>
            <option>오전 8:00</option>
          </select>
        </div>
        <div>
          <span>종료 시간</span>
          <select>
            <option>오후 12:00</option>
            <option>오후 8:00</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default DisturbOn;
