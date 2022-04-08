import { useEffect, useState } from "react";
import * as cookie from "cookie";

import { BottomBlueBtn, TopBar } from "../../../../../../components/common";
import router from "next/router";
import styles from "./edit.module.scss";
import { IC_Logo } from "../../../../../../icons";
import { getUnreviewedMentee } from "../../../../../../core/api/Mentee/getUnreviewedMentee";
import classNames from "classnames";
import MenteeStar from "../../../../../../components/mentee/MenteeStar";

export async function getServerSideProps(context) {
  const token = cookie.parse(context.req.headers.cookie).accessToken;
  const unreviewedMentee = await getUnreviewedMentee(token);

  const reviewID = context.query.reviewID;

  return {
    props: { unreviewedMentee },
  };
}

const edit = ({ unreviewedMentee }) => {
  // const API = async () => {
  //   const res = await editReview(lectureID, reviewID, content, score);
  //   console.log(res);
  // };

  const [review, setReview] = useState([]);

  const [content, setContent] = useState("");
  const [score, setScore] = useState(-1);

  const [modal, setModal] = useState(false);

  useEffect(() => {
    setReview(unreviewedMentee);
  }, []);

  const reviewCon = review.content;

  const onChange = (e) => {
    setContent(e.target.value);
  };

  return (
    <>
      <section className={styles.topSection}>
        <TopBar
          text={"후기 수정"}
          onClick={() => {
            router.push("/mentee/mypage/menteeReview");
          }}
        />
        <IC_Logo />
      </section>
      <section className={styles.contentSection}>
        <article className={styles.bg}>
          <div className={styles.review}>
            <img className={styles.reviewImg} src={"/samples/lecture2.jpg"} />
            {reviewCon?.map((info) => {
              return (
                <div key={info.lecture.id}>
                  <p className={styles.lectureTitle}>{info.lectureTitle}</p>
                  <p className={styles.mentorNickname}>
                    {info.lecture.mentorNickname}
                  </p>
                  <p className={styles.system}>
                    옵션:
                    {info.lecture.systems.map((system, i) => {
                      return (
                        <span key={i}>
                          {system.name === "온라인"
                            ? " 1. 온라인 "
                            : " 1. 오프라인 "}
                        </span>
                      );
                    })}
                    {info.lecture.lecturePrices.map((group, i) => {
                      return (
                        <span key={i}>
                          {group.isGroup ? `/ ${group.isGroup}` : null}
                        </span>
                      );
                    })}
                  </p>
                </div>
              );
            })}
          </div>
        </article>

        <article className={styles.bg}>
          <div className={styles.editCon}>
            <p className={styles.editTitle}>강의는 만족하셨나요?</p>

            {[...Array(5)].map((star, i) => {
              return (
                <MenteeStar
                  width={"40px"}
                  height={"40px"}
                  key={i}
                  color={score >= i ? "#ffd704" : "#e8eaef"}
                  onClick={() => {
                    setScore(i);
                  }}
                />
              );
            })}
          </div>
        </article>

        <article className={styles.bg}>
          <div className={styles.editCon}>
            <p className={styles.editTitle}>상세한 후기를 작성해주세요.</p>
            <textarea
              className={styles.textCon}
              placeholder={`강의에 대한 의견을 자유롭게 작성해주세요 \n최소 20자 이상`}
              onChange={onChange}
              value={content}
            />
          </div>
        </article>

        <article className={classNames(styles.bg, styles.pb13)}>
          <div className={styles.infoCon}>
            <p className={styles.infoTitle}>후기 작성 안내</p>
            <ul>
              <li className={styles.infoList}>
                <p>
                  후기 내용은 20자 이상 작성합니다. 강의와 관련없는 내용,
                  이메일, 휴대전화 번호 등의 개인정보/광고/비속어가 포함 된
                  후기는 블라인드 처리 됩니다.
                </p>
              </li>
              <li className={styles.infoList}>
                <p>
                  최종 등록된 후기는 공개되어 튜터랩 사용자가 조회 가능하며,
                  댓글이 등록될 수 있습니다.
                </p>
              </li>
            </ul>
          </div>
        </article>
      </section>
      <BottomBlueBtn text={"등록"} />
    </>
  );
};

export default edit;
