import Image from "next/image";
import router from "next/router";
import classNames from "classnames";
import styles from "./classReview.module.scss";
import { BasicBtn, basicBtnStyle } from "../../common";
import { DeleteMentorReview } from "../../../core/api/Lecture";
import RefreshPage from "../../../utils/refreshPage";

const MenteeReview = ({ data, onClick }) => {
  return (
    <section className={styles.menteeReviewSection} onClick={onClick}>
      <div className={styles.menteeProfileBlock}>
        <div className={styles.profileImg}>
          <Image src={"/samples/lecture.png"} width={32} height={32} />
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

const MentorReview = ({ token, cid, mentee, data }) => {
  return (
    <section className={styles.mentorReviewSection}>
      <div className={styles.mentorProfileBlock}>
        <div className={styles.profileImg}>
          <Image src={"/samples/lecture.png"} width={32} height={32} />
        </div>

        <div className={styles.textBtnSection}>
          <BasicBtn
            text={"수정"}
            onClick={() =>
              router.push(
                `/mentor/myclass/classDetail/${cid}/review/${mentee.reviewId}`
              )
            }
            btnStyle={classNames(basicBtnStyle.btn_transparent, styles.textBtn)}
          />

          <BasicBtn
            text={"삭제"}
            onClick={() => {
              DeleteMentorReview(token, cid, mentee.reviewId, data.reviewId);
              router.push(`/mentor/myclass/myClassList`);
              RefreshPage();
            }}
            btnStyle={classNames(basicBtnStyle.btn_transparent, styles.textBtn)}
          />
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

const ClassReview = ({ token, cid, mentee }) => {
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
      {child.reviewId ? (
        <MentorReview token={token} cid={cid} mentee={mentee} data={child} />
      ) : (
        <></>
      )}
    </section>
  );
};

export { MenteeReview, MentorReview };
export default ClassReview;
