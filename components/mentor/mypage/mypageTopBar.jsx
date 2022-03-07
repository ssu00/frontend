import styles from "./mypageTopBar.module.scss";
import {
  IC_Alarm_Active,
  IC_Menu,
  IC_Setting,
} from "../../common/icons/mypage_icons";
import router from "next/router";
const MyPageTopBar = () => {
  return (
    <section className={styles.mypageTopBar}>
      <h1 className={styles.title}>마이페이지</h1>
      <div className={styles.btns}>
        <button type="button" className={styles.mypageBtn}>
          <IC_Alarm_Active w={24} h={24} />
        </button>
        <button type="button" className={styles.mypageBtn}>
          <IC_Setting w={24} h={24} />
        </button>
        <button type="button" className={styles.mypageBtn}>
          <IC_Menu w={24} h={24} />
        </button>
      </div>
    </section>
  );
};
export default MyPageTopBar;
