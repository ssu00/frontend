import styles from "./chatPreview.module.scss";
import router from "next/router";
import Image from "next/image";
import { useState, useEffect } from "react";
import moment from "moment";

const ChatPreview = ({ data, newChat }) => {
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  const [sameDay, setSameDay] = useState(false);
  console.log("data===", data.tuteeId);

  const dates = data.lastMessage?.sentAt.toString();
  const TimeMaker = () => {
    if (dates) {
      const newDates = new Date(dates);
      setTime(newDates.toLocaleTimeString());
      setDate(newDates.toLocaleDateString());
      setSameDay(moment().isSame(newDates, "day"));
    }
  };

  useEffect(() => {
    TimeMaker();
  }, []);

  return (
    <button
      className={styles.previewSection}
      onClick={() =>
        router.push({
          pathname: `/chatDetail/${data.chatroomId}`,
          query: {
            tuteeId: data.tuteeId,
            profile: data.tuteeImage,
            tuteeNickname: data.tuteeNickname,
          },
        })
      }
    >
      <div className={styles.profile}>
        {data.tuteeImage !== null && (
          <Image
            src={data.tuteeImage}
            width="56px"
            height="56px"
            alt="프로필"
            className={styles.profileImg}
          />
        )}
      </div>
      <div className={styles.chat}>
        <span className={styles.tuteeInfo}>
          <span className={styles.tutee}>튜티</span>
          <span className={styles.name}>{data.tuteeNickname}</span>
        </span>
        <span className={styles.last}>{data.lastMessage?.message}</span>
      </div>
      <div className={styles.timeInfo}>
        <span className={styles.date}>
          {sameDay ? time.slice(0, -3) : date.substring(2)}
        </span>
        <span></span>
        <span className={styles.newChat}>{data.uncheckedMessageCount}</span>
      </div>
    </button>
  );
};
export default ChatPreview;
