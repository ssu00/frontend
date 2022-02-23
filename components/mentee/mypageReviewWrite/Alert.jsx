import React from "react";
import styles from "./Alert.module.scss";

function Alert(props) {
  return (
    <div className={styles.bg}>
      <div className={styles.modal}>
        <h5>후기 등록</h5>
        <h6>작성한 후기를 등록하시겠습니까?</h6>
        <div className={styles.button_box}>
          <button className={styles.cancel} onClick={props.cancel}>
            취소
          </button>
          <button onClick={props.finalConfirm} className={styles.confirm}>
            확인
          </button>
        </div>
      </div>
    </div>
  );
}

export default Alert;
