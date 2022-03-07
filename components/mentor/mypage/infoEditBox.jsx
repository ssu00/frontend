import styles from "./infoEditBox.module.scss";
import classNames from "classnames";
const InfoEditBox = ({ title, value, ownStyle }) => {
  return (
    <section className={classNames(ownStyle, styles.infoEditBox)}>
      <span className={styles.title}>{title}</span>
      <input type="text" value={value} className={styles.inputBox} />
    </section>
  );
};

export default InfoEditBox;
