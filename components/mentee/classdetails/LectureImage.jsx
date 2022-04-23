import React, { useState, useEffect } from "react";
import styles from "./LectureImage.module.scss";
import { IC_AvatarBg, IC_Enlarge } from "../../../icons";
import { transLevel } from "../../mentor/class/classCard";
import Image from "next/image";
import router from "next/router";
import classNames from "classnames";

function LectureImage({ classData, mentorData, params }) {
  const [mentor, setMentor] = useState([]);

  useEffect(() => {
    setMentor(mentorData);
  }, []);

  return (
    <div className={styles.imageBlock}>
      <Image
        src={classData.thumbnail ? classData.thumbnail : "/samples/lecture.png"}
        width={375}
        height={277}
        alt="thumbnail"
      />
      <div className={styles.classSystemTag}>
        <span>{transLevel(classData)}</span>
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
            router.push(`/mentee/mentorDetail/${mentor.mentorId}`);
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
