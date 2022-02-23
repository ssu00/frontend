import React from "react";
import styles from "./LectureInfo.module.scss";
import Image from "next/image";
function LectureInfo() {
  return (
    <div className={styles.container}>
      <Image src={"/images/lecture_image.png"} width={"84px"} height={"84px"} />
      <div className={styles.info_box}>
        <h6>금융권 취업을 위한 데이터 분석 및 모델링 SQL, R, Python</h6>
        <span>김하나</span>
        <span>옵션: 1.온라인 / 2.그룹</span>
      </div>
    </div>
  );
}

export default LectureInfo;
