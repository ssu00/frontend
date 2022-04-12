import React from "react";
import HomeIndicator from "../../../components/mentee/HomeIndicator";
import ContentList from "../../../components/mentee/mypageWishList/ContentList";
import TopMenu from "../../../components/mentee/mypageWishList/TopMenu";
import styles from "./mypageWishList.module.scss";
import * as cookie from "cookie";
import GetMenteePicks from "../../../core/api/Mentee/getMenteePicks";

export default function myPageWishList({ wishList }) {
  return (
    <main className={styles.main}>
      <TopMenu />
      {wishList.content.map((wish, idx) => (
        <ContentList key={idx} wish={wish} />
      ))}
      <HomeIndicator />
    </main>
  );
}

export const getServerSideProps = async (context) => {
  const token = cookie.parse(context.req.headers.cookie).accessToken;
  const wishList = await GetMenteePicks(token, 1);

  return {
    props: { token, wishList: JSON.parse(JSON.stringify(wishList)) },
  };
};
