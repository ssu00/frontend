import { useRouter } from "next/router";
import React, { useEffect } from "react";
import BottomNavBar from "../../../components/mentee/classdetails/BottomNavBar";
import LectureImage from "../../../components/mentee/classdetails/LectureImage";
import LectureTitle from "../../../components/mentee/classdetails/LectureTitle";
import TopMenu from "../../../components/mentee/classdetails/TopMenu";
import { GetLectureDetail } from "../../../core/api/Lecture";
import * as cookie from "cookie";
import styles from "./classdetails.module.scss";

const ClassDetails = () => {
  return (
    <section className={styles.container}>
      <TopMenu />
      <LectureImage />
      <LectureTitle />
      <BottomNavBar />
    </section>
  );
};

export default ClassDetails;
