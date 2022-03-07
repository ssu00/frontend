import React from "react";
import styles from "./Write.module.scss";

function Write() {
  return (
    <div className={styles.container}>
      <h6>상세한 후기를 작성해주세요.</h6>
      <textarea
        placeholder="강의에 대한 의견을 자유롭게 작성해주세요.
최소 20자 이상"
      ></textarea>
    </div>
  );
}

export default Write;
