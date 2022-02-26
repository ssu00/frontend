import styles from "./steps.module.scss";
// import Quill from "../../quillEditor/QuillDynamic";
import { useEffect, useState } from "react";
import axios from "axios";
import { BasicBtn } from "../../common";
import classNames from "classnames";
import { basicBtnStyle } from "../../common";
import { MenuBtn } from "../../common";
import TopBar from "../../common/tab/topBar";
import BottomBlueBtn from "../../common/button/bottomBlueBtn";
import BasicSelectBox from "../../common/inputBox/basicSelectBox";
import SelectBoxWithTitle from "../../common/inputBox/selectBoxWithTitle";

const Step02 = ({
  form,
  nextStep,
  prevStep,
  handleChange,
  showModal,
  showLevel,
  MoveStep,
  Close,
  hideLec,
  currentI,
  lectureShowModal,
  classtypeId,
  num,
}) => {
  // const [able, setAble] = useState(false);

  // useEffect(() => {
  //   if (form.content != "") setAble(true);
  // }, [form]); //quill editor 입력 내용 여부 확인 방법..??? <p><br/><p> 구분방법..
  // const [lectureKindList, setLectureKindList] = useState([]);
  // const [lectureKindSubList, setLectureKindSubList] = useState([]);
  // useEffect(() => {
  //   axios
  //     .get("/learningKinds")
  //     .then((response) => {
  //       console.log(response);
  //       setLectureKindList(response.data);
  //     })
  //     .catch((response) => {
  //       console.log(response);
  //     });
  // }, []);

  // useEffect(() => {
  //   axios
  //     .get(`/subjects/${classtypeId}`)
  //     .then((response) => {
  //       console.log(response);
  //       setLectureKindSubList(response.data);
  //     })
  //     .catch((response) => {
  //       console.log(response);
  //     });
  // }, [classtypeId]);

  return (
    <div className={styles.step} onClick={Close}>
      <TopBar text={"강의 등록"} />
      <div className={styles.category}>
        <MenuBtn
          selected={false}
          text={"1단계"}
          onClick={() => console.log("step01")}
        />
        <MenuBtn
          selected={true}
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
          <h3 className={styles.question}>1. 강의 종류를 선택해주세요.</h3>
          <span className={styles.row}>
            <SelectBoxWithTitle
              title={"종류"}
              arr={["IT"]}
              name={"learning_kind"}
            />
            <SelectBoxWithTitle
              title={"언어"}
              arr={["개발"]}
              name={"subject"}
            />
          </span>
        </div>

        <div className={styles.questionBlock}>
          <h3 className={styles.question}>2. 강의 난이도를 선택해주세요.</h3>
          <SelectBoxWithTitle
            title={"난이도"}
            arr={["초급", "중급", "고급"]}
            name={"level"}
          />
        </div>
        <div className={styles.questionBlock}>
          <h3 className={styles.question}>
            3. 강의 상세 내용 및 이미지를 등록해주세요.
          </h3>
          <ul className={styles.example}>
            <li>• 멘토 간략 소개</li>
            <li>• 커리큘럼</li>
            <li>• 강의 진행방향 (예시 화면 첨부 등)</li>
          </ul>
        </div>
        {/* <Quill handleChange={handleChange} form={form} /> */}
      </section>
      <BottomBlueBtn text={"다음"} />
    </div>
  );
};
export default Step02;
