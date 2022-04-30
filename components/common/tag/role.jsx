import classNames from "classnames";
import styles from "./role.module.scss";
const Role = ({ role, otherStyle }) => {
  return (
    <div
      className={classNames(
        otherStyle,
        role == "멘토" ? styles.role_mentor : styles.role_mentee
      )}
    >
      <span>{role}</span>
    </div>
  );
};

export default Role;
