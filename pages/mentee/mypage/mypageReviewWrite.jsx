import React from "react";
import LectureInfo from "../../../components/mentee/mypageReviewWrite/LectureInfo";
import Rating from "../../../components/mentee/mypageReviewWrite/Rating";
import Submit from "../../../components/mentee/mypageReviewWrite/Submit";
import Write from "../../../components/mentee/mypageReviewWrite/Write";
import WriteGuide from "../../../components/mentee/mypageReviewWrite/WriteGuide";
import TopBar from "../../../components/mentee/TopBar";
import HomeIndicator from "../../../components/mentee/HomeIndicator";
import styles from "./template.module.scss";

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
