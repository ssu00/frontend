import React from "react";
import Category from "../components/mypageBoardActivity/Category";
import List from "../components/mypageBoardActivity/List";
import NavBar from "../components/mypageBoardActivity/NavBar";
import TopBar from "../components/mypageBoardActivity/TopBar";
import styles from "./template.module.scss";

function MypageBoardActivity() {
  return (
    <main className={styles.main}>
      <TopBar />
      <Category />
      <List />
      <NavBar />
    </main>
  );
}

export default MypageBoardActivity;
