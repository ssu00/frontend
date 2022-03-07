import React from "react";
import Category from "../../../components/mentee/mypageBoardActivity/Category";
import List from "../../../components/mentee/mypageBoardActivity/List";
import NavBar from "../../../components/mentee/NavBar";
import TopBar from "../../../components/mentee/mypageBoardActivity/TopBar";
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
