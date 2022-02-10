import styles from "./modal.module.scss";
import router from "next/router";
export const BlueModal = () => {
  return (
    <div className={styles.modal}>
      <button
        className={styles.close}
        onClick={() => router.push("/classposting")}
      >
        {/*추후 main화면으로 연결되도록 수정해야 함*/}x
      </button>
      <span className={styles.blueIcon}>
        <span className={styles.check}>✓</span>
      </span>
      <p className={styles.text}>
        <strong>업로드되었습니다.</strong>
        <br />내 강의에서 확인하세요.
      </p>
      <button
        type="button"
        className={styles.blueBtn}
        onClick={() => router.push("/myclass")}
      >
        내 강의 바로가기
      </button>
    </div>
  );
};

export const GrayModal = ({ hideGray }) => {
  return (
    <div className={styles.modal} id="close">
      <button className={styles.close} onClick={hideGray}>
        x
      </button>
      <div className={styles.grayIcon}>
        <span className={styles.check}>x</span>
      </div>
      <p className={styles.text}>
        <strong>입력한 내용이 저장되지 않습니다.</strong>
        <br />
        뒤로 가시겠습니까?
      </p>
      <button
        type="button"
        className={styles.grayBtn}
        onClick={() => router.push("/classposting")}
      >
        뒤로가기
      </button>
    </div>
  );
};

/*grayModal은 언제 사용???*/
