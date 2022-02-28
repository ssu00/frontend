import styles from "./selectBoxWithTitle.module.scss";
import classNames from "classnames";
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
          arr?.map((data, i) => {
            return (
              <option value={data} className={styles.option} key={i}>
                {data}
              </option>
            );
          })}
      </select>
    </section>
  );
};
export default SelectBoxWithTitle;
