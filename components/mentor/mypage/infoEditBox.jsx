import classNames from "classnames";
import styles from "./infoEditBox.module.scss";

const InfoEditBox = ({ title, value, ownStyle, makeChange }) => {
  const arr = ["초등학교", "중학교", "고등학교", "대학교"];
  let selected = false;
  return (
    <section className={classNames(ownStyle, styles.infoEditBox)}>
      <span className={styles.title}>{title}</span>
      {title == "최종학력" ? (
        <select
          defaultValue={value}
          onChange={makeChange}
          className={styles.inputBox}
        >
          {arr?.map((data, i) => {
            return (
              <option value={data} key={i}>
                {data}
              </option>
            );
          })}
        </select>
      ) : (
        <input
          type="text"
          value={value == null ? "" : value}
          className={styles.inputBox}
          onChange={makeChange}
        />
      )}
    </section>
  );
};

export default InfoEditBox;
