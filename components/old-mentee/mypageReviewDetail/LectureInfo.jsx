import React from "react";
import styles from "./LectureInfo.module.scss";
import Image from "next/image";

function LectureInfo() {
  return (
    <div className={styles.container}>
      <div className={styles.info_wrapper}>
        <Image
          src={"/images/lecture_image.png"}
          width={"84px"}
          height={"84px"}
        />
        <div className={styles.info_box}>
          <h5>금융권 취업을 위한 데이터 분석 및 모델링 SQL, R, Python</h5>
          <span className={styles.mentor}>김하나</span>
          <h6>
            <span className={styles.price}>197,000</span>원
            <span className={styles.month}>/1개월 기준</span>
          </h6>
        </div>
      </div>
    </div>
  );
}

export default LectureInfo;
