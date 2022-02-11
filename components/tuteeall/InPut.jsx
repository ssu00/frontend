import React from "react";
import styles from "./InPut.module.scss";

function InPut() {
  return (
    <div className={styles.container}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19.5 19.5L16.5 16.5"
          stroke="#6595F4"
          stroke-miterlimit="10"
          stroke-linecap="square"
          stroke-linejoin="round"
        />
        <circle cx="11.5" cy="11.5" r="7" stroke="#6595F4" />
      </svg>
      <input type="text" placeholder="강의명·언어·튜터를 검색하세요" />
    </div>
  );
}

export default InPut;
