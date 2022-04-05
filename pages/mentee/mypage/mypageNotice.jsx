import React from "react";
import styles from "./template.module.scss";

import TopBar from "../../../components/mentee/TopBar";
import * as cookie from "cookie";
import List from "../../../components/mentee/mypageNotice/List";
import { BottomTab } from "../../../components/common";

function mypageNotice({ role }) {
  return (
    <main className={styles.main}>
      <TopBar title="공지사항" />
      <List />
      <BottomTab num={[0, 0, 0, 1]} role={role} />
    </main>
  );
}

export async function getServerSideProps(context) {
  const role = cookie.parse(context.req.headers.cookie).role;

  return {
    props: { role },
  };
}

export default mypageNotice;
