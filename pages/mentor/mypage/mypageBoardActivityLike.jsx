import React from "react";
import Category from "/components/mypageBoardActivityLike/Category";
import List from "/components/mypageBoardActivityLike/List";
import NavBar from "/components/mypageBoardActivityLike/NavBar";
import TopBar from "/components/mypageBoardActivityLike/TopBar";
import styles from "../../template.module.scss";

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
