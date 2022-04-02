import { useState, useEffect } from "react";
import { IC_Menu } from "../../../../icons";
import styles from "./menteeReview.module.scss";
import { NoWriteReviews } from "./NoWriteReviews";
import { Rating } from "../../../../components/mentor/class/rating";
import OptionModal from "../../../../components/old-mentee/OptionModal";
import router from "next/router";
import classNames from "classnames";

const WriteMenteeReview = ({ menteeReviews }) => {
  useEffect(() => {
    setReviews(menteeReviews);
  }, []);

  const [reviews, setReviews] = useState([]);
  const [modal, setModal] = useState(false);

  const handleModal = () => {
    setModal(!modal);
  };

  const writeCon = menteeReviews?.content;

  return (
    <>
      {writeCon.length !== 0 ? (
        <>
          {writeCon?.map((review) => {
            const krSubject = review.lecture.lectureSubjects?.map(
              (subjects) => subjects.krSubject
            );

            return (
              <div
                className={classNames(styles.pointer, styles.reviewList)}
                key={review.lecture.id}
              >
                <section
                  className={styles.reviewListInfo}
                  onClick={() =>
                    router.push(
                      `/mentee/mypage/menteeReview/review/${review.lecture.id}`
                    )
                  }
                >
                  <article className={styles.bg}>
                    <div className={styles.review}>
                      <img
                        className={styles.reviewImg}
                        src={"/samples/lecture2.jpg"}
                      />
                      {/* <img
                src={review.lecture.thumbnail}
                alt={review.lecture.lectureTitle}
              /> */}
                      <div className={styles.writeReviewCnt}>
                        <p>
                          [ <span>{krSubject.join(",")}</span> ]
                        </p>
                        <p>{review.lecture.title}</p>
                        <p className={styles.reviewInfoText}>
                          {review.lecture.systems?.map((type, i) => (
                            <span key={i}>{type.name} </span>
                          ))}
                          {review.lecture.lecturePrices?.map((group, i) => (
                            <span key={i}>
                              {group.isGroup ? ` / 그룹` : null}
                            </span>
                          ))}
                        </p>
                      </div>
                    </div>
                  </article>
                </section>

                <IC_Menu onClick={handleModal} />
                {modal && (
                  <OptionModal
                    editClick={router.push(
                      `/mentee/mypage/menteeReview/review/${review.lecture.id}/edit`
                    )}
                    modalHandler={handleModal}
                  />
                )}
              </div>
            );
          })}

          {writeCon?.map((review) => {
            const lectureDate = review.createdAt.slice(0, 10);
            const dateDot = lectureDate.split("-").join(".");

            const score =
              review.score % 1 === 0 ? review.score + ".0" : review.score;
            return (
              <div
                onClick={() =>
                  router.push(
                    `/mentee/mypage/menteeReview/review/${review.lecture.id}`
                  )
                }
                className={styles.pointer}
                key={review.lecture.id}
              >
                <section className={classNames(styles.line2, styles.testt)}>
                  <article className={styles.bg}>
                    <div className={styles.writeReview}>
                      <Rating
                        w={"50px"}
                        h={"10px"}
                        otherStyle={styles.score}
                        fillRating={score}
                      />
                      <p>{dateDot}</p>
                    </div>
                    <p className={styles.contentText}>{review.content}</p>
                  </article>
                </section>
              </div>
            );
          })}
        </>
      ) : (
        <NoWriteReviews text={"작성한 후기가 없습니다."} />
      )}
    </>
  );
};

export default WriteMenteeReview;
