import React from "react";
import styles from "./lectureDetailIntro.module.scss";
import TopMenu from "../components/lectureDetailIntro/TopMenu";
import LectureImage from "../components/lectureDetailIntro/LectureImage";
import LectureTitle from "../components/lectureDetailIntro/LectureTitle";
import BottomNavBar from "../components/lectureDetailIntro/BottomNavBar";

function lectureDetailIntro() {
  return (
    <section className={styles.container}>
      <TopMenu />
      <LectureImage />
      <LectureTitle />
      <BottomNavBar />
    </section>
  );
}

export default lectureDetailIntro;
