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

const OtherChat = ({ image, name, text, sentAt }) => {
  return (
    <div className={styles.othersChat}>
      <div className={styles.profileImg}>
      {image == null ? (
          <IC_PersonBlue width={56} height={56} />
        ) : (
          <Image src={image} width={44} height={44} />
        )}
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

const ChatRoomContentBlock = ({ my, other, sender, sentAt, msg }) => {
  const [converted, setConverted] = useState({
    date: "",
    time: "",
    sameDay: false,
  });
  useEffect(() => {
    ConvertTime(sentAt, setConverted);
  }, []);

  if (my.userId==sender) {
    return (
      <MyChat
        text={msg}
        sentAt={converted.sameDay ? converted.time : converted.date}
      />
    );
  } else {
    return (
      <OtherChat
      image={other.image}
        text={msg}
        name={other.nickname}
        sentAt={converted.sameDay ? converted.time : converted.date}
      />
    );
  }
};

export default ChatRoomContentBlock;
