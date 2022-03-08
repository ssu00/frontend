import Image from "next/image";
import styles from "./classCard.module.scss";
import router from "next/router";
import { IC_StudentHeadphone } from "../../../icons";

export const transLevel = (data) => {
  if (data.difficulty == "BASIC") return ["입문"];
  else if (data.difficulty == "BEGINNER") return ["초급"];
  else if (data.difficulty == "INTERMEDIATE") return ["중급"];
  else if (data.difficulty == "ADVANCED") return ["고급"];
};

const ClassCard = ({ data }) => {
  const subjectOnly = data.lectureSubjects.map((data, i) => data.krSubject);
  const classSystem1 = data.systems.map((data, i) => data.name);
  const classSystem2 = data.lecturePrices.map((data, i) => {
    if (data.isGroup) {
      return "그룹";
    } else {
      return "1:1";
    }
  });

  const classLevel = transLevel(data);
  const classSystem = classSystem1.concat(classSystem2);
  const classTags = classLevel.concat(classSystem);

  let title = data.title;
  return (
    <section
      className={styles.classCard}
      onClick={() => router.push(`/mentor/myclass/classDetail/${data.id}`)}
    >
      <div className={styles.classCardImage}>
        <Image
          // src={data.thumbnail ? data.thumbnail : ""}
          src={"/samples/lecture.png"}
          width="330px"
          height="136px"
          alt=""
          className={styles.classCardImg}
        />
        <section className={styles.classSystemSection}>
          {classTags.map((data, i) => {
            return (
              <div className={styles.classSystemTag} key={i}>
                <span>{data}</span>
              </div>
            );
          })}
        </section>
      </div>

      <div className={styles.classCardExplanation}>
        <strong className={styles.subject}>{subjectOnly.join(", ")}</strong>
        <div className={styles.secondLine}>
          <h1 className={styles.title}>
            {title.length >= 20 ? title.substring(0, 20) + "..." : title}
          </h1>
          <div className={styles.studentCnt}>
            <IC_StudentHeadphone width="9.33" height="13" />
            <span className={styles.cnt}>32</span>
          </div>
        </div>

        <span className={styles.subtitle}>{data.subTitle} </span>

        {/* <div className={styles.likes}>
          <span className={styles.heart} />
        </div> */}
        {/* <IC_Heart_Empty w={20} h={20} />
          <IC_Location_Gray w={12} h={12} /> */}
        <strong className={styles.name}>
          멘토 {data.lectureMentor.nickname}
        </strong>
      </div>
    </section>
  );
};

export default ClassCard;
