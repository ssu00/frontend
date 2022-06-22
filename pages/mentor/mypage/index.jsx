import router from "next/router";
import Image from "next/image";
import classNames from "classnames";
import * as cookie from "cookie";
import styles from "./mypage.module.scss";
import {
  BottomTab,
  CategoryBtn,
  BasicBtn,
  basicBtnStyle,
} from "../../../components/common";
import MyPageTopBar from "../../../components/mentor/mypage/mypageTopBar";
import {
  IC_Bookmark,
  IC_PersonBlue,
  IC_Student,
  IC_ToggleActive,
} from "../../../icons";
import { getMyInfo } from "../../../core/api/User";
import { changeType } from "../../../core/api/Login";
import { cookieForAuth } from "../../../utils/cookie";
import { useContext } from "react";
import { sockContext } from "../../../core/provider";

export const getServerSideProps = async (context) => {
  const token = cookie.parse(context.req.headers.cookie).accessToken;
  const userInfo = await getMyInfo(token);
  return {
    props: { token, userInfo },
  };
};

const MyPage = ({ token, userInfo }) => {
  const alarm = useContext(sockContext);
  return (
    <section className={styles.mypageSection}>
      <MyPageTopBar count={alarm.alarmCnt} />
      <section className={styles.profileSection}>
        <div className={styles.profile}>
          <div className={styles.profileImgMargin}>
            {userInfo.image == null ? (
              <IC_PersonBlue width={56} height={56} />
            ) : (
              <Image
                src={userInfo.image}
                width={56}
                height={56}
                className={styles.profileImg}
              />
            )}
          </div>

          <div className={styles.role_name}>
            <div className={styles.mentorTag}>
              <span>멘토</span>
            </div>
            <span className={styles.name}>{userInfo.nickname}</span>
          </div>

          <div className={styles.toggle_btn}>
            <BasicBtn
              text={"프로필 수정"}
              onClick={() => router.push("/mentor/mypage/profileEdit")}
              btnStyle={styles.profileEditBtn}
              textStyle={styles.profileEditBtnText}
            />
            <IC_ToggleActive
              onClick={async () => {
                const res = await changeType(token);
                cookieForAuth(res, { loginType: "ROLE_MENTEE" });
                router.push("/mentee/mypage");
              }}
            />
          </div>
        </div>

        <div className={styles.btns}>
          <button
            type="button"
            className={classNames(basicBtnStyle.btn_blue, styles.bigBlueBtn)}
            onClick={() => router.push("/mentor/mypage/menteeUncheckedList")}
            // onClick={() => router.push("/mentor/myclass/myClassList")}
          >
            <IC_Bookmark />
            <span className={styles.bigBtnText}>강의 신청한 멘티</span>
          </button>

          <button
            type="button"
            className={classNames(basicBtnStyle.btn_blue, styles.bigBlueBtn)}
            onClick={() => router.push("/mentor/mypage/menteeList")}
          >
            <IC_Student w="30" h="30" />
            <span className={styles.bigBtnText}>멘티 목록</span>
          </button>
        </div>
      </section>

      <span className={styles.line} />

      <section className={styles.categorySection}>
        <h1 className={styles.title}>MENTORIDGE</h1>
        <CategoryBtn text={"공지사항"} />
        <CategoryBtn
          text={"문의하기"}
          onClick={() => router.push("/common/inquiry")}
        />
      </section>

      <BottomTab num={[0, 0, 0, 1]} role={"ROLE_MENTOR"} />
    </section>
  );
};

export default MyPage;
