import { useEffect, useState } from "react";
import router from "next/router";
import GetReviewOnlyOne from "../../../../../../core/api/Lecture/getReviewOnlyOne";
import { MenteeReview } from "../../../../../../components/mentor/class/classReview";
import TopBar from "../../../../../../components/common/tab/topBar";
import styles from "./reviewDetail.module.scss";
import BottomBlueBtn from "../../../../../../components/common/button/bottomBlueBtn";
import WriteMentorReview from "../../../../../../core/api/Lecture/writeMentorReview";
import ModalWithBackground from "../../../../../../components/common/modal/modalWithBackground";
import BasicModal from "../../../../../../components/common/modal/basicModal";
import * as cookie from "cookie";
import EditMentorReview from "../../../../../../core/api/Lecture/editMentorReview";

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

  useEffect(() => {
    if (reviewData.child.reviewId) {
      setWriteType("edit");
      setComment(reviewData.child.content);
    }
  }, []);

  return (
    <section className={styles.reviewDetailSection}>
      {modal ? (
        <ModalWithBackground setModal={setModal}>
          <BasicModal
            notice={
              writeType == "register"
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
              if (res == 201) setModal(true);
            });
          } else {
            await EditMentorReview(
              parsedCookies.accessToken,
              classID,
              reviewID,
              reviewData.child.reviewId,
              comment
            ).then((res) => {
              if (res == 200) setModal(true);
            });
          }
        }}
      />
    </section>
  );
};

export default ReviewDetail;
