import styles from "./languageModal.module.scss";
import { useDispatch } from "react-redux";
import { InputClass } from "../../redux/reducers/update";
export const LectureKindModal = ({
  lectureKindList,
  ChangingClass,
  currentI,
  setLectureKindSubList,
  hideLec,
}) => {
  return (
    <div className={styles.modal2} id="lec">
      {lectureKindList.map((item, index) => (
        <div key={index}>
          <LectureKind
            lecture={item.learningKind}
            learningKindId={item.learningKindId}
            select={index + 1}
            ChangingClass={ChangingClass}
            currentI={currentI}
            setLectureKindSubList={setLectureKindSubList}
            hideLec={hideLec}
            last={index + 1 == lectureKindList.length}
          />
        </div>
      ))}
    </div>
  );
};

export const LanguageModal = ({ lectureKindSubList, ChangingClass }) => {
  return (
    <div className={styles.modal} id="menu">
      {lectureKindSubList.map((item, index) => (
        <div key={index}>
          <Language
            language={item.krSubject}
            select={index + 1}
            ChangingClass={ChangingClass}
            last={index + 1 == lectureKindSubList.length}
          />
        </div>
      ))}
    </div>
  );
};
const LectureKind = ({
  lecture,
  learningKindId,
  select,
  currentI,
  hideLec,
  last,
}) => {
  const dispatch = useDispatch();

  const onClickModal = (learningKindId, item) => {
    dispatch(
      InputClass({
        form: "update",
        key: "classtype",
        index: currentI,
        value: item,
      })
    );
    dispatch(
      InputClass({
        form: "update",
        key: "classtypeId",
        index: currentI,
        value: learningKindId,
      })
    );
    dispatch(
      InputClass({
        form: "update",
        key: "language",
        index: currentI,
        value: [""],
      })
    );
    hideLec();
  };

  return (
    <label htmlFor={lecture}>
      <div
        className={
          select == 1 ? styles.first : last ? styles.last : styles.modalElement
        }
        onClick={(e) => onClickModal(learningKindId, lecture)}
        name="lec"
      >
        <input type="radio" name="modalElement" id={lecture} />
        {lecture}
      </div>
    </label>
  );
};
const Language = ({ language, select, ChangingClass, last }) => {
  return (
    <label htmlFor={language}>
      <div
        className={
          select == 1 ? styles.first : last ? styles.last : styles.modalElement
        }
        onClick={ChangingClass("language")}
      >
        <input type="radio" name="modalElement" id={language} />
        {language}
      </div>
    </label>
  );
};

const Level = ({ level, select, handleChange }) => {
  return (
    <label htmlFor={level}>
      <div
        className={
          select == 1
            ? styles.first
            : select == 2
            ? styles.modalElement
            : styles.last
        }
        onClick={handleChange("level")}
      >
        <input type="radio" name="levelElement" id={level} />
        {level}
      </div>
    </label>
  );
};

export const LevelModal = ({ handleChange }) => {
  return (
    <div className={styles.modal} id="level">
      <Level level={"입문"} select={1} handleChange={handleChange}></Level>
      <Level level={"초급"} select={2} handleChange={handleChange}></Level>
      <Level level={"중급"} select={2} handleChange={handleChange}></Level>
      <Level level={"고급"} select={3} handleChange={handleChange}></Level>
    </div>
  );
};

export default LanguageModal;
