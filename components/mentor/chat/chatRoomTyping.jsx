import { useState } from "react";
import styles from "./chatRoomTyping.module.scss";
import { IC_Plus } from "../../../icons";

const ChatRoomTyping = ({ sendMsg }) => {
  const [msg, setMsg] = useState("");
  return (
    <div className={styles.typingSection}>
      <IC_Plus width="20" height="20" />
      <div className={styles.inputBox}>
        <input
          type="text"
          placeholder="메세지를 입력하세요"
          className={styles.textInput}
          onChange={(e) => setMsg(e.target.value)}
        />
        <button
          type="button"
          className={styles.sendBtn}
          onClick={() => sendMsg(msg)}
        >
          <span>보내기</span>
        </button>
      </div>
    </div>
  );
};

export default ChatRoomTyping;
