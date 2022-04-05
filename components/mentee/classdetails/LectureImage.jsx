import React from "react";
import styles from "./LectureImage.module.scss";
import { IC_Enlarge } from "../../../icons";
import { transLevel } from "../../mentor/class/classCard";

function LectureImage({ classData }) {
  return (
    <div className={styles.container}>
      <IC_Enlarge width={"24px"} height={"24px"} className={styles.enlarge} />

      <div className={styles.new_box}>
        <span className={styles.new}>NEW</span>
        <span>{transLevel(classData)}</span>
      </div>

      <div className={styles.mentor_avatar_box}>
        <img
          // src={"/images/lecture_detail_intro/mentor_avatar.svg"}
          width={"72px"}
          height={"72px"}
          className={styles.mentor_avatar}
        />
        <img
          // src={"/images/lecture_detail_intro/mentor_avatar_bg.svg"}
          width={"72px"}
          height={"72px"}
          className={styles.mentor_avatar_bg}
        />
        <span>
          <span>멘토</span>
          {classData.lectureMentor?.nickname}
        </span>
      </div>
    </div>
  );
}

export default LectureImage;
