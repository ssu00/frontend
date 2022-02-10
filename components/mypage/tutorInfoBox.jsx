import styles from "./tutorInfoBox.module.scss";
const TutorInfoBox = ({ category, content }) => {
  return (
    <section className={styles.tutorInfoBox}>
      <span className={styles.littleTitle}>{category}</span>
      <span className={styles.text}>{content}</span>
    </section>
  );
};

export default TutorInfoBox;
