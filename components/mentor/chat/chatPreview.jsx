import { useState, useEffect } from "react";
import router from "next/router";
import Image from "next/image";
import styles from "./chatPreview.module.scss";
import Role from "../../common/tag/role";
import ConvertTime from "../../../utils/common/convertTime";

const ChatPreview = ({ chatData }) => {
  const [converted, setConverted] = useState({
    date: "",
    time: "",
    sameDay: false,
  });

  useEffect(() => {
    const sentAt = chatData?.lastMessage?.sentAt;
    if (sentAt != undefined) {
      ConvertTime(sentAt, setConverted);
    }
  }, []);

  return (
    <button
      type="button"
      className={styles.chatPreviewBlock}
      onClick={() =>
        router.push({
          pathname: `/mentor/chat/chatDetail/${chatData.chatroomId}`,
          query: { mentee: chatData.menteeId },
        })
      }
    >
      <div className={styles.profileImg}>
        <Image src={"/samples/lecture.png"} width={56} height={56} />
      </div>
      <div className={styles.mentorChat}>
        <div className={styles.nameSection}>
          <Role role={"멘티"} otherStyle={styles.roleTag} />
          <strong className={styles.name}>{chatData.menteeNickname}</strong>
        </div>
        <p className={styles.chatContent}>
          {chatData?.lastMessage?.message.length > 20
            ? chatData?.lastMessage?.message.substr(0, 20) + "..."
            : chatData?.lastMessage?.message}
        </p>
      </div>

      <div className={styles.additionalInfo}>
        <span className={styles.timeInfo}>
          {converted.sameDay ? converted.time : converted.date}
        </span>
        <div className={styles.newChatCnt}>
          <span>{chatData.uncheckedMessageCount}</span>
        </div>
      </div>
    </button>
  );
};
export default ChatPreview;
