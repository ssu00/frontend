import styles from "./chatListSearchBox.module.scss";
const ChatListSearchBox = () => {
  return (
    <section className={styles.searchSection}>
      <input
        type="text"
        placeholder={"튜티를 검색하세요"}
        className={styles.searchBox}
      />
      <button type="button" className={styles.searchBtn} />
    </section>
  );
};

export default ChatListSearchBox;
