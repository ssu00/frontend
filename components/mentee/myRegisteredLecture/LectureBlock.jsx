import classNames from "classnames";
import Image from "next/image";
import React from "react";
import { IC_WriteReview } from "../../../icons";
import { basicBtnStyle } from "../../common";
import styles from "./LectureBlock.module.scss";

const LectureBlock = ({ lecture }) => {
  return (
    <div className={styles.lectureBlock}>
      <div className={styles.lectureInfo}>
        <div className={styles.lectureImg}>
          <Image
            src={lecture.thumbnail}
            width={84}
            height={84}
            alt="thumbnail"
          />
        </div>
        <div className={styles.lectureInfoText}>
          <h1 className={styles.title}>{lecture.title}</h1>
          <span className={styles.classSystem}>
            {lecture.lectureMentor.nickname}
          </span>
          <span
            className={styles.price}
          >{`${lecture.lecturePrices[0].totalPrice.toLocaleString()}원`}</span>
        </div>
      </div>

      <div className={styles.btnSection}>
        <button
          type="button"
          className={classNames(
            styles.btnForlectureBlock,
            basicBtnStyle.btn_bg_color
          )}
        >
          <IC_WriteReview widht={14} height={14} className={styles.btnIcon} />
          <span>후기작성</span>
        </button>
      </div>
    </div>
  );
};

export default LectureBlock;
