import styles from "./breadcrumb.module.scss";

const Breadcrumb = ({ filters }) => {
  return (
    <nav className={styles.breadcrumb}>
      <ul>
        {filters.map((name, index) => (
          <li key={index}>
            <button>{name} 선택</button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Breadcrumb;
