import styles from "./emptyDataNotice.module.scss";
const EmptyDataNotice = ({ data, content }) => {
  return (
    data.length == 0 && (
      <div className={styles.noData}>아직 {content}가 없습니다.</div>
    )
  );
};

export default EmptyDataNotice;
