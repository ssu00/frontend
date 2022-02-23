import React from "react";
import styles from "./Lecture.module.scss";
function Lecture() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.lecture_img}>
          <div className={styles.category_box}>
            <span>초급</span>
            <span>그룹</span>
          </div>
        </div>
        <div className={styles.content_box}>
          <div className={styles.online}>ONLINE</div>
          <p className={styles.title}>
            금융권 취업을 위한 데이터 분석 및 모델링 SQL, R, Python
          </p>
          <span className={styles.tutor}>튜터 김하나</span>
          <div className={styles.rating}>
            <img
              src={"/images/menteeall/heart-icon.svg"}
              width="16px"
              height="16px"
            />
            <span>56</span>
            <img
              src={"/images/menteeall/height-bar.svg"}
              width="1"
              height="8"
              className={styles.height_bar}
            />
            <div className={styles.stars}>
              <img
                src={"/images/menteeall/star.svg"}
                width="11px"
                height="11px"
              />
              <img
                src={"/images/menteeall/star.svg"}
                width="11px"
                height="11px"
              />
              <img
                src={"/images/menteeall/star.svg"}
                width="11px"
                height="11px"
              />
              <img
                src={"/images/menteeall/star.svg"}
                width="11px"
                height="11px"
              />
              <img
                src={"/images/menteeall/star.svg"}
                width="11px"
                height="11px"
              />
            </div>
            <span className={styles.review_num}>28개 후기</span>
          </div>

          <div className={styles.price_box}>
            <span className={styles.sale}>20%</span>
            <span className={styles.price}>197,000</span>
            <span className={styles.won}>원</span>
            <span className={styles.month}>/1개월 기준</span>
          </div>
        </div>
      </div>

      <div className={styles.item}></div>
    </div>
  );
}

export default Lecture;
