import MyPageInfoLine from "../../../components/mentor/mypage/mypageInfoLine";
import styles from "../../mentor/mypage/mentorIntroduction.module.scss";
import { TransEduLevelToKor } from "../../../components/mentor/transform";

const MentorInfo = ({ mentorData }) => {
  const user = mentorData.user;
  const edu = mentorData.educations[0];
  const careers = mentorData.careers[0];

  return (
    <>
      <section className={styles.basicInfo} style={{ borderTop: "none" }}>
        <h1 className={styles.title}>기본정보</h1>
        <div className={styles.profile}>
          <div>
            <MyPageInfoLine title={"생년월일"} content={user.birthYear} />
            <MyPageInfoLine
              title={"성별"}
              content={user.gender === "여자" ? "여자" : "남자"}
            />
            <MyPageInfoLine title={"이메일"} content={user.username} />
            <MyPageInfoLine title={"주소"} content={user.zone} />
          </div>
        </div>
      </section>

      <span className={styles.line} />

      <section className={styles.additionalInfo}>
        <h1 className={styles.title}>학력정보</h1>
        <div>
          <MyPageInfoLine
            title={"최종학력"}
            content={TransEduLevelToKor(edu.educationLevel)}
          />
          <MyPageInfoLine title={"학교명"} content={edu.schoolName} />
          <MyPageInfoLine title={"전공명"} content={edu.major} />
          <MyPageInfoLine title={"그 외 학력"} content={edu.others} />
        </div>
      </section>

      <section className={styles.additionalInfo}>
        <h1 className={styles.title}>경력정보</h1>
        <div>
          <MyPageInfoLine title={"직업"} content={careers.job} />
          <MyPageInfoLine title={"직장명"} content={careers.companyName} />
          <MyPageInfoLine title={"그 외 경력"} content={careers.others} />
          <MyPageInfoLine title={"자격증"} content={careers.license} />
        </div>
      </section>

      <section className={styles.additionalInfo}>
        <h1 className={styles.title}>소개</h1>
        <span>{mentorData.bio == "" ? "-" : mentorData.bio}</span>
      </section>
    </>
  );
};

export default MentorInfo;
