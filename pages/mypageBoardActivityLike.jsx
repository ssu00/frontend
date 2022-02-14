import React from "react";
import Category from "../components/mypageBoardActivityLike/Category";
import List from "../components/mypageBoardActivityLike/List";
import NavBar from "../components/mypageBoardActivityLike/NavBar";
import TopBar from "../components/mypageBoardActivityLike/TopBar";
import styles from "./template.module.scss";

function MypageBoardActivityLike() {
  return (
    <main className={styles.main}>
      <TopBar />
      <Category />
      <List />
      <NavBar />
    </main>
  );
}

export default MypageBoardActivityLike;
