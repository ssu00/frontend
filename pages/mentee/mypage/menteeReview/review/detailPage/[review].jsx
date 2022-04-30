import { React, useState, useEffect } from "react";
import { getReviewIndividualInquiry } from "../../../../../../core/api/Mentee/getReviewIndividualInquiry";
import { getMyReviews } from "../../../../../../core/api/Mentee/getMyReviews";
import * as cookie from "cookie";
import styles from "./detailReview.module.scss";
import { TopBar } from "../../../../../../components/common";
import { IC_Menu } from "../../../../../../icons";
import router from "next/router";
import classNames from "classnames";
import { Rating } from "../../../../../../components/mentor/class/rating";
import OptionModal from "../../../../../../components/old-mentee/OptionModal";
import RefreshPage from "../../../../../../utils/RefreshPage";
import deleteMenteeReivew from "../../../../../../core/api/Mentee/deleteMenteeReview";

export async function getServerSideProps(context) {
  const token = cookie.parse(context.req.headers.cookie).accessToken;
  const review = context.query.review;
  const menteeReviews = await getReviewIndividualInquiry(token, review);

  const lecturesCon = await getMyReviews(review);

  return {
    props: { token, menteeReviews, lecturesCon, review },
  };
}

const detailReview = ({ menteeReviews, token, lecturesCon, review }) => {
  const [detail, setDetail] = useState([]);
  const [lectureConInfo, setLectureConInfo] = useState([]);

  const [modal, setModal] = useState(false);

  const handleModal = (e) => {
    e.stopPropagation();
    setModal(!modal);
  };

  useEffect(() => {
    setDetail(menteeReviews);
    setLectureConInfo(lecturesCon);
  }, []);

  const lecture = lecturesCon.lecture;

  const score = detail.score % 1 === 0 ? detail.score + ".0" : detail.score;
  const reviewData = String(detail.createdAt).substr(0, 10);
  const dateDot = reviewData.split("-").join(".");

  return (
    <div key={menteeReviews.id}>
      <section className={styles.topSection}>
        {modal && (
          <OptionModal
            editClick={() => {
              router.push(
                `/mentee/mypage/menteeReview/review/editPage/${review}`
              );
            }}
            deleteClick={async () => {
              await deleteMenteeReivew(token, review);
              router.push(`/mentee/mypage/menteeReview`);
              RefreshPage();
            }}
            modalHandler={handleModal}
          />
        )}

        <TopBar
          text={"후기 상세보기"}
          onClick={() => {
            router.back();
          }}
        />

        <IC_Menu onClick={handleModal} className={styles.pointer} />
      </section>

      <section className={styles.contentSection}>
        <article className={classNames(styles.bg, styles.line)}>
          <div className={styles.detailInfo}>
            <img className={styles.detailReviewImg} src={lecture.thumbnail} />

            <div>
              <p>{lecture.title}</p>
              <p className={styles.mentorName}>{lecture.mentorNickname}</p>

              <p>
                <span className={styles.totalPrice}>
                  {lecture?.lecturePrice.totalPrice
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  <span className={styles.totalPriceWon}> 원 </span>
                </span>
                <span className={styles.priceStandard}>/ 1개월 기준</span>
              </p>
            </div>
          </div>
        </article>

        <div className={styles.line2} />

        <article className={styles.bg}>
          <div className={styles.detailReviewCon}>
            <div className={styles.menteeCon}>
              <div className={styles.menteeInfo}>
                <img className={styles.menteeImg} src={detail.userImage} />
                <div className={styles.menteeName}>
                  <p>{detail.userNickname}</p>

                  <Rating
                    w={"50px"}
                    h={"10px"}
                    otherStyle={styles.score}
                    fillRating={score}
                  />
                </div>

                <p className={styles.date}>{dateDot}</p>
              </div>

              <div className={styles.reivew}>
                <p className={styles.system}>
                  옵션:{" "}
                  {lecture?.systems.length === 2
                    ? "온라인/오프라인"
                    : lecture?.systems.name === "온라인"
                    ? "온라인"
                    : "오프라인"}
                  {lecture.lecturePrices?.isGroup
                    ? `${(<span>"/ 그룹"</span>)}`
                    : null}
                </p>

                <div className={styles.reivewText}>
                  <p>{detail.content}</p>
                </div>
              </div>
            </div>
          </div>
        </article>
      </section>
    </div>
  );
};

export default detailReview;
