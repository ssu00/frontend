import styles from "./selectBox.module.scss";
const year = [];
for (let i = 2002; i >= 1921; i--) {
  year.push(i);
}

const Selection = ({ title, opt, setValue }) => {
  return (
    <section className={styles.selectBox}>
      <span className={styles.title}>{title}</span>
      <select
        className={styles.sel}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      >
        {opt == 1 ? (
          <>
            <option value="M" className={styles.option}>
              남자
            </option>
            <option value="F" className={styles.option}>
              여자
            </option>
          </>
        ) : (
          <>
            {year.map((data, i) => {
              return (
                <option value={data} className={styles.option} key={i}>
                  {data}
                </option>
              );
            })}
          </>
        )}
      </select>
    </section>
  );
};

const SelectionWithoutTitle = ({ opt, name, onChange }) => {
  return (
    <section className={styles.selectBox2}>
      <select className={styles.sel} name={name} id={name} onChange={onChange}>
        {opt == 1 ? (
          <>
            <option value="M" className={styles.option}>
              남자
            </option>
            <option value="F" className={styles.option}>
              여자
            </option>
          </>
        ) : (
          <>
            {year.map((data, i) => {
              return (
                <option value={data} className={styles.option} key={i}>
                  {data}
                </option>
              );
            })}
          </>
        )}
      </select>
    </section>
  );
};
export { Selection, SelectionWithoutTitle };
