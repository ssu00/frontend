import styles from "./lectureSubjectPick.module.scss";
import { IC_CloseCircle } from "../../../icons";
import { SelectBoxWithTitle } from "../../common";

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
          <IC_CloseCircle />
        </button>
      ) : (
        <></>
      )}
    </div>
  );
};

export default LectureSubjectPick;
