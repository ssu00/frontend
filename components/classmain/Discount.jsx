import style from "./discount.module.scss";
const Discount = ({
  originPrice,
  discount,
  finalPrice,
  notes, //특이사항 (ex) 쿠폰 적용시 5개월 할부
  group,
}) => {
  return (
    <section className={style.dcSection}>
      <div className={style.discountSection}>
        {group ? (
          <div className={style.group}>그룹</div>
        ) : (
          <div className={style.group}>1:1</div>
        )}
        <strong className={style.finalPrice}>
          {finalPrice.toLocaleString("ko-KR") + "원"}
        </strong>
      </div>
      {/* {discount ? (
        <>
          {group ? (
            <div className={style.group}>그룹</div>
          ) : (
            <div className={style.group}>1:1</div>
          )}
          <span className={style.notes}>{notes}</span>
          <div className={style.dc}>
            <strong className={style.discount}>{discount + "%"}</strong>
            <strong className={style.finalPrice}>
              {finalPrice.toLocaleString("ko-KR") + "원"}
            </strong>
            <span className={style.originPrice}>
              {originPrice.toLocaleString("ko-KR") + "원"}
            </span>
          </div>
        </>
      ) : (
        <div className={styles.discountSection}>
          {group ? (
            <div className={style.group}>그룹</div>
          ) : (
            <div className={style.group}>1:1</div>
          )}
          <strong className={style.finalPrice}>
            {finalPrice.toLocaleString("ko-KR") + "원"}
          </strong>
        </div>
      )} */}
    </section>
  );
};
export default Discount;
