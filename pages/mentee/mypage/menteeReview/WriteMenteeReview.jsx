import { useState, useEffect } from "react";
import { IC_Menu } from "../../../../icons";
import styles from "./menteeReview.module.scss";
import { NoWriteReviews } from "./NoWriteReviews";
import { Rating } from "../../../../components/mentor/class/rating";
import OptionModal from "../../../../components/old-mentee/OptionModal";
import router from "next/router";

const WriteMenteeReview = ({ menteeReviews }) => {
  useEffect(() => {
    setReviews(menteeReviews);
  }, []);

  const [reviews, setReviews] = useState([]);
  const [modal, setModal] = useState(false);

  const handleModal = (e) => {
    e.stopPropagation();
    setModal(!modal);
  };

  const writeCon = menteeReviews?.content;

  return (
    <>
      {writeCon.length !== 0 ? (
        <>
          {writeCon?.map((review) => {
            const lectureDate = review.createdAt.slice(0, 10);
            const dateDot = lectureDate.split("-").join(".");

            const score =
              review.score % 1 === 0 ? review.score + ".0" : review.score;
            const krSubject = review.lecture.lectureSubjects?.map(
              (subjects) => subjects.krSubject
            );

            return (
              <div key={review.lecture.id}>
                <div
                  className={styles.pointer}
                  onClick={() =>
                    router.push(
                      `/mentee/mypage/menteeReview/review/detailReview/${review.lecture.id}`
                    )
                  }
                >
                  <section className={styles.line3}>
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
                        <IC_Menu onClick={handleModal} />
                        {modal && (
                          <OptionModal
                            editClick={() => {
                              router.push(
                                `/mentee/mypage/menteeReview/review/${review.lecture.id}/edit`
                              );
                            }}
                            modalHandler={handleModal}
                          />
                        )}
                      </div>
                    </article>
                  </section>
                  <div className={styles.line2} />
                  <section>
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
                <div className={styles.line} />
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
