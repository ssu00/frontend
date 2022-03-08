import styles from "./mypageTopBar.module.scss";
import router from "next/router";
import { AlarmActive, Setting, Menu } from "../../../icons";
const MyPageTopBar = () => {
  return (
    <section className={styles.mypageTopBar}>
      <h1 className={styles.title}>마이페이지</h1>
      <div className={styles.btns}>
        <button type="button" className={styles.mypageBtn}>
          <AlarmActive />
        </button>
        <button type="button" className={styles.mypageBtn}>
          <Setting />
        </button>
        <button type="button" className={styles.mypageBtn}>
          <Menu />
        </button>
      </div>
    </section>
  );
};
export default MyPageTopBar;
