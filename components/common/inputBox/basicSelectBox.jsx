import { IC_ArrowDoubleTriangle } from "../../../icons";
import styles from "./basicSelectBox.module.scss";
const BasicSelectBox = ({ arr, name, onChange }) => {
  return (
    <div className={styles.selectBox}>
      <select name={name} id={name} onChange={onChange}>
        {arr?.map((data, i) => (
          <option value={data} key={i}>
            {data}
          </option>
        ))}
      </select>
      <IC_ArrowDoubleTriangle className={styles.arrow} />
    </div>
  );
};

export default BasicSelectBox;
