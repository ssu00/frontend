import React from "react";
import { BottomTab } from "../../../components/common";
import Category from "../../../components/mentee/mypageBoardActivity/Category";
import List from "../../../components/mentee/mypageBoardActivity/List";

import * as cookie from "cookie";
import styles from "./template.module.scss";
import { getMyPosts } from "../../../core/api/Mentee";
import TopBar from "../../../components/mentee/mypageBoardActivity/TopBar";
import { useRouter } from "next/router";

function MypageBoardActivity({ boardList, role }) {
  const router = useRouter();

  return (
    <main className={styles.main}>
      <TopBar
        title="게시판 활동내역"
        onClick={() => router.push("/mentee/mypage")}
      />
      <Category />
      <List boardList={boardList.content} />
      <BottomTab num={[0, 0, 0, 1]} role={role} />
    </main>
  );
}

export async function getServerSideProps(context) {
  const parsedCookies = cookie.parse(context.req.headers.cookie);
  const role = parsedCookies.role;
  const token = parsedCookies.accessToken;

  const boardList = await getMyPosts(token, { page: 1 });

  return {
    props: { boardList, role },
  };
}

export default MypageBoardActivity;
