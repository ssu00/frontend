import styles from "./step02.module.scss";
import style2 from "../btn_inputs/addDelete.module.scss";
import WhiteSection from "../WhiteSection";
import BottomSection from "../BottomSection";
import SquareButton from "../btn_inputs/SquareButton";
import Quill from "../../quillEditor/QuillDynamic";
import LanguageModal from "../LanguageModal";
import { LectureKindModal } from "../LanguageModal";
import { LevelModal } from "../LanguageModal";
import { useEffect, useState } from "react";
import axios from "axios";
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
  const [able, setAble] = useState(false);

  useEffect(() => {
    if (form.content != "") setAble(true);
  }, [form]); //quill editor 입력 내용 여부 확인 방법..??? <p><br/><p> 구분방법..
  const [lectureKindList, setLectureKindList] = useState([]);
  const [lectureKindSubList, setLectureKindSubList] = useState([]);
  useEffect(() => {
    axios
      .get("/learningKinds")
      .then((response) => {
        console.log(response);
        setLectureKindList(response.data);
      })
      .catch((response) => {
        console.log(response);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`/subjects/${classtypeId}`)
      .then((response) => {
        console.log(response);
        setLectureKindSubList(response.data);
      })
      .catch((response) => {
        console.log(response);
      });
  }, [classtypeId]);

  return (
    <div className={styles.step02} onClick={Close}>
      <div className={styles.background} id="LecBackground">
        <div className={styles.modal} id="lectureModal">
          <LectureKindModal
            lectureKindList={lectureKindList}
            ChangingClass={handleChange}
            hideLec={hideLec}
            currentI={currentI}
          />
        </div>
      </div>
      <div className={styles.background} id="LanBackground">
        <div className={styles.modal} id="languageModal">
          <LanguageModal
            lectureKindSubList={lectureKindSubList}
            ChangingClass={handleChange}
          />
        </div>
      </div>
      <div className={styles.background} id="LevBackground">
        <div className={styles.modal} id="levelModal">
          <LevelModal handleChange={handleChange} />
        </div>
      </div>
      <WhiteSection
        step={2}
        onClick={prevStep}
        MoveStep={MoveStep}
        able={able}
        num={num}
      />
      <section className={styles.graySection}>
        <div className={styles.margin}>
          <h1 className={styles.title}>1. 강의 종류를 선택해주세요.</h1>
          {form.language?.length > 0 &&
            form.language?.map((e, i) => {
              return (
                <div className={styles.classType} key={i}>
                  <SquareButton
                    category={"강의 종류"}
                    element={form.classtype[i]}
                    showModal={() => lectureShowModal(i)}
                  />
                  <SquareButton
                    category={"언어"}
                    element={form.language[i]}
                    showModal={() => showModal(i)}
                  />
                </div>
              );
            })}
        </div>
        <div className={styles.margin}>
          <h1 className={styles.title}>2. 강의 난이도를 선택해주세요.</h1>
          <SquareButton
            id="levelBtn"
            category={"강의 난이도"}
            element={form.level}
            showModal={showLevel}
          />
        </div>
        <div className={styles.margin}>
          <h1 className={styles.title}>
            3. 강의 상세 내용 및 이미지를 등록해주세요.
          </h1>
          <ul className={styles.example}>
            <li>튜터 간략 소개</li>
            <li>커리큘럼</li>
            <li>강의 예시화면 - gif 등록 가능(00mb 이하)</li>
          </ul>
        </div>
        <Quill handleChange={handleChange} form={form} />
      </section>
      <BottomSection text={"다음"} onClick={nextStep} able={able} />
    </div>
  );
};
export default Step02;
