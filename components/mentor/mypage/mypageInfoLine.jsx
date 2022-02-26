import styles from "./mypageInfoLine.module.scss";
const MyPageInfoLine = ({ title, content }) => {
  return (
    <section className={styles.infoLine}>
      <h1 className={styles.title}>{title}</h1>
      <span className={styles.content}>{content == "" ? "-" : content}</span>
    </section>
  );
};
export default MyPageInfoLine;
