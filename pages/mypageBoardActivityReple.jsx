import React from "react";
import Category from "../components/mypageBoardActivityReple/Category";
import List from "../components/mypageBoardActivityReple/List";
import NavBar from "../components/mypageBoardActivityReple/NavBar";
import TopBar from "../components/mypageBoardActivityReple/TopBar";
import styles from "./template.module.scss";

function MypageBoardActivityReple() {
  return (
    <main className={styles.main}>
      <TopBar title="게시판 활동내역" />
      <Category />
      <List />
      <NavBar />
    </main>
  );
}

export default MypageBoardActivityReple;
