import React from "react";
import LectureInfo from "/components/mypageReviewWrite/LectureInfo";
import Rating from "/components/mypageReviewWrite/Rating";
import Submit from "/components/mypageReviewWrite/Submit";
import Write from "/components/mypageReviewWrite/Write";
import WriteGuide from "/components/mypageReviewWrite/WriteGuide";
import TopBar from "/components/TopBar";
import HomeIndicator from "/components/HomeIndicator";
import styles from "../../template.module.scss";

function mypageReviewWrite() {
  return (
    <main className={styles.main}>
      <TopBar title="후기 작성" />
      <LectureInfo />
      <Rating />
      <Write />
      <WriteGuide />
      <Submit />
      <HomeIndicator />
    </main>
  );
}

export default mypageReviewWrite;
