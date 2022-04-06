import { React, useState, useEffect } from "react";
import { getReviewMentee } from "../../../../../../core/api/Mentee/getReviewMentee";
import * as cookie from "cookie";
import styles from "./detailReview.module.scss";
import { TopBar } from "../../../../../../components/common";
import { IC_Menu } from "../../../../../../icons";
import router from "next/router";
import classNames from "classnames";
import { Rating } from "../../../../../../components/mentor/class/rating";

export async function getServerSideProps(context) {
  const token = cookie.parse(context.req.headers.cookie).accessToken;
  const menteeReviews = await getReviewMentee(token);

  return {
    props: { menteeReviews },
  };
}

const detailReview = ({ menteeReviews }) => {
  const [detail, setDetail] = useState([]);

  useEffect(() => {
    setDetail(menteeReviews);
  }, []);

  const menteeCon = menteeReviews.content;

  return (
    <>
      <section className={styles.topSection}>
        <TopBar
          text={"후기 상세보기"}
          onClick={() => {
            router.back();
          }}
        />

        <IC_Menu />
      </section>

      <section className={styles.contentSection}>
        <article className={classNames(styles.bg, styles.line)}>
          <div className={styles.detailInfo}>
            <img
              className={styles.detailReviewImg}
              src={"/samples/lecture2.jpg"}
            />
            {menteeCon?.map((info) => {
              const content = info.content;
              const lecture = info.lecture;
              const lecturePrices = info.lecture.lecturePrices;

              return (
                <div key={lecture.id}>
                  <p>{content}</p>
                  <p className={styles.mentorName}>{lecture.mentorNickname}</p>

                  {lecturePrices?.map((pricesInfo) => (
                    <p key={pricesInfo.lecturePriceId}>
                      <span className={styles.totalPrice}>
                        {pricesInfo.totalPrice
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                        <span className={styles.totalPriceWon}> 원 </span>
                      </span>
                      <span className={styles.priceStandard}>/ 1개월 기준</span>
                    </p>
                  ))}
                </div>
              );
            })}
          </div>
        </article>

        <div className={styles.line2} />

        <article className={styles.bg}>
          <div className={styles.detailReviewCon}>
            {menteeCon?.map((info) => {
              const child = info.child;
              const systems = info.lecture.systems;
              const lecturePrices = info.lecture.lecturePrices;
              const score =
                info.score % 1 === 0 ? info.score + ".0" : info.score;
              const lectureDate = info.createdAt.slice(0, 10);
              const dateDot = lectureDate.split("-").join(".");

              return (
                <div key={child.reviewId} className={styles.menteeCon}>
                  <div className={styles.menteeInfo}>
                    <img className={styles.menteeImg} src={child.userImage} />
                    <div className={styles.menteeName}>
                      <p>{child.userNickname}</p>

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
                    {systems.map((option1, i) => {
                      return (
                        <p key={i}>
                          {option1.name === "온라인" ? (
                            <span>옵션1 : 온라인</span>
                          ) : (
                            <span>옵션1 : 오프라인</span>
                          )}
                        </p>
                      );
                    })}
                    {lecturePrices.map((option2, i) => {
                      return (
                        <p key={i} className={styles.mt14}>
                          {option2.isGroup ? <span>옵션2 : 그룹</span> : null}
                        </p>
                      );
                    })}

                    <div className={styles.reivewText}>
                      <p>{child.content}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </article>
      </section>
    </>
  );
};

export default detailReview;
