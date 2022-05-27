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
  IC_LectureBoxIcon,
  IC_WishHeart,
  IC_Toggle,
  IC_PersonBlue,
} from "../../../icons";
import { getMyInfo } from "../../../core/api/User";
import Role from "../../../components/common/tag/role";
import { changeType } from "../../../core/api/Login";
import { useContext } from "react";
import { sockContext } from "../../_app";

const MyPage = ({ token, userInfo, role }) => {
  const alarm = useContext(sockContext);

  return (
    <section className={styles.mypageSection}>
      <MyPageTopBar count={alarm?.alarmCnt} />
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
            <Role role={"멘티"} />
            <span className={styles.name}>{userInfo.nickname}</span>
          </div>

          <div className={styles.toggle_btn}>
            <BasicBtn
              text={"프로필 수정"}
              onClick={() => router.push("/mentee/mypage/profileEdit")}
              btnStyle={styles.profileEditBtn}
              textStyle={styles.profileEditBtnText}
            />
            {userInfo.role == "MENTOR" && (
              <IC_Toggle
                onClick={async () => {
                  const res = await changeType(token);
                  cookieForAuth(res, { loginType: "ROLE_MENTOR" });
                  router.push("/mentor/mypage");
                }}
              />
            )}
          </div>
        </div>

        <div className={styles.btns}>
          <button
            type="button"
            className={classNames(basicBtnStyle.btn_blue, styles.bigBlueBtn)}
            onClick={() =>
              router.push("/mentee/mypage/mypageRegisteredLecture")
            }
          >
            <IC_LectureBoxIcon />
            <span className={styles.bigBtnText}>신청한 강의</span>
          </button>

          <button
            type="button"
            className={classNames(basicBtnStyle.btn_blue, styles.bigBlueBtn)}
            onClick={() => router.push("/mentee/mypage/mypageWishList")}
          >
            <IC_WishHeart w="30" h="30" />
            <span className={styles.bigBtnText}>위시리스트</span>
          </button>
        </div>
      </section>

      <span className={styles.line} />

      <section className={styles.categorySection}>
        <h1 className={styles.title}>계정정보</h1>
        <CategoryBtn text={"내 계정"} />
        {userInfo.role == "MENTEE" && (
          <CategoryBtn
            text={"멘토 등록"}
            onClick={() => router.push("/mentee/mypage/registerAsMentor")}
          />
        )}
        <CategoryBtn
          text={"강의 후기"}
          onClick={() => router.push("/mentee/mypage/menteeReview")}
        />
        <CategoryBtn
          text={"게시판 활동내역"}
          onClick={() => router.push("/mentee/mypage/mypageBoardActivity")}
        />
      </section>

      <section className={styles.categorySection}>
        <h1 className={styles.title}>MENTORIDGE</h1>
        <CategoryBtn
          text={"공지사항"}
          onClick={() => router.push("/mentee/mypage/mypageNotice")}
        />
        {/* <CategoryBtn text={"이용약관"} /> */}
        <CategoryBtn
          text={"문의하기"}
          onClick={() => router.push("/common/inquiry")}
        />
        {/* <CategoryBtn text={"버전정보"} /> */}
      </section>

      <BottomTab num={[0, 0, 0, 1]} role={role} />
    </section>
  );
};

export async function getServerSideProps(context) {
  const parsedCookies = cookie.parse(context.req.headers.cookie);
  const token = parsedCookies.accessToken;
  const role = parsedCookies.role;
  const userInfo = await getMyInfo(parsedCookies.accessToken);

  return {
    props: { userInfo, role, token },
  };
}

export default MyPage;
