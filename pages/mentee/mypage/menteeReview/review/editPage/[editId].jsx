import { useEffect, useState } from "react";
import * as cookie from "cookie";
import { editReview } from "../../../../../../core/api/Mentee/editReview";
import {
  BasicModal,
  BottomBlueBtn,
  ModalWithBackground,
  TopBar,
} from "../../../../../../components/common";
import router from "next/router";
import styles from "./edit.module.scss";
import { IC_Logo } from "../../../../../../icons";
import { getUnreviewedMentee } from "../../../../../../core/api/Mentee/getUnreviewedMentee";
import classNames from "classnames";

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

  const MenteeStar = ({ width, height, color, onClick }) => {
    return (
      <svg
        width={width}
        height={height}
        viewBox="0 0 11 11"
        fill={color}
        onClick={onClick}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M5.04729 0.965582C5.22717 0.58192 5.77283 0.58192 5.95271 0.965582L7.08563 3.38195C7.15641 3.53293 7.2978 3.63868 7.46262 3.66393L10.0365 4.05827C10.4391 4.11995 10.603 4.61133 10.318 4.90233L8.42683 6.83354C8.31564 6.94709 8.26505 7.10672 8.29054 7.26358L8.73281 9.98495C8.79973 10.3967 8.36273 10.7045 7.99757 10.5028L5.74172 9.25702C5.59128 9.17394 5.40872 9.17394 5.25828 9.25702L3.00243 10.5028C2.63727 10.7045 2.20027 10.3967 2.26719 9.98495L2.70946 7.26358C2.73495 7.10672 2.68436 6.94709 2.57317 6.83354L0.682003 4.90233C0.397038 4.61133 0.560927 4.11995 0.963522 4.05827L3.53738 3.66393C3.7022 3.63868 3.84359 3.53293 3.91437 3.38196L5.04729 0.965582Z" />
      </svg>
    );
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
