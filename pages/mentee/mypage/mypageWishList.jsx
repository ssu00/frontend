import React from "react";
import HomeIndicator from "../../../components/mentee/HomeIndicator";
import ContentList from "../../../components/mentee/mypageWishList/ContentList";
import TopMenu from "../../../components/mentee/mypageWishList/TopMenu";
import styles from "./mypageWishList.module.scss";

export default function myPageWishList() {
  return (
    <main className={styles.main}>
      <TopMenu />
      <ContentList />
      <HomeIndicator />
    </main>
  );
}

// export async function getServerSideProps() {

// }
