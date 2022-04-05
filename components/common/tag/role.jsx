import classNames from "classnames";
import styles from "./role.module.scss";
const Role = ({ role, otherStyle }) => {
  return (
    <div
      className={classNames(
        otherStyle,
        role == "멘토" ? styles.mentorRole : styles.menteeRole
      )}
    >
      <span>{role}</span>
    </div>
  );
};

export default Role;
