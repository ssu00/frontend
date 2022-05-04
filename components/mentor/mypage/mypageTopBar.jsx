import styles from "./mypageTopBar.module.scss";
import { IC_Setting, IC_Menu, IC_Alarm } from "../../../icons";
import router from "next/router";
import classNames from "classnames";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useState } from "react";
import { setCookie } from "../../../utils/cookie";
import ChangeRoleType from "../../../core/api/User/changeRole";

const MyPageTopBar = ({ count , token }) => {
  const [checked, setChecked] = useState(false);

  const handleChange = async(event) => {

    const res = await ChangeRoleType(token)
    console.log(token);
    // if (event.target.checked) {
    //   setCookie("role", "ROLE_MENTEE", {
    //     path: "/",
    //     secure: true,
    //   });
    //   router.push("/mentee/mypage");
    //
    // }
    setChecked(event.target.checked);
  };
  return (
    <section className={styles.mypageTopBar}>
      <h1 className={styles.title}>마이페이지</h1>
      <FormControlLabel
        checked={checked}
        onChange={handleChange}
        control={<Switch />}
        label={checked ? "멘티" : "멘토"}
      />
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
