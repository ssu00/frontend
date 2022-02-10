import styles from "./tobTab.module.scss";
import Image from "next/image";
const TopTab = ({ text }) => {
  return (
    <section className={styles.tobTab}>
      <Image
        src="/images/prev.png"
        width="10px"
        height="15px"
        alt="이전으로 돌아가기"
        className={styles.prev}
      />
      <h1 className={styles.title}>{text}</h1>
    </section>
  );
};

export default TopTab;
