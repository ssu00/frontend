import React, { useState } from "react";
import styles from "./LectureImage.module.scss";
import { IC_AvatarBg, IC_Enlarge } from "../../../icons";
import { LevelToKor } from "../../../utils/class/classLevel";
import Image from "next/image";
import router from "next/router";
import classNames from "classnames";

function LectureImage({ classData, mentorData, params }) {
  return (
    <div className={styles.imageBlock}>
      <Image
        src={classData.thumbnail ? classData.thumbnail : "/samples/lecture.png"}
        width={375}
        height={277}
        alt="thumbnail"
      />
      <div className={styles.classSystemTag}>
        <span>{LevelToKor(classData.difficulty)}</span>
      </div>
      <div className={styles.mentorProfileBlock}>
        <Image
          src={
            classData.lectureMentor.image
              ? classData.lectureMentor.image
              : "/samples/lecture.png"
          }
          width={72}
          height={72}
          className={classNames(styles.mentorImg, styles.pointer)}
          alt="avatar"
          onClick={() => {
            router.push(`/mentee/mentorDetail/${params}`);
          }}
        />
        <span className={styles.mentorName}>
          <span className={styles.role}>멘토 </span>
          {classData.lectureMentor.nickname}
        </span>
      </div>
    </div>
  );
}

export default LectureImage;
