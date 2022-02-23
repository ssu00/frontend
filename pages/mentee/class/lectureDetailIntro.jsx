import React from "react";
import styles from "./lectureDetailIntro.module.scss";
import TopMenu from "../../../components/mentee/lectureDetailIntro/TopMenu";
import LectureImage from "../../../components/mentee/lectureDetailIntro/LectureImage";
import LectureTitle from "../../../components/mentee/lectureDetailIntro/LectureTitle";
import BottomNavBar from "../../../components/mentee/lectureDetailIntro/BottomNavBar";

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
