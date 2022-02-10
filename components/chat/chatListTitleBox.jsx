import styles from "./chatListTitleBox.module.scss";
const ChatListTitleBox = ({ newAlarm }) => {
  return (
    <span className={styles.titleBox}>
      <h1 className={styles.title}>채팅</h1>
      <div className={styles.buttons}>
        <button
          type="button"
          className={newAlarm ? styles.chatAlarm : styles.chatNoAlarm}
          onClick={() => console.log("alarm")}
        />
        <button
          type="button"
          className={styles.chatMenu}
          onClick={() => console.log("menu")}
        />
      </div>
    </span>
  );
};
export default ChatListTitleBox;
