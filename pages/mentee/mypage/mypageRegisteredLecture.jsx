import { useEffect, useState } from "react";
import * as cookie from "cookie";

import styles from "./mypageRegisteredLecture.module.scss";
import router from "next/router";
import { BottomTab, TopBar } from "../../../components/common";

export const getServerSideProps = async (context) => {
  const token = cookie.parse(context.req.headers.cookie).accessToken;

  return {
    props: { token },
  };
};

const MypageRegisteredLecture = ({ token }) => {
  return (
    <section className={styles.LectureListSection}>
      <TopBar text={"구매한 강의"} onClick={() => router.back()} />
      <div className={styles.ing}>
        <div className={styles.titleBox}>
          <h1 className={styles.title}>강의 진행 중인 멘티</h1>
        </div>
      </div>

      <div className={styles.line} />

      <div className={styles.finished}>
        <div className={styles.titleBox}>
          <h1 className={styles.title}>강의 종료된 멘티</h1>
        </div>
      </div>

      <BottomTab num={[0, 0, 0, 1]} />
    </section>
  );
};

export default MypageRegisteredLecture;
