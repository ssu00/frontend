import styles from "./profileEdit.module.scss";
import BottomTab from "../components/bottomtab";
import OtherTopBar from "../components/mypage/topBar/otherPage";
import { ProfileEditBtn } from "../components/mypage/myPageBtn";
import axios from "axios";
import { useEffect, useState } from "react";
import Image from "next/image";
const ProfileEdit = () => {
  const [img, setImg] = useState("");
  const [origin, setOrigin] = useState("");
  const onChangeFile = (event) => {
    console.log(event.target.files[0]);
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append("file", file);
    axios
      .post("/uploads/images", formData)
      .then((response) => {
        const url = response.data.url;
        const userImages = {};
        userImages.image = url;
        setImg(url);

        console.log(url);
        axios
          .put("/users/my-info/image", userImages)
          .then((response) => {})
          .catch((e) => {
            console.log(e);
          });
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const myImage = () => {
    axios
      .get("/users/my-info")
      .then((response) => {
        if (response.data.image !== null) {
          setOrigin(response.data.image);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    myImage();
  }, []);

  return (
    <section className={styles.profileEditSection}>
      <OtherTopBar title={"프로필 수정"} url={"/mypage"} />
      <section className={styles.imageSection}>
        {img == "" ? (
          origin == "" ? (
            <>
              <input
                type="file"
                id="profile"
                accept="image/*"
                onChange={(e) => onChangeFile(e)}
              />
              <label htmlFor="profile">
                <div className={styles.profileImage} />
                <div className={styles.editBtn} />
              </label>
            </>
          ) : (
            <>
              {" "}
              <input
                type="file"
                id="profile"
                accept="image/*"
                onChange={(e) => onChangeFile(e)}
              />
              <Image
                src={origin}
                width="100px"
                height="100px"
                className={styles.inputImage}
              ></Image>
              <label htmlFor="profile">
                <div className={styles.editBtn} />
              </label>
            </>
          )
        ) : (
          <>
            <input type="file" id="profile" onChange={(e) => onChangeFile(e)} />
            <Image
              src={img}
              width="100px"
              height="100px"
              className={styles.inputImage}
            ></Image>
            <label htmlFor="profile">
              <div className={styles.editBtn} />
            </label>
          </>
        )}
      </section>
      <span className={styles.line} />
      <section className={styles.editBtnSection}>
        <ProfileEditBtn text={"튜터 소개"} url={"/tutorIntroduction"} />
        <ProfileEditBtn text={"회원정보 수정"} url={"/memberInfoEdit"} />
        <ProfileEditBtn text={"비밀번호 변경"} url={"/changePW"} />
        <ProfileEditBtn text={"로그아웃"} url={"/"} />
        <ProfileEditBtn text={"회원탈퇴"} url={"/deleteAccount"} />
      </section>
      <div className={styles.fixedTab}>
        <BottomTab num={3} />
      </div>
    </section>
  );
};
export default ProfileEdit;
