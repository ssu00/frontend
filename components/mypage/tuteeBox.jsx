import styles from "./tuteeBox.module.scss";
import Image from "next/image";
import { TuteeBoxBtn } from "./myPageBtn";
const TuteeBox = ({ name, count, onClick }) => {
  return (
    <section className={styles.tuteeBox}>
      <div className={styles.img} />
      <strong className={styles.name}>{name} 튜티</strong>
      <span className={styles.count}>{count}개의 강의</span>
      <button type="button" className={styles.dropBtn} onClick={onClick} />
    </section>
  );
};

const ClassBox = ({ title, type, price, img }) => {
  return (
    <section className={styles.boxContent}>
      <div className={styles.classImg}>
        <Image src={img} width="84px" height="84px" />
      </div>
      <div className={styles.classContent}>
        <strong className={styles.title}>{title}</strong>
        <br />
        <span className={styles.type}>{type}</span>
        <br />
        <strong className={styles.price}>
          {price}
          <span className={styles.unit}>원</span>
        </strong>
        <span className={styles.month}> /1개월 기준</span>
      </div>
    </section>
  );
};

const TuteeBox2 = ({
  name,
  title,
  type,
  price,
  img,
  onClick,
  chatID,
  lecID,
  tuteeID,
}) => {
  return (
    <section className={styles.tuteeBoxOpen}>
      <section className={styles.firstLine}>
        <div className={styles.nameSection}>
          <div className={styles.img} />
          <strong className={styles.name}>{name} 튜티</strong>
        </div>
        <button type="button" className={styles.upbar} onClick={onClick} />
      </section>
      <ClassBox title={title} type={type} price={price} img={img} />
      <div className={styles.btn}>
        <TuteeBoxBtn text={"대화 요청"} chatroomID={chatID} tuteeID={tuteeID} />
        <TuteeBoxBtn text={"리뷰 확인"} lectureID={lecID} />
      </div>
    </section>
  );
};

const RefundReq = () => {
  return (
    <div className={styles.refundReq}>
      <div className={styles.req}>
        <span className={styles.text}>환불요청</span>
      </div>
      <button type="button" className={styles.chat} />
    </div>
  );
};

const RefundBox = ({
  date,
  name,
  title,
  type,
  price,
  img,
  value,
  setValue,
  value2,
  setValue2,
}) => {
  return (
    <>
      <section className={styles.refundBox}>
        <div className={styles.date}>{date}</div>
        <section className={styles.firstLine}>
          <div className={styles.nameSection}>
            <div className={styles.img} />
            <strong className={styles.name}>{name} 튜티</strong>
          </div>
          <RefundReq />
        </section>
        <ClassBox title={title} type={type} price={price} img={img} />
        <div className={styles.btn}>
          <TuteeBoxBtn text={"환불 승인"} value={value2} setValue={setValue2} />
          <TuteeBoxBtn text={"환불 사유"} value={value} setValue={setValue} />
        </div>
      </section>
      <div className={styles.line} />
    </>
  );
};

export { TuteeBox, TuteeBox2, RefundBox };
