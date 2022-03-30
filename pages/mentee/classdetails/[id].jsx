import { useRouter } from "next/router";
import React, { useEffect } from "react";
import BottomNavBar from "../../../components/mentee/classdetails/BottomNavBar";
import LectureImage from "../../../components/mentee/classdetails/LectureImage";
import LectureTitle from "../../../components/mentee/classdetails/LectureTitle";
import TopMenu from "../../../components/mentee/classdetails/TopMenu";
import { GetLectureDetail } from "../../../core/api/Lecture";
import * as cookie from "cookie";
import styles from "./classdetails.module.scss";

const ClassDetails = ({ classes, context }) => {
  console.log(classes, context);
  return (
    <section className={styles.container}>
      <TopMenu />
      <LectureImage />
      <LectureTitle />
      <BottomNavBar />
    </section>
  );
};

export const getServerSideProps = async (context) => {
  const parsedCookies = cookie.parse(context.req.headers.cookie);
  const classID = context.query;

  const classes = await GetLectureDetail(parsedCookies.accessToken, classID);

  return {
    props: {
      classes: JSON.parse(JSON.stringify(classes)),
      parsedCookies,
    },
  };
};

export default ClassDetails;
