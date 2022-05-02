import { Rating } from "@mui/material";
import Image from "next/image";
import { IC_HeartEmptySm, IC_HeartRedFill, IC_HeightBar } from "../../../icons";
import styles from "./MentorLecture.module.scss";
import router from "next/router";

const MentorLecture = ({ lectureListData }) => {
  const lectureCon = lectureListData.content;

  console.log(lectureListData);
  return (
    <section className={styles.lectureSection}>
      {lectureCon?.map((info) => {
        return (
          <article
            className={styles.classCard}
            key={info.id}
            onClick={() => {
              router.push({
                pathname: `/mentee/classdetails/${info.lectureId}`,
                query: {
                  lecturePriceId: info.lecturePrice.lecturePriceId,
                  mentorId: info.lectureMentor.mentorId,
                },
              });
            }}
          >
            <div className={styles.imageContainer}>
              <Image
                src={info.thumbnail ? info.thumbnail : "/samples/lecture.png"}
                layout="fill"
                objectFit="cover"
              />
              <div className={styles.labels}>
                <p className={styles.label}>
                  {info.difficulty === "BASIC" && "입문"}
                  {info.difficulty === "BEGINNER" && "초급"}
                  {info.difficulty === "INTERMEDIATE" && "중급"}
                  {info.difficulty === "ADVANCED" && "고급"}
                </p>

                {info.lecturePrices?.map((group, i) => (
                  <p key={i}>{group.isGroup ? "그룹" : null}</p>
                ))}
              </div>
            </div>

            <div className={styles.informationBox}>
              <div className={styles.tags}>
                {info.systems?.map((sys, i) => (
                  <p className={styles.tag} key={i}>
                    {sys.type}
                  </p>
                ))}
              </div>
              <h2>{info.title}</h2>
              <p className={styles.tutorName}>
                튜터 {info.lectureMentor.nickname}
              </p>

              <div className={styles.rating}>
                {info.picked ? (
                  <IC_HeartRedFill width="16px" height="16px" />
                ) : (
                  <IC_HeartEmptySm width="16px" height="16px" />
                )}

                <span>{info.enrollmentCount}</span>
                <IC_HeightBar
                  width="1"
                  height="8"
                  className={styles.height_bar}
                />

                <Rating
                  className={styles.stars}
                  value={info.scoreAverage}
                  precision={0.5}
                />

                <p className={styles.review_num}>
                  {info.lectureMentor.reviewCount}개 후기
                </p>
              </div>

              <div className={styles.price_box}>
                <span className={styles.sale}></span>
                {info.lecturePrices?.map((pries, i) => (
                  <span className={styles.price} key={i}>
                    {pries.totalPrice}
                  </span>
                ))}
                <span className={styles.infoWon}>
                  {info?.lecturePrice.totalPrice
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  원
                </span>
                <span className={styles.month}>/1개월 기준</span>
              </div>
            </div>
          </article>
        );
      })}
    </section>
  );
};

export default MentorLecture;
