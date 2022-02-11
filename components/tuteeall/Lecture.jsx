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
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.00006 6.86311C1.99508 7.6979 2.3 8.49999 3.2 9.34374L5.6 11.3125L7.97283 13L10.4 11.3125L12.8 9.34374C13.7 8.49999 14.0049 7.6979 13.9999 6.86311C13.995 6.06893 13.6615 5.34243 13.0543 4.81899C11.4705 3.45457 9.44009 3.94451 8.02717 5.19352C6.61425 3.94451 4.52946 3.45457 2.94568 4.81899C2.33849 5.34243 2.00504 6.06893 2.00006 6.86311Z"
                fill="#EE5A5A"
                stroke="#EE5A5A"
              />
            </svg>
            <span>56</span>
            <svg
              width="1"
              height="8"
              viewBox="0 0 1 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={styles.height_bar}
            >
              <rect width="1" height="8" fill="#E8EAEF" />
            </svg>
            <div className={styles.stars}>
              <svg
                width="11"
                height="11"
                viewBox="0 0 11 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.5 0L7.19889 3.62353L11 4.20588L8.25 7.01412L8.89778 11L5.5 9.12353L2.10222 11L2.75 7.01412L0 4.20588L3.80111 3.62353L5.5 0Z"
                  fill="#FFD704"
                />
              </svg>
              <svg
                width="11"
                height="11"
                viewBox="0 0 11 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.5 0L7.19889 3.62353L11 4.20588L8.25 7.01412L8.89778 11L5.5 9.12353L2.10222 11L2.75 7.01412L0 4.20588L3.80111 3.62353L5.5 0Z"
                  fill="#FFD704"
                />
              </svg>
              <svg
                width="11"
                height="11"
                viewBox="0 0 11 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.5 0L7.19889 3.62353L11 4.20588L8.25 7.01412L8.89778 11L5.5 9.12353L2.10222 11L2.75 7.01412L0 4.20588L3.80111 3.62353L5.5 0Z"
                  fill="#FFD704"
                />
              </svg>
              <svg
                width="11"
                height="11"
                viewBox="0 0 11 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.5 0L7.19889 3.62353L11 4.20588L8.25 7.01412L8.89778 11L5.5 9.12353L2.10222 11L2.75 7.01412L0 4.20588L3.80111 3.62353L5.5 0Z"
                  fill="#FFD704"
                />
              </svg>
              <svg
                width="11"
                height="11"
                viewBox="0 0 11 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.5 0L7.19889 3.62353L11 4.20588L8.25 7.01412L8.89778 11L5.5 9.12353L2.10222 11L2.75 7.01412L0 4.20588L3.80111 3.62353L5.5 0Z"
                  fill="#FFD704"
                />
              </svg>
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
