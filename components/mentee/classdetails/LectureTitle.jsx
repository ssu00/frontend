import React, { useState } from "react";
import LecturePrice from "./LecturePrice";
import styles from "./LectureTitle.module.scss";
import { IC_Star } from "../../../icons";
import * as cookie from "cookie";
import { MenuBtn } from "../../common";
import { RatingBig } from "../../mentor/class/rating";
import ClassReview from "../../mentor/class/classReview";
import { GetLectureDetail, GetReview } from "../../../core/api/Lecture";
import renderHTML from "react-render-html";

export async function getServerSideProps(context) {
  const classID = context.query.cid;
  const classData = await GetLectureDetail(classID);
  const reviewData = await GetReview(classID);
  const token = cookie.parse(context.req.headers.cookie).accessToken;

  return {
    props: { token, classData, reviewData },
  };
}
function LectureTitle({ token, classData, reviewData }) {
  const [select, setSelect] = useState(true);
  console.log(classData);
  const score =
    classData?.scoreAverage % 1 == 0
      ? classData?.scoreAverage + ".0"
      : classData?.scoreAverage;
  return (
    <>
      <div className={styles.container}>
        <div className={styles.main_box}>
          <div className={styles.lang}>{`개발언어 > SQL / R / Python`}</div>
          <div className={styles.title}>
            금융권 취업을 위한 데이터 분석 및 모델링 - SQL, R, Python
          </div>
          <div className={styles.review}>
            <div className={styles.star}>
              <IC_Star />
              <IC_Star />
              <IC_Star />
              <IC_Star />
              <IC_Star />
              <span>5.0</span>
            </div>
            <a href="#">24 개의 후기</a>
          </div>
          <div className={styles.content}>
            데이터분석 기초부터 실무까지,
            <br /> 현업에서 사용하는 데이터 분석 기술 파헤치기 !{" "}
          </div>
        </div>
        <LecturePrice />
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
            text={`후기 ${classData?.reviewCount}`}
            ownStyle={styles.menuBtn}
            onClick={() => setSelect(false)}
          />
        </div>

        {select ? (
          <div className={styles.classIntroBlock}>
            {/* {renderHTML(classData?.content)} */}
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
                return (
                  <ClassReview
                    token={token}
                    cid={classData.id}
                    mentee={data}
                    key={i}
                  />
                );
              })}
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default LectureTitle;
