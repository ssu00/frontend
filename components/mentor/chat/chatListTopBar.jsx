import styles from "./chatListTopBar.module.scss";
import { IC_AlarmActive, IC_Setting, IC_Menu } from "../../../icons";

const ChatListTopBar = () => {
  return (
    <section className={styles.chatListTopBar}>
      <h1 className={styles.title}>채팅</h1>
      <div className={styles.btns}>
        <button type="button" className={styles.chatListPageBtn}>
          <IC_AlarmActive width="24px" height="24px" />
        </button>
        <button type="button" className={styles.chatListPageBtn}>
          <IC_Menu width="24px" height="24px" />
        </button>
      </div>
    </section>
  );
};
export default ChatListTopBar;
