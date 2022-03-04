import Image from "next/image";
import styles from "./classReview.module.scss";
import router from "next/router";

const MenteeReview = ({ data, onClick }) => {
  return (
    <section className={styles.menteeReviewSection} onClick={onClick}>
      <div className={styles.menteeProfileBlock}>
        <div className={styles.profileImg}>
          <Image src={"/example.png"} width={32} height={32} />
        </div>

        <div className={styles.alignColumn}>
          <span className={styles.name}>{data.userNickname}</span>
          <div className={styles.name}>별</div>
        </div>

        <span className={styles.date}>{data.createdAt.substring(0, 10)}</span>
      </div>

      <p className={styles.contentBlock}>{data.content}</p>
    </section>
  );
};

const MentorReview = ({ data }) => {
  return (
    <section className={styles.mentorReviewSection}>
      <div className={styles.mentorProfileBlock}>
        <div className={styles.profileImg}>
          <Image src={"/example.png"} width={32} height={32} />
        </div>

        <div className={styles.alignColumn}>
          <span className={styles.name}>{data.userNickname}</span>
          <span className={styles.date}>{data.createdAt.substring(0, 10)}</span>
        </div>
      </div>

      <p className={styles.contentBlock}>{data.content} </p>
    </section>
  );
};

const ClassReview = ({ cid, mentee }) => {
  const child = mentee.child;
  return (
    <section
      className={
        child.reviewId
          ? styles.classReviewSectionNoCursor
          : styles.classReviewSection
      }
    >
      <MenteeReview
        data={mentee}
        onClick={() => {
          if (!child.reviewId) {
            router.push(
              `/mentor/myclass/classDetail/${cid}/review/${mentee.reviewId}`
            );
          }
        }}
      />
      {child.reviewId ? <MentorReview data={child} /> : <></>}
    </section>
  );
};

export { MenteeReview, MentorReview };
export default ClassReview;
