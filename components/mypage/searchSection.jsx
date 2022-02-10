import styles from "./searchSection.module.scss";
const SearchSection = ({ text1, text2 }) => {
  return (
    <section className={styles.topSection}>
      <section className={styles.searchSection}>
        <input
          type="text"
          className={styles.search}
          placeholder={"강의명, 튜티명을 검색하세요"}
        />
        <div className={styles.searchIcon} />
      </section>
      <section className={styles.filter}>
        <div>
          <span className={styles.total}>{text1}</span>
          <span className={styles.new}>{text2}</span>
        </div>
        <button type="button" className={styles.filterIcon} />
      </section>
    </section>
  );
};
export default SearchSection;
