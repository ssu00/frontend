import React from "react";
import HomeIndicator from "/components/HomeIndicator";
import ContentList from "/components/mypageWishList/ContentList";
import TopMenu from "/components/mypageWishList/TopMenu";
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
