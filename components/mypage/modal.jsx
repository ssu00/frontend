import styles from "./modal.module.scss";
import axios from "axios";
const ReviewModal = () => {
  return (
    <div className={styles.reviewModal}>
      <span className={styles.text}>아직 작성된 리뷰가 없습니다.</span>
      <button type="button" className={styles.btn}>
        <span className={styles.ok}>확인</span>
      </button>
      <button type="button" className={styles.close} />
    </div>
  );
};

const RefundModal = ({ cancellationId, modal, setModal }) => {
  const Accept = () => {
    setModal(!modal);
    axios
      .put(`/tutors/my-cancellations/${cancellationId}`, {
        cancellation_id: cancellationId,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className={styles.refundModal}>
      <span className={styles.text}>
        [확인] 버튼을 누를 시 환불 승인이 완료되며, <br />
        수수료를 제외한 <strong className={styles.price}>0000원</strong>이
        튜티에게 환불됩니다.
      </span>
      <div className={styles.btn}>
        <button
          type="button"
          className={styles.cancelBtn}
          onClick={() => setModal(!modal)}
        >
          <span className={styles.btnText}>취소</span>
        </button>
        <button type="button" className={styles.okBtn} onClick={Accept}>
          <span className={styles.btnText}>확인</span>
        </button>
      </div>
    </div>
  );
};

const ReasonModal = ({ reason, value, setValue }) => {
  return (
    <div className={styles.reasonModal}>
      <span className={styles.text}>
        튜터의 환불 요청 사유는 아래와 같습니다. <br />
        확인 후, 환불 승인을 진행해주세요.
      </span>
      <strong className={styles.reason}>{reason}</strong>
      <button
        type="button"
        className={styles.btn}
        onClick={() => setValue(!value)}
      >
        <span className={styles.ok}>확인</span>
      </button>
    </div>
  );
};

export { ReviewModal, RefundModal, ReasonModal };
