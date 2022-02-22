import React from "react";
import styles from "./Notice.module.scss";
function Notice() {
  return (
    <div className={styles.container}>
      현재 튜터랩에 개설되어 있지 않거나,
      <br /> 수강을 원하는 강의가 있다면 자유롭게 작성해주세요.
      <br /> 추후에 신규강의로 개설될 수 있도록 노력하겠습니다.
    </div>
  );
}

export default Notice;
