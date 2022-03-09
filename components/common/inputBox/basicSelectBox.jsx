import { IC_ArrowDoubleTriangle } from "../../../icons";
import styles from "./basicSelectBox.module.scss";
const BasicSelectBox = ({ arr, name, onChange }) => {
  return (
    <section className={styles.selectBox}>
      <select className={styles.sel} name={name} id={name} onChange={onChange}>
        {arr?.map((data, i) => {
          return (
            <option value={data} className={styles.option} key={i}>
              {data}
            </option>
          );
        })}
      </select>
      <IC_ArrowDoubleTriangle className={styles.arrow} />
    </section>
  );
};

export default BasicSelectBox;
