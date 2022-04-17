import styles from "./mypageTopBar.module.scss";
import { IC_Setting, IC_Menu, IC_Alarm } from "../../../icons";
import router from "next/router";
import classNames from "classnames";

const MyPageTopBar = ({ count }) => {
  return (
    <section className={styles.mypageTopBar}>
      <h1 className={styles.title}>마이페이지</h1>
      <div className={styles.btns}>
        <button
          type="button"
          className={styles.mypageBtn}
          onClick={() => router.push("/common/notification")}
        >
          <IC_Alarm />
          {count != 0 && (
            <div
              className={classNames(
                styles.unchecked,
                count < 10
                  ? styles.unchecked_S
                  : count < 100
                  ? styles.unchecked_M
                  : styles.unchecked_L
              )}
            >
              <span>{count}</span>
            </div>
          )}
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
