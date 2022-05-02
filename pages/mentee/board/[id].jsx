import React from "react";
import * as cookie from "cookie";
import styles from "./boardDetail.module.scss";
import TopBar from "../../../components/mentee/board/TopBar";
import Image from "next/image";
import {
  GetBoardDetail,
  GetBoardDetailComments,
} from "../../../core/api/Mentee/board";
import { IC_CommentBubble, IC_HeartRedFill, IC_Report } from "../../../icons";
import BoardComment from "../../../components/mentee/board/BoardComment";

const BoardDetail = ({ postComments, postDetail }) => {
  return (
    <div className={styles.home}>
      <TopBar />
      <main>
        <section className={styles.mainBoard}>
          <div className={styles.profileContainer}>
            <div className={styles.leftPannel}>
              <div className={styles.image}>
                <Image
                  src={postDetail.userImage ? postDetail.userImage : "/"}
                  alt="profile"
                  width="40px"
                  height="40px"
                  x
                />
              </div>
            </div>
            <div className={styles.rightPannel}>
              <span className={styles.name}>{postDetail?.userNickname}</span>
              <div className={styles.rightBottom}>
                <span className={styles.date}>{postDetail?.createdAt}</span>
                <span className={styles.seen}>
                  {`조회수 ${postDetail?.hits} 댓글 ${postDetail.commentCount}`}
                </span>
              </div>
            </div>
          </div>
          <div className={styles.contentContainer}>
            <div className={styles.requestLecture}>강의요청</div>
            <span className={styles.title}>{postDetail.title}</span>
            <span className={styles.content}>{postDetail.content}</span>
          </div>

          <div className={styles.buttonContainer}>
            <div className={styles.leftSide}>
              <button className={styles.likesButton}>
                <IC_HeartRedFill />
                {`좋아요 ${postDetail.likingCount}`}
              </button>
              <button className={styles.commentsButton}>
                <IC_CommentBubble />
                {`댓글 ${postDetail.commentCount}`}
              </button>
            </div>
            <div className={styles.rightSide}>
              <button className={styles.reportButton}>
                <IC_Report />
                신고
              </button>
            </div>
          </div>
        </section>
        <section className={styles.commentSection}>
          {postComments?.content?.map((content) => (
            <BoardComment key={content.postId} content={content} />
          ))}
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
