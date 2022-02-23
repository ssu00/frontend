import React from "react";
import Content from "../../../components/mentee/mypageReviewDetail/Content";
import LectureInfo from "../../../components/mentee/mypageReviewDetail/LectureInfo";
import TopBar from "../../../components/mentee/mypageReviewDetail/TopBar";
import styles from "./template.module.scss";
import HomeIndicator from "../../../components/mentee/HomeIndicator";

function mypageReviewDetail() {
  return (
    <main className={styles.main}>
      <TopBar />
      <LectureInfo />
      <Content />
      <HomeIndicator />
    </main>
  );
}

export default mypageReviewDetail;
