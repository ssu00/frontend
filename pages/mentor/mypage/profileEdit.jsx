import styles from "./profileEdit.module.scss";
import { BottomTab } from "../../../components/common";
import TopBar from "../../../components/common/tab/topBar";
// import { ProfileEditBtn } from "/components/mypage/myPageBtn";
import axios from "axios";
import { useEffect, useState } from "react";
import Image from "next/image";
import CategoryBtn from "../../../components/common/button/categoryBtn";
import router from "next/router";
import { EditFill } from "../../../icons";
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
      <TopBar
        text={"프로필 수정"}
        onClick={() => router.push("/mentor/mypage")}
      />

      {/*imageSection 추후 수정 필요*/}
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
              <label htmlFor="profile" className={styles.profile}>
                <div className={styles.profileImage} />
                <button aria-label="프로필 수정" className={styles.editBtn}>
                  <EditFill width="18.83" height="18.83" />
                </button>
              </label>
            </>
          ) : (
            <>
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
        <CategoryBtn
          text={"멘토 소개"}
          arrow={true}
          onClick={() => router.push("/mentor/mypage/mentorIntroduction")}
        />
        <CategoryBtn text={"회원정보 수정"} arrow={true} />
        <CategoryBtn text={"비밀번호 변경"} arrow={true} />
        <CategoryBtn text={"로그아웃"} arrow={true} />
        <CategoryBtn text={"회원탈퇴"} arrow={true} />
      </section>
      <BottomTab num={[0, 0, 0, 1]} />
    </section>
  );
};
export default ProfileEdit;
