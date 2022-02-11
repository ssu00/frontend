import React from "react";
import styles from "./lectureDetailIntro.module.scss";
import TopMenu from "../components/lectureDetailIntro/TopMenu";

function lectureDetailIntro() {
  return (
    <section className={styles.container}>
      <TopMenu />
    </section>
  );
}

export default lectureDetailIntro;
