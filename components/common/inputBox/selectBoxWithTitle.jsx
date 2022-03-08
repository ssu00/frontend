import styles from "./selectBoxWithTitle.module.scss";
import classNames from "classnames";
import { ChevronDownB } from "../../../icons";
const SelectBoxWithTitle = ({
  title,
  arr,
  name,
  onChange,
  additionalStyle,
  value,
}) => {
  return (
    <section className={styles.selectBox}>
      <span className={styles.title}>{title}</span>
      <select
        className={classNames(styles.sel, additionalStyle)}
        name={name}
        id={name}
        onChange={onChange}
        value={value}
      >
        {arr &&
          title != "언어" &&
          arr?.map((data, i) => {
            return (
              <option value={data} className={styles.option} key={i}>
                {data}
              </option>
            );
          })}
        {arr &&
          title == "언어" &&
          arr?.map((data, i) => {
            return (
              <option
                value={data.subjectId}
                className={styles.option}
                key={data.subjectId}
              >
                {data.krSubject}
              </option>
            );
          })}
      </select>
      <ChevronDownB className={styles.arrow} />
    </section>
  );
};
export default SelectBoxWithTitle;
