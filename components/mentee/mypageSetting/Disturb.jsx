import React from "react";
import styles from "./Disturb.module.scss";

function Disturb() {
  return (
    <div className={styles.container}>
      <h5>방해금지 모드</h5>
      <div className={styles.list_box}>
        <h6>방해금지 모드</h6>

        <span>방해금지 모드가 켜져 있는 동안 알림을 전하지않습니다. </span>
        <button>
          <div className={styles.circle}></div>
        </button>
      </div>
    </div>
  );
}

export default Disturb;
