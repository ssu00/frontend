import { useState, useEffect } from "react";
import router from "next/router";
import renderHTML from "react-render-html";
import InfiniteScroll from "react-infinite-scroll-component";
import GetLectureDetail from "../../../../../core/api/Lecture/getLectureDetail";
import TopBar from "../../../../../components/common/tab/topBar";
import styles from "./classDetail.module.scss";
import Image from "next/image";
import { MenuBtn } from "../../../../../components/common";
import { transLevel } from "../../../../../components/mentor/class/classCard";
import ClassReview from "../../../../../components/mentor/class/classReview";
import GetReview from "../../../../../core/api/Lecture/getReviews";
import {
  Rating,
  RatingBig,
} from "../../../../../components/mentor/class/rating";

export async function getServerSideProps(context) {
  const classID = context.query.cid;
  const classData = await GetLectureDetail(classID);
  const reviewData = await GetReview(classID);
  return {
    props: { classData, reviewData },
  };
}

const ClassDetail = ({ classData, reviewData }) => {
  const [select, setSelect] = useState(true);
  const subjectOnly = classData.lectureSubjects.map(
    (data, i) => data.krSubject
  );
  const score =
    classData.scoreAverage % 1 == 0
      ? classData.scoreAverage + ".0"
      : classData.scoreAverage;

  return (
    <section className={styles.classDetailSection}>
      <TopBar onClick={() => router.push("/mentor/myclass/myClassList")} />
      <div className={styles.imageBlock}>
        <Image src={"/example.png"} width={375} height={277} />
        <div className={styles.classSystemTag}>
          <span>{transLevel(classData)}</span>
        </div>
        <div className={styles.mentorProfileBlock}>
          <Image
            src={"/example.png"}
            width={72}
            height={72}
            className={styles.mentorImg}
          />
          <span className={styles.mentorName}>
            <span className={styles.role}>멘토 </span>
            {classData.lectureMentor.nickname}
          </span>
        </div>
      </div>

      <div className={styles.classInfoBlock}>
        <span className={styles.classSubject}>{subjectOnly.join(", ")}</span>
        <h1 className={styles.title}>{classData.title}</h1>
        <div className={styles.ratingReviewSection}>
          <Rating
            w={49.72}
            h={9.75}
            otherStyle={styles.ratingSmallFill}
            fillRating={score}
          />
          <span className={styles.ratingNum}>{score}</span>
          <span className={styles.reviewCnt} onClick={() => setSelect(false)}>
            <strong>{classData.reviewCount}</strong>개의 후기
          </span>
        </div>
        <span className={styles.subtitle}>{classData.subTitle}</span>
      </div>

      <div className={styles.classPriceBlock}>
        <h1>가격......</h1>
      </div>

      <span className={styles.line} />

      <div className={styles.btnBlock}>
        <MenuBtn
          selected={select}
          text={"강의 소개"}
          ownStyle={styles.menuBtn}
          onClick={() => setSelect(true)}
        />
        <MenuBtn
          selected={!select}
          text={`후기 ${classData.reviewCount}`}
          ownStyle={styles.menuBtn}
          onClick={() => setSelect(false)}
        />
      </div>

      {select ? (
        <div className={styles.classIntroBlock}>
          {renderHTML(classData.content)}
        </div>
      ) : (
        <div className={styles.reviewSection}>
          <div className={styles.ratingBig}>
            <strong className={styles.scoreBig}>{score}</strong>
            <RatingBig w={133.5} h={25.58} fillRating={score} />
          </div>
          <div className={styles.reviews}>
            <h1 className={styles.reviewTitle}>강의 후기</h1>
            {reviewData.content.map((data, i) => {
              return <ClassReview cid={classData.id} mentee={data} key={i} />;
            })}
          </div>
        </div>
      )}
    </section>
  );
};

export default ClassDetail;
