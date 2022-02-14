import React from "react";
import styles from "./template.module.scss";
import TopBar from "../components/mypageLectureRequest/TopBar";
import Notice from "../components/mypageLectureRequest/Notice";

function mypageLectureRequest() {
  return (
    <main className={styles.main}>
      <TopBar />
      <Notice />
    </main>
  );
}

export default mypageLectureRequest;
