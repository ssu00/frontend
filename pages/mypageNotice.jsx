import React from "react";
import styles from "./template.module.scss";
import TopBar from "../components/TopBar";
import NavBar from "../components/NavBar";
import List from "../components/mypageNotice/List";

function mypageNotice() {
  return (
    <main className={styles.main}>
      <TopBar title="공지사항" />
      <List />
      <NavBar />
    </main>
  );
}

export default mypageNotice;
