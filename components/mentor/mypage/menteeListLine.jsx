import { useEffect, useState } from "react";
import router from "next/router";
import Image from "next/image";
import classNames from "classnames";
import { getMenteeLecture } from "../../../core/api/Mentor";
import styles from "./menteeListLine.module.scss";
import {
  IC_BubbleStarOutline,
  IC_ChevronDownS,
  IC_TalkDots,
} from "../../../icons";
import { basicBtnStyle } from "../../common";
import { requestChatToMentee } from "../../../core/api/Chat";

const MenteeListLine = ({ data, setOpen }) => {
  return (
    <button type="button" className={styles.menteeLine} onClick={setOpen}>
      <div className={styles.profileImg}>
        <Image src={"/samples/mentee.png"} width={32} height={32} />
      </div>
      <span className={styles.menteeName}>{data?.name} 멘티</span>
      {/* <span className={styles.classCnt}>{"1"}개의 강의</span> */}
      <IC_ChevronDownS className={styles.arrowBtn} />
    </button>
  );
};

const MenteeListBlock = ({ token, data, setOpen, baseData, setModal }) => {
  const [menteeLecture, setMenteeLecture] = useState([]);
  const [systems, setSystems] = useState("");
  const GetMenteeLectureInfo = async () => {
    setMenteeLecture(
      await getMenteeLecture(
        baseData.token,
        data.menteeId,
        baseData.closed,
        baseData.page
      ).then((res) => res.content)
    );
  };

  useEffect(() => {
    GetMenteeLectureInfo();
  }, []);

  useEffect(() => {
    if (menteeLecture[0]?.lecture.lecturePrice.isGroup) {
      setSystems(
        menteeLecture[0]?.lecture.systemTypes[0].name + " / " + "그룹"
      );
    } else {
      setSystems(menteeLecture[0]?.lecture.systemTypes[0].name + " / " + "1:1");
    }
  }, [menteeLecture]);

  return (
    <div className={styles.menteeBlock}>
      <button type="button" className={styles.menteeLine} onClick={setOpen}>
        <div className={styles.profileImg}>
          <Image src={"/samples/mentee.png"} width={32} height={32} />
        </div>
        <span className={styles.menteeName}>{data?.name} 멘티</span>
        <IC_ChevronDownS className={styles.arrowBtnUp} />
      </button>

      <div className={styles.lectureInfo}>
        <div className={styles.lectureImg}>
          <Image src={"/samples/lecture.png"} width={84} height={84} />
        </div>
        <div className={styles.lectureInfoText}>
          <h1 className={styles.title}>{menteeLecture[0]?.lecture?.title}</h1>
          <span className={styles.classSystem}>{systems}</span>
          <span className={styles.price}>
            {menteeLecture[0]?.lecture?.lecturePrice?.totalPrice.toLocaleString(
              "ko-KR"
            )}
            원
          </span>
        </div>
      </div>

      <div className={styles.btnSection}>
        <button
          type="button"
          className={classNames(
            styles.btnForMenteeBlock,
            basicBtnStyle.btn_bg_color
          )}
          onClick={async () => {
            const res = await requestChatToMentee(token, data.menteeId);
            if (!isNaN(res)) {
              router.push({
                pathname: `/common/chat/chatDetail/${res}`,
                query: { other: data?.menteeId },
              });
            } else {
              console.log("채팅 요청 실패");
            }
          }}
        >
          <IC_TalkDots width={16} height={16} className={styles.btnIcon} />
          <span>대화 요청</span>
        </button>
        <button
          type="button"
          className={classNames(
            styles.btnForMenteeBlock,
            basicBtnStyle.btn_bg_color
          )}
          onClick={() => {
            if (menteeLecture[0]?.reviewId == null) {
              setModal(true);
            } else {
              router.push(
                `/mentor/myclass/classDetail/${menteeLecture[0]?.lecture?.lectureId}/review/${menteeLecture[0]?.reviewId}`
              );
            }
          }}
        >
          <IC_BubbleStarOutline
            widht={14}
            height={14}
            className={styles.btnIcon}
          />
          <span>리뷰 확인</span>
        </button>
      </div>
    </div>
  );
};

const DecideOpenOrClose = ({ data, token, closed, page, setModal }) => {
  const [open, setOpen] = useState(false);
  const dataForMenteeLecture = { token: token, closed: closed, page: page };

  return open ? (
    <MenteeListBlock
      token={token}
      data={data}
      setOpen={() => setOpen(!open)}
      baseData={dataForMenteeLecture}
      setModal={setModal}
    />
  ) : (
    <MenteeListLine data={data} setOpen={() => setOpen(!open)} />
  );
};

export { MenteeListLine, MenteeListBlock, DecideOpenOrClose };
