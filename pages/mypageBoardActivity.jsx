import React from "react";
import Category from "../components/mypageBoardActivity/Category";
import List from "../components/mypageBoardActivity/List";
import NavBar from "../components/NavBar";
import TopBar from "../components/mypageBoardActivity/TopBar";
import styles from "./template.module.scss";

function MypageBoardActivity() {
  return (
    <main className={styles.main}>
      <TopBar title="게시판 활동내역" />
      <Category />
      <List />
      <NavBar />
    </main>
  );
}

export default MypageBoardActivity;
