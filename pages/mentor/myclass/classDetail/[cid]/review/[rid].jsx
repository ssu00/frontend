import { useEffect, useState } from "react";
import router from "next/router";
import * as cookie from "cookie";
import styles from "./reviewDetail.module.scss";
import {
  TopBar,
  BottomBlueBtn,
  ModalWithBackground,
  BasicModal,
} from "../../../../../../components/common";
import { MenteeReview } from "../../../../../../components/mentor/class/classReview";
import {
  GetReviewOnlyOne,
  WriteMentorReview,
  EditMentorReview,
} from "../../../../../../core/api/Lecture";

export async function getServerSideProps(context) {
  const classID = context.query.cid;
  const reviewID = context.query.rid;
  const reviewData = await GetReviewOnlyOne(classID, reviewID);
  const parsedCookies = cookie.parse(context.req.headers.cookie);

  return {
    props: {
      classID,
      reviewID,
      reviewData,
      parsedCookies,
    },
  };
}

const ReviewDetail = ({ classID, reviewID, reviewData, parsedCookies }) => {
  const [comment, setComment] = useState("");
  const [modal, setModal] = useState(false);
  const [writeType, setWriteType] = useState("register");
  const [err, setErr] = useState(false);

  useEffect(() => {
    if (reviewData.child.mentorReviewId) {
      setWriteType("edit");
      setComment(reviewData.child.content);
    }
  }, []);

  return (
    <section className={styles.reviewDetailSection}>
      {modal ? (
        <ModalWithBackground setModal={setModal} prevent={true}>
          <BasicModal
            notice={
              err != ""
                ? "등록에 실패했습니다."
                : writeType == "register"
                ? `정상적으로 등록되었습니다.`
                : "정상적으로 수정되었습니다."
            }
            btnText={"강의 상세보기"}
            modalStyle={"square"}
            btnClick={() =>
              router.push(`/mentor/myclass/classDetail/${classID}`)
            }
          />
        </ModalWithBackground>
      ) : (
        <></>
      )}
      <TopBar
        text={"후기 상세보기"}
        onClick={() => router.push(`/mentor/myclass/classDetail/${classID}`)}
      />
      <div className={styles.menteeReviewBlock}>
        <MenteeReview data={reviewData} />
      </div>
      <div className={styles.line} />
      <div className={styles.commentBlock}>
        <h1 className={styles.commentTitle}>후기 답글</h1>
        <textarea
          className={styles.writeComment}
          onChange={(e) => setComment(e.target.value)}
          value={comment}
        ></textarea>
      </div>
      <BottomBlueBtn
        text={writeType == "register" ? "등록" : "수정"}
        onClick={async () => {
          if (writeType == "register") {
            await WriteMentorReview(
              parsedCookies.accessToken,
              classID,
              reviewID,
              comment
            ).then((res) => {
              if (res == 201) {
                setModal(true);
                setErr("");
              } else {
                setModal(false);
                setErr("실패");
              }
            });
          } else {
            await EditMentorReview(
              parsedCookies.accessToken,
              classID,
              reviewID,
              reviewData.child.mentorReviewId,
              comment
            ).then((res) => {
              if (res == 200) {
                setModal(true);
                setErr("");
              } else {
                setModal(false);
                setErr("실패");
              }
            });
          }
        }}
      />
    </section>
  );
};

export default ReviewDetail;
