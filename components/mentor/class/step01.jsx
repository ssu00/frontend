import styles from "./steps.module.scss";
// import InputBox from "../btn_inputs/InputBox";
// import ImageCrop from "./ImageCrop";
import { useEffect, useState } from "react";
import { BasicBtn, MenuBtn } from "../../common";
import classNames from "classnames";
import TopBar from "../../common/tab/topBar";
import BottomBlueBtn from "../../common/button/bottomBlueBtn";
import ClassRegistrationInputBox from "../../common/inputBox/classRegistrationInputBox";

const Step01 = ({
  form,
  nextStep,
  handleChange,
  showGray,
  hideGray,
  MoveStep,
  num,
}) => {
  const [able, setAble] = useState(false);
  useEffect(() => {
    if (
      form.image != "" &&
      form.maintitle != "" &&
      form.subheading != "" &&
      form.introduction != ""
    )
      setAble(true);
  }, [form]);

  return (
    <div className={styles.step}>
      {/* <div className={styles.goBackModal} id="goBackModal">
        <div className={styles.modal} id="modal">
          <GrayModal hideGray={hideGray} id="grayOne" />
        </div>
      </div> */}
      <TopBar text={"강의 등록"} />
      <div className={styles.category}>
        <MenuBtn
          selected={true}
          text={"1단계"}
          onClick={() => console.log("step01")}
        />
        <MenuBtn
          selected={false}
          text={"2단계"}
          onClick={() => console.log("step02")}
        />
        <MenuBtn
          selected={false}
          text={"3단계"}
          onClick={() => console.log("step03")}
        />
      </div>

      <section className={styles.contentSection}>
        <div className={styles.questionBlock}>
          <h3 className={styles.question}>
            1. 강의 소개 메인 이미지를 등록해주세요.
          </h3>
          <ClassRegistrationInputBox
            placeholder={"이미지 올릴 때 같이 해야 함.."}
          />
          {/* <ImageCrop className={styles.test} /> */}
        </div>
        <div className={styles.questionBlock}>
          <h3 className={styles.question}>2. 강의 타이틀을 입력해주세요.</h3>
          <ClassRegistrationInputBox placeholder={"최대 20자"} />
        </div>
        <div className={styles.questionBlock}>
          <h3 className={styles.question}>3. 강의 소제목을 입력해주세요.</h3>
          <ClassRegistrationInputBox placeholder={"최대 30자"} />
        </div>
        <div className={styles.questionBlock}>
          <h3 className={styles.question}>
            4. 간략하게 멘토 자신을 소개해주세요.
          </h3>
          <ClassRegistrationInputBox placeholder={"최대 20자"} />
        </div>
      </section>

      <BottomBlueBtn text={"다음"} />
    </div>
  );
};
export default Step01;
