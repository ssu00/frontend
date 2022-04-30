import styles from "./selectBoxWithTitle.module.scss";
import { IC_ChevronDownB } from "../../../icons";
const SelectBoxWithTitle = ({
  title,
  arr,
  name,
  onChange,
  additionalStyle,
  value,
}) => {
  return (
    <div className={styles.selectBoxWithTitle}>
      <span>{title}</span>
      <select
        className={additionalStyle}
        name={name}
        id={name}
        onChange={onChange}
        value={value}
      >
        {arr &&
          (title != "언어"
            ? arr?.map((data, i) => (
                <option value={data} key={i}>
                  {data}
                </option>
              ))
            : arr?.map((data, i) => (
                <option value={data.subjectId} key={data.subjectId}>
                  {data.krSubject}
                </option>
              )))}
      </select>
      <IC_ChevronDownB className={styles.arrow} />
    </div>
  );
};
export default SelectBoxWithTitle;
