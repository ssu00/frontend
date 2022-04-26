import { useEffect, useState } from "react";
import * as cookie from "cookie";
import {
  BottomBlueBtn,
  ModalWithBackground,
  TopBar,
} from "../../../../../../components/common";
import router from "next/router";
import styles from "./edit.module.scss";
import { IC_Logo } from "../../../../../../icons";
import { getViewLecture } from "../../../../../../core/api/Mentee/getViewLecture";
import classNames from "classnames";
import MenteeStar from "../../../../../../components/mentee/MenteeStar";
import ConfirmModal from "../../../../../../components/mentee/ConfirmModal";
import ReviewModal from "../../../../../../components/mentee/ReviewModal";
import { editMenteeReview } from "../../../../../../core/api/Mentee/editMenteeReview";
import { getOriginalReview } from "../../../../../../core/api/Mentee/getOriginalReview";

export async function getServerSideProps(context) {
  const token = cookie.parse(context.req.headers.cookie).accessToken;
  const editId = context.query.editId;
  const viewLecture = await getViewLecture(editId, token);
  const originalReview = await getOriginalReview(editId, token);

  return {
    props: { token, editId, viewLecture, originalReview },
  };
}

const edit = ({ token, editId, viewLecture, originalReview }) => {
  const [reviews, setReviews] = useState([]);
  const [modifyReview, setModifyReview] = useState([]);
  const [score, setScore] = useState(0);
  const [content, setContent] = useState("");
  const [modal, setModal] = useState(false);
  const [confirm, setConfirm] = useState(false);

  useEffect(() => {
    setReviews(viewLecture);
    setModifyReview(originalReview);
    setScore(originalReview.score);
  }, []);

  const onChange = (e) => {
    setContent(e.target.value);
  };

  const lecture = originalReview.lecture;

  return (
    <>
      <section className={styles.contentSection}>
        {modal ? (
          <ModalWithBackground
            setModal={setModal}
            className={styles.modalHeight}
          >
            <ReviewModal
              mainText={"후기 등록"}
              subText={"작성한 후기를 수정하시겠습니까?"}
              cancelBtn={() => {
                setModal(false);
              }}
              confirmBtn={async () => {
                const res = await editMenteeReview(
                  editId,
                  token,
                  content,
                  score
                );

                if (res) {
                  setConfirm(!confirm);
                }
              }}
            />
          </ModalWithBackground>
        ) : (
          <></>
        )}

        {confirm ? (
          <ModalWithBackground
            setModal={setModal}
            className={styles.modalHeight}
          >
            <ConfirmModal
              mainText={"후기 등록"}
              subText={`후기 등록이 완료되었습니다.\n수강하시느라 고생 많으셨습니다.`}
              confirm={() => {
                router.push("/mentee/mypage/menteeReview");
              }}
            />
          </ModalWithBackground>
        ) : (
          <></>
        )}
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
              <img
                className={styles.reviewImg}
                src={originalReview.thumbnail}
              />
              <div>
                <p className={styles.lectureTitle}>{lecture.title}</p>
                <p className={styles.mentorNickname}>
                  {lecture?.mentorNickname}
                </p>

                <p className={styles.system}>
                  옵션:{" "}
                  {lecture?.systems.length === 2
                    ? "온라인/오프라인"
                    : lecture?.systems.name === "온라인"
                    ? "온라인"
                    : "오프라인"}
                  {lecture.lecturePrices?.map((group, i) => {
                    return (
                      <span key={i}>{group.isGroup ? "/ 그룹" : null}</span>
                    );
                  })}
                </p>
              </div>
            </div>
          </article>

          <article className={styles.bg}>
            <div className={styles.editCon}>
              <p className={styles.editTitle}>강의는 만족하셨나요?</p>

              {[...Array(5)].map((_, i) => {
                return (
                  <MenteeStar
                    width={"40px"}
                    height={"40px"}
                    key={i}
                    color={score >= i + 1 ? "#ffd704" : "#e8eaef"}
                    onClick={() => {
                      setScore(i + 1);
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
                onChange={onChange}
                defaultValue={modifyReview.content}
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
      </section>
      <BottomBlueBtn
        text={"수정"}
        onClick={setModal}
        disabled={content.length < 20 || score < -1 ? true : false}
      />
    </>
  );
};

export default edit;
