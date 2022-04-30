import React from "react";
import * as cookie from "cookie";
import styles from "./boardDetail.module.scss";
import TopBar from "../../../components/mentee/board/TopBar";
import Image from "next/image";
import {
  GetBoardDetail,
  GetBoardDetailComments,
} from "../../../core/api/Mentee/board";

const BoardDetail = ({ postComments, postDetail }) => {
  console.log(postComments, postDetail);
  return (
    <div className={styles.home}>
      <TopBar />
      <main>
        <section className={styles.mainBoard}>
          <div className={styles.profileContainer}>
            <div className={styles.leftPannel}>
              <Image src={"/"} alt="profile" width="40px" height="40px" />
              <div>
                <div className={styles.name}>{postDetail?.userNickname}</div>
                <div className={styles.date}>{postDetail?.createdAt}</div>
              </div>
            </div>
            <div
              className={styles.rightPannel}
            >{`조회수 ${postDetail?.hits} 댓글 ${postDetail.commentCount}`}</div>
          </div>
        </section>
      </main>
    </div>
  );
};

export const getServerSideProps = async (context) => {
  const token = cookie.parse(context.req.headers.cookie).accessToken;
  const role = cookie.parse(context.req.headers.cookie).role;
  const params = context.query;

  const postDetail = await GetBoardDetail(token, params.id);
  const postComments = await GetBoardDetailComments(token, params.id);
  return {
    props: {
      role,
      params,
      postDetail,
      postComments,
    },
  };
};

export default BoardDetail;
