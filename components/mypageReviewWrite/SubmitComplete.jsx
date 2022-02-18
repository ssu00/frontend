import React from "react";
import styles from "./SubmitComplete.module.scss";
import router from "next/router";

function SubmitComplete() {
  return (
    <div className={styles.bg}>
      <div className={styles.modal}>
        <h5>후기 등록 완료</h5>
        <h6>
          후기 등록이 완료되었습니다.
          <br />
          수강하시느라 고생 많으셨습니다.
        </h6>

        <button
          onClick={() => {
            router.back();
          }}
          className={styles.confirm}
        >
          확인
        </button>
      </div>
    </div>
  );
}

export default SubmitComplete;
