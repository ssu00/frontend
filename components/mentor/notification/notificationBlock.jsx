import styles from "./notificationBlock.module.scss";
const NotificationBlock = ({ title, date, content, deleteAlarm }) => {
  return (
    <div className={styles.notiBlock}>
      <div className={styles.alignRow}>
        <h1>{title}</h1>
        <span>{date}</span>
      </div>
      <div className={styles.alignRow}>
        <p>{content}</p>
        <button type="button" onClick={deleteAlarm}>
          삭제
        </button>
      </div>
    </div>
  );
};

export default NotificationBlock;
