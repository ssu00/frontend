import React from "react";
import styles from "./template.module.scss";
import TopBar from "../../../components/mentee/mypageLectureRequest/TopBar";
import Notice from "../../../components/mentee/mypageLectureRequest/Notice";
import Content from "../../../components/mentee/mypageLectureRequest/Content";
import Bottom from "../../../components/mentee/mypageLectureRequest/Bottom";
import HomeIndicator from "../../../components/mentee/HomeIndicator";
function mypageLectureRequest() {
  return (
    <main className={styles.main}>
      <TopBar title="강의 요청" />
      <Notice />
      <Content />
      <Bottom title="요청" />
      <HomeIndicator />
    </main>
  );
}

export default mypageLectureRequest;
