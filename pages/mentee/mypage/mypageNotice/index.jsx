import React from "react";
import styles from "./template.module.scss";

import TopBar from "../../../../components/mentee/TopBar";
import * as cookie from "cookie";
import List from "../../../../components/mentee/mypageNotice/List";
import { BottomTab } from "../../../../components/common";
import GetNoticeList from "../../../../core/api/Mentee/getNoticeList";

function mypageNotice({ role, noticeList }) {
  console.log(noticeList);
  return (
    <main className={styles.main}>
      <TopBar title="공지사항" />
      <div className={styles.line}>
        <span></span>
      </div>
      {noticeList?.content.map((notice, idx) => (
        <List key={idx} notice={notice} />
      ))}
      <BottomTab num={[0, 0, 0, 1]} role={role} />
    </main>
  );
}

export async function getServerSideProps(context) {
  const role = cookie.parse(context.req.headers.cookie).role;
  const token = cookie.parse(context.req.headers.cookie).accessToken;
  const noticeList = await GetNoticeList(token, 1);

  return {
    props: { role, noticeList },
  };
}

export default mypageNotice;
