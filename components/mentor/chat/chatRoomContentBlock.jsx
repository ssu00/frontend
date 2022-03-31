import { useEffect, useState } from "react";
import Image from "next/image";
import ConvertTime from "../../../utils/common/convertTime";
import styles from "./chatRoomContentBlock.module.scss";

const MyChat = ({ text, sentAt }) => {
  return (
    <div className={styles.myChat}>
      <div className={styles.blueContentBox}>
        <span>{text}</span>
      </div>
      <span className={styles.date}>{sentAt}</span>
    </div>
  );
};

const OtherChat = ({ name, text, sentAt }) => {
  return (
    <div className={styles.othersChat}>
      <div className={styles.profileImg}>
        <Image src={"/samples/lecture.png"} width={44} height={44} />
      </div>
      <div className={styles.menteeChat}>
        <span className={styles.name}>{name} </span>
        <div className={styles.whiteContentBox}>
          <span>{text}</span>
        </div>
        <span className={styles.date}>{sentAt}</span>
      </div>
    </div>
  );
};

const ChatRoomContentBlock = ({ my, sentAt, msg, otherName }) => {
  const [converted, setConverted] = useState({
    date: "",
    time: "",
    sameDay: false,
  });

  useEffect(() => {
    ConvertTime(sentAt, setConverted);
  }, []);

  if (my) {
    return (
      <MyChat
        text={msg}
        sentAt={converted.sameDay ? converted.time : converted.date}
      />
    );
  } else {
    return (
      <OtherChat
        text={msg}
        name={"김하나"}
        sentAt={converted.sameDay ? converted.time : converted.date}
      />
    );
  }
};

export default ChatRoomContentBlock;
