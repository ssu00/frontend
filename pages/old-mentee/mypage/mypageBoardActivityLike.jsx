import React from "react";
import Category from "../../../components/mentee/mypageBoardActivityLike/Category";
import List from "../../../components/mentee/mypageBoardActivityLike/List";
import NavBar from "../../../components/mentee/mypageBoardActivityLike/NavBar";
import TopBar from "../../../components/mentee/mypageBoardActivityLike/TopBar";
import styles from "./template.module.scss";

function MypageBoardActivityLike() {
  return (
    <main className={styles.main}>
      <TopBar title="게시판 활동내역" />
      <Category />
      <List />
      <NavBar />
    </main>
  );
}

export default MypageBoardActivityLike;
