import React from "react";
import styles from "./InPut.module.scss";

function InPut() {
  return (
    <div className={styles.container}>
      <img
        src={"/images/menteeall/search-icon.svg"}
        width="24px"
        height="24px"
      />
      <input type="text" placeholder="강의명·언어·튜터를 검색하세요" />
    </div>
  );
}

export default InPut;
