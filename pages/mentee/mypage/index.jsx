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
import { IC_Bookmark, IC_Student } from "../../../icons";
import { GetMyInfo } from "../../../core/api/User";
import Role from "../../../components/common/tag/role";

const MyPage = ({ userInfo, role , token }) => {
  console.log(role);
  return (
    <section className={styles.mypageSection}>
      <MyPageTopBar token={token} />
      <section className={styles.profileSection}>
        <div className={styles.profile}>
          <div className={styles.profileImgMargin}>
            <Image
              src={userInfo.image}
              width={56}
              height={56}
              className={styles.profileImg}
              alt=""
            />
          </div>

          <div className={styles.role_name}>
            <Role role={"멘티"} />
            <span className={styles.name}>{userInfo.name}</span>
          </div>

          <BasicBtn
            text={"프로필 수정"}
            onClick={() => router.push("/mentee/mypage/profileEdit")}
            btnStyle={styles.profileEditBtn}
            textStyle={styles.profileEditBtnText}
          />
        </div>

        <div className={styles.btns}>
          <button
            type="button"
            className={classNames(basicBtnStyle.btn_blue, styles.bigBlueBtn)}
            onClick={() =>
              router.push("/mentee/mypage/mypageRegisteredLecture")
            }
          >
            <IC_Bookmark />
            <span className={styles.bigBtnText}>신청한 강의</span>
          </button>

          <button
            type="button"
            className={classNames(basicBtnStyle.btn_blue, styles.bigBlueBtn)}
            onClick={() => router.push("/mentee/mypage/mypageWishList")}
          >
            <IC_Student w="30" h="30" />
            <span className={styles.bigBtnText}>위시리스트</span>
          </button>
        </div>
      </section>

      <span className={styles.line} />

      <section className={styles.categorySection}>
        <h1 className={styles.title}>계정정보</h1>
        <CategoryBtn text={"내 계정"} />
        <CategoryBtn text={"내 강의"} />
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
        <h1 className={styles.title}>TUTOR LAB</h1>
        <CategoryBtn
          text={"공지사항"}
          onClick={() => router.push("/mentee/mypage/mypageNotice")}
        />
        <CategoryBtn text={"이용약관"} />
        <CategoryBtn
          text={"문의하기"}
          onClick={() => router.push("/common/inquiry")}
        />
        <CategoryBtn text={"버전정보"} />
      </section>

      <BottomTab num={[0, 0, 0, 1]} role={role} />
    </section>
  );
};

export async function getServerSideProps(context) {
  const parsedCookies = cookie.parse(context.req.headers.cookie);
  const token = parsedCookies.accessToken;
  const role = parsedCookies.role;
  const userInfo = await GetMyInfo(parsedCookies.accessToken);

  return {
    props: { userInfo, role , token },
  };
}

export default MyPage;
