import React from "react";
import Content from "../components/mypageReviewDetail/Content";
import LectureInfo from "../components/mypageReviewDetail/LectureInfo";
import TopBar from "../components/mypageReviewDetail/TopBar";
import styles from "./template.module.scss";
import HomeIndicator from "../components/HomeIndicator";

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
