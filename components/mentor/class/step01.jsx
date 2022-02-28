import { useState } from "react";
import styles from "./steps.module.scss";
import { MenuBtn } from "../../common";
import TopBar from "../../common/tab/topBar";
import BottomBlueBtn from "../../common/button/bottomBlueBtn";
import ClassRegistrationInputBox from "../../common/inputBox/classRegistrationInputBox";
import BasicModal from "../../common/modal/basicModal";
import ModalWithBackground from "../../common/modal/modalWithBackground";
import router from "next/router";
// import ImageCrop from "./ImageCrop";

const Step01 = ({ form, nextStep, handleChange, MoveStep }) => {
  const [modal, setModal] = useState(false);
  return (
    <div className={styles.step}>
      {modal ? (
        <ModalWithBackground setModal={setModal}>
          <BasicModal
            notice={
              "등록 중인 강의를 취소하시겠습니까?\n" +
              "작성 취소시, 작성된 내용은 저장되지 않습니다."
            }
            btnText={"강의 등록 취소"}
            modalStyle={"square"}
            btnClick={() => router.push("/mentor/classRegistrationIntro")}
          />
        </ModalWithBackground>
      ) : (
        <></>
      )}

      <TopBar text={"강의 등록"} onClick={() => setModal(true)} />
      <div className={styles.category}>
        <MenuBtn selected={true} text={"1단계"} onClick={() => MoveStep(1)} />
        <MenuBtn selected={false} text={"2단계"} onClick={() => MoveStep(2)} />
        <MenuBtn selected={false} text={"3단계"} onClick={() => MoveStep(3)} />
      </div>

      <section className={styles.contentSection}>
        <div className={styles.questionBlock}>
          <h3 className={styles.question}>
            1. 강의 소개 메인 이미지를 등록해주세요.
          </h3>
          <ClassRegistrationInputBox placeholder={"이미지 => aws s3"} />
          {/* <ImageCrop className={styles.test} /> */}
        </div>
        <div className={styles.questionBlock}>
          <h3 className={styles.question}>2. 강의 타이틀을 입력해주세요.</h3>
          <ClassRegistrationInputBox
            placeholder={"최대 20자"}
            value={form.title}
            onChange={handleChange("title")}
          />
        </div>
        <div className={styles.questionBlock}>
          <h3 className={styles.question}>3. 강의 소제목을 입력해주세요.</h3>
          <ClassRegistrationInputBox
            placeholder={"최대 30자"}
            value={form.subtitle}
            onChange={handleChange("subtitle")}
          />
        </div>
        <div className={styles.questionBlock}>
          <h3 className={styles.question}>
            4. 간략하게 멘토 자신을 소개해주세요.
          </h3>
          <ClassRegistrationInputBox
            placeholder={"최대 20자"}
            value={form.introduction}
            onChange={handleChange("introduction")}
          />
        </div>
      </section>

      <BottomBlueBtn text={"다음"} onClick={nextStep} />
    </div>
  );
};

export default Step01;
