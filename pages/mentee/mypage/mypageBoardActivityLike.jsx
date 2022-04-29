import React from "react";
import { BottomTab } from "../../../components/common";
import Category from "../../../components/mentee/mypageBoardActivityLike/Category";
import List from "../../../components/mentee/mypageBoardActivityLike/List";
import * as cookie from "cookie";

import styles from "./template.module.scss";
import { GetMyLikes } from "../../../core/api/Mentee/getMypageBoard";
import TopBar from "../../../components/mentee/mypageBoardActivity/TopBar";

function MypageBoardActivityLike({ likeList, role }) {
  return (
    <main className={styles.main}>
      <TopBar title="게시판 활동내역" />
      <Category />
      <List />
      <BottomTab num={[0, 0, 0, 1]} role={role} />
    </main>
  );
}

export async function getServerSideProps(context) {
  const parsedCookies = cookie.parse(context.req.headers.cookie);
  const role = parsedCookies.role;
  const token = parsedCookies.accessToken;

  const likeList = await GetMyLikes(token, { page: 1 });

  return {
    props: { likeList, role },
  };
}

export default MypageBoardActivityLike;
