import Image from "next/image";
import React from "react";
import { BottomTab } from "../../../components/common";
import Header from "../../../components/mentee/board/Header";
import List from "../../../components/mentee/board/List";
import { IC_SearchS } from "../../../icons";
import styles from "./board.module.scss";
import * as cookie from "cookie";
import router from "next/router";
import { GetBoardList } from "../../../core/api/Mentee/board";

const Board = ({ role }) => {
  //   console.log(boardList);
  return (
    <div className={styles.home}>
      <Header />
      <main>
        <div className={styles.inputBox}>
          <input type="text" placeholder="검색" />
          <IC_SearchS className={styles.searchIcon} />
        </div>
      </main>
      <List />
      <BottomTab num={[0, 1, 0, 0]} role={role} />
    </div>
  );
};

export const getServerSideProps = async (context) => {
  const token = cookie.parse(context.req.headers.cookie).accessToken;
  const role = cookie.parse(context.req.headers.cookie).role;

  const boardList = await GetBoardList(token, { page: 1 });
  return {
    props: {
      role,
    },
  };
};

export default Board;
