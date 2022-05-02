import { useEffect, useState } from "react";
import Router from "next/router";
import Image from "next/image";
import * as cookie from "cookie";
import styles from "./profileEdit.module.scss";
import { BottomTab, TopBar, CategoryBtn } from "../../../components/common";
import { IC_EditFill } from "../../../icons";
import { GetMyInfo } from "../../../core/api/User";
import UploadImage from "../../../core/api/Image/uploadImage";
import RegisterProfileImg from "../../../core/api/Image/registerProfileImg";
import router from "next/router";
export const getServerSideProps = async (context) => {
  const token = cookie.parse(context.req.headers.cookie).accessToken;
  const userInfo = await GetMyInfo(token);
  return {
    props: { token, userInfo },
  };
};

const ProfileEdit = ({ token, userInfo }) => {
  const [profile, setProfile] = useState("");
  const [err, setErr] = useState("");

  useEffect(() => {
    if (userInfo.image == null) setProfile("/samples/lecture.png");
    else setProfile(userInfo?.image);
    console.log("userinfo=", userInfo);
  }, []);

  const onChangeFile = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("file", file);
    const imgUrl = await UploadImage(formData, token);
    const imgRegister = await RegisterProfileImg(token, imgUrl.data.url);
    console.log("imgRef", imgRegister);
    if (imgRegister.status == 200) {
      RefreshPage();
      setErr("");
    } else {
      setErr("프로필 사진 등록에 실패했습니다.");
    }
  };
  return (
    <section className={styles.profileEditSection}>
      <TopBar
        text={"프로필 수정"}
        onClick={() => router.push("/mentee/mypage")}
      />
      <div className={styles.imgSection}>
        <input
          type="file"
          id="profile"
          accept="image/*"
          onChange={(e) => onChangeFile(e)}
        />
        <label htmlFor="profile">
          <div className={styles.img_icon}>
            <Image
              src={profile ? profile : "/samples/lecture.png"}
              width={100}
              height={100}
              className={styles.profileImage}
              alt=""
            />
            <IC_EditFill width={19} height={19} className={styles.editIcon} />
          </div>
        </label>
        {err != "" && <span className={styles.errMsg}>{err}</span>}
      </div>

      <span className={styles.line} />
      <section className={styles.editBtnSection}>
        <CategoryBtn
          text={"회원정보 수정"}
          arrow={true}
          onClick={() => router.push("/common/editMemberInfo")}
        />
        <CategoryBtn
          text={"비밀번호 변경"}
          arrow={true}
          onClick={() => router.push("/common/changePW")}
        />
        <CategoryBtn text={"로그아웃"} arrow={true} />
        <CategoryBtn
          text={"회원탈퇴"}
          arrow={true}
          onClick={() => router.push("/common/withdraw")}
        />
      </section>
      <BottomTab num={[0, 0, 0, 1]} />
    </section>
  );
};
export default ProfileEdit;
