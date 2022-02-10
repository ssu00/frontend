import Image from "next/image";
import styles from "./classcard.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import router from "next/router";

const ClassCardForPosting = ({ data }) => {
  return (
    <div
      className={styles.classCard}
      onClick={() => router.push("/classposting")}
    >
      <div className={styles.classCardImage}>
        <Image
          src="/images/classImage.jpg"
          width="330px"
          height="136px"
          alt="취업이 빨라지는 개발 교육 첫단계"
          className={styles.classCardImg}
        />
        <div className={styles.onoffMethod}>
          {data.offline ? (
            <strong className={styles.onoff} aria-label="오프라인으로 진행">
              오프라인
            </strong>
          ) : (
            <></>
          )}
          {data.online ? (
            <strong className={styles.onoff} aria-label="온라인으로 진행">
              온라인
            </strong>
          ) : (
            <></>
          )}
        </div>
      </div>{" "}
      <div className={styles.classCardExplanation}>
        <h1>{data.title}</h1>
        <span className={styles.def}>{data.explanation} </span>
        <div className={styles.likes}>
          <FontAwesomeIcon icon={faHeart} className={styles.heart} />
          <span className={styles.likeCnt}>{data.likes}</span>
        </div>
        <span className={styles.tag}>{data.tag}</span>
      </div>
    </div>
  );
};

export default ClassCardForPosting;
