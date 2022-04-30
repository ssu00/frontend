import styles from "./breadcrumb.module.scss";

const Breadcrumb = ({ filters, openDrawer }) => {
  return (
    <nav className={styles.breadcrumb}>
      <ul>
        {filters.map((name, index) => (
          <li key={index}>
            <button onClick={() => openDrawer(index + 1)}>{name} 선택</button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Breadcrumb;
