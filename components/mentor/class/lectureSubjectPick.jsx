import styles from "./lectureSubjectPick.module.scss";
import SelectBoxWithTitle from "../../common/inputBox/selectBoxWithTitle";
const LectureSubjectPick = ({ i, subject, handleChange, value }) => {
  return (
    <div key={i} className={styles.lectureType}>
      <SelectBoxWithTitle title={"종류"} arr={["IT"]} name={"learning_kind"} />
      <SelectBoxWithTitle
        title={"언어"}
        arr={subject}
        name={"subject"}
        additionalStyle={styles.bigSizeSelectBox}
        onChange={handleChange("lectureSubject", i)}
        value={value}
      />
      {i != 0 ? (
        <button
          type="button"
          className={styles.deleteBtn}
          onClick={handleChange("lectureSubjectDelete", i)}
        >
          <div className={styles.deleteImg} />
        </button>
      ) : (
        <></>
      )}
    </div>
  );
};

export default LectureSubjectPick;
