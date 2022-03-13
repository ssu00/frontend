import styles from "./mypageTopBar.module.scss";
import { IC_AlarmActive, IC_Setting, IC_Menu } from "../../../icons";

const MyPageTopBar = () => {
  return (
    <section className={styles.mypageTopBar}>
      <h1 className={styles.title}>마이페이지</h1>
      <div className={styles.btns}>
        <button type="button" className={styles.mypageBtn}>
          <IC_AlarmActive />
        </button>
        <button type="button" className={styles.mypageBtn}>
          <IC_Setting />
        </button>
        <button type="button" className={styles.mypageBtn}>
          <IC_Menu />
        </button>
      </div>
    </section>
  );
};
export default MyPageTopBar;
