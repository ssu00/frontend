import BottomTab from "../bottomtab";
import styles from "./bottomSection.module.scss";
const AlertFunc = () => {
  alert("빈칸을 모두 채워주세요.");
};

const BottomSection = ({ text, onClick, handleSubmit, able }) => {
  return (
    <section className={styles.fixed}>
      {text == "강의 업로드" ? (
        able ? (
          <form onSubmit={handleSubmit}>
            <button type="submit" className={styles.next}>
              {text}
            </button>
          </form>
        ) : (
          <button
            type="submit"
            className={styles.nextDisabled}
            onClick={AlertFunc}
          >
            {text}
          </button>
        )
      ) : (
        <button
          type="button"
          className={able ? styles.next : styles.nextDisabled}
          onClick={able ? onClick : AlertFunc}
        >
          {text}
        </button>
      )}
      <BottomTab />
    </section>
  );
};
export default BottomSection;
