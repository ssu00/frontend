import { useRouter } from "next/router";
import React, { useEffect } from "react";
import BottomNavBar from "../../../components/mentee/classdetails/BottomNavBar";
import LectureImage from "../../../components/mentee/classdetails/LectureImage";
import LectureTitle from "../../../components/mentee/classdetails/LectureTitle";
import TopMenu from "../../../components/mentee/classdetails/TopMenu";

import * as cookie from "cookie";
import styles from "./classdetails.module.scss";
import GetLectureDetails from "../../../core/api/Mentee/getLectureDetails";
import { GetReview } from "../../../core/api/Lecture";

const ClassDetails = ({ token, classData, reviewData, params }) => {
  return (
    <section className={styles.container}>
      <TopMenu />
      <LectureImage classData={classData} />
      <LectureTitle
        token={token}
        classData={classData}
        reviewData={reviewData}
      />
      <BottomNavBar classData={classData} token={token} params={params} />
    </section>
  );
};

export async function getServerSideProps(context) {
  const token = cookie.parse(context.req.headers.cookie).accessToken;

  const params = context.query;

  const classData = await GetLectureDetails(token, params);
  const reviewData = await GetReview(params);

  return {
    props: {
      token,
      classData,
      reviewData,
      params,
    },
  };
}

export default ClassDetails;
