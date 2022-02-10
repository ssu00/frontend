import styles from "./whiteSection.module.scss";
import Image from "next/image";
const WhiteSection = ({ step, onClick, MoveStep, able, num }) => {
  return (
    <section className={styles.white}>
      <div className={styles.firstLine}>
        <span className={styles.prev} onClick={onClick}>
          <Image
            src="/images/prev.png"
            alt="이전 화면으로"
            width="10px"
            height="14px"
          ></Image>
        </span>
        <h1 className={styles.title}>{num == 2 ? "강의 수정" : "강의 등록"}</h1>
      </div>
      <div className={styles.secondLine}>
        <button
          type="button"
          className={styles.btn}
          onClick={() => {
            if (able) MoveStep(1);
          }}
        >
          <h2 className={step == 1 ? styles.selected : styles.unselected}>
            1단계
          </h2>
        </button>
        <button
          type="button"
          className={styles.btn}
          onClick={() => {
            if (able) MoveStep(2);
          }}
        >
          <h2 className={step == 2 ? styles.selected : styles.unselected}>
            2단계
          </h2>
        </button>
        <button
          type="button"
          className={styles.btn}
          onClick={() => {
            if (able) MoveStep(3);
          }}
        >
          <h2 className={step == 3 ? styles.selected : styles.unselected}>
            3단계
          </h2>
        </button>
      </div>
    </section>
  );
};

export default WhiteSection;
