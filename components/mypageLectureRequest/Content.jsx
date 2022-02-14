import React from "react";
import styles from "./Content.module.scss";

function Content() {
  return (
    <section className={styles.container}>
      <textarea
        cols="30"
        rows="10"
        placeholder="요청 강의에 대한 상세내용을 입력해주세요. 
(최소 10자, 최대 1500자)"
      ></textarea>
    </section>
  );
}

export default Content;
