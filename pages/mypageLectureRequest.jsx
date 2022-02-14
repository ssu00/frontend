import React from "react";
import styles from "./template.module.scss";
import TopBar from "../components/mypageLectureRequest/TopBar";
import Notice from "../components/mypageLectureRequest/Notice";
import Content from "../components/mypageLectureRequest/Content";
import Bottom from "../components/mypageLectureRequest/Bottom";
import HomeIndicator from "../components/HomeIndicator";
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
