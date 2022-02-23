import React from "react";
import LecturePrice from "./LecturePrice";
import styles from "./LectureTitle.module.scss";

function LectureTitle() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.main_box}>
          <div className={styles.lang}>개발언어 > SQL / R / Python</div>
          <div className={styles.title}>
            금융권 취업을 위한 데이터 분석 및 모델링 - SQL, R, Python
          </div>
          <div className={styles.review}>
            <div className={styles.star}>
              <img src={"/images/menteeall/star.svg"} />
              <img src={"/images/menteeall/star.svg"} />
              <img src={"/images/menteeall/star.svg"} />
              <img src={"/images/menteeall/star.svg"} />
              <img src={"/images/menteeall/star.svg"} />
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
      </div>
    </>
  );
}

export default LectureTitle;
