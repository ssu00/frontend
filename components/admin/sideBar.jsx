import styles from "./sideBar.module.scss";
const SideBarBtn = ({ category, selected }) => {
  return (
    <button
      type="button"
      className={selected ? styles.btnSelected : styles.btnUnselected}
    >
      {category}
    </button>
  );
};

const SideBar = () => {
  return (
    <section className={styles.sideBar}>
      <button type="button" className={styles.logo} />
      <div className={styles.btns}>
        <SideBarBtn category={"lectures"} selected={true} />
        <SideBarBtn category={"test1"} selected={false} />
        <SideBarBtn category={"test2"} selected={false} />
      </div>
    </section>
  );
};

export default SideBar;
