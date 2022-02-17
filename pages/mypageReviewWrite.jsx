import React from "react";
import LectureInfo from "../components/mypageReviewWrite/LectureInfo";
import Rating from "../components/mypageReviewWrite/Rating";
import TopBar from "../components/TopBar";
import styles from "./template.module.scss";

function mypageReviewWrite() {
  return (
    <main className={styles.main}>
      <TopBar title="후기 작성" />
      <LectureInfo />
      <Rating />
    </main>
  );
}

export default mypageReviewWrite;
