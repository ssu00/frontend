import style from "./reviewSection.module.scss";
import Rating from "./Rating";
import { useEffect, useState } from "react";
import axios from "axios";
import { report } from "process";

const CommentWriting = ({ lecId, pId, reviewId, num }) => {
  const [comment, setComment] = useState("");
  const WriteComment = () => {
    axios
      .post(`/tutors/my-lectures/${lecId}/reviews/${pId}`, { content: comment })
      .then((response) => {
        console.log(response);
        window.location.reload();
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const EditComment = () => {
    axios
      .put(`/tutors/my-lectures/${lecId}/reviews/${pId}/children/${reviewId}`, {
        content: comment,
      })
      .then((response) => {
        console.log(response);
        window.location.reload();
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <section className={style.ReviewWriting}>
      <div className={style.WritingBox}>
        <textarea
          placeholder="댓글을 입력해주세요"
          className={style.text}
          onChange={(e) => setComment(e.target.value)}
        />
        <button
          type="submit"
          className={style.btn}
          onClick={() => {
            num == 1 ? WriteComment() : EditComment();
          }}
        >
          등록
        </button>
      </div>
    </section>
  );
};

const reportReview = () => {
  if (confirm("신고 하시겠습니까?")) {
    alert("신고접수가 완료되었습니다.");
  }
};
const Review = ({ name, date, rating, review, reviewId, lecId, tReview }) => {
  const [comment, setComment] = useState(false);
  return (
    <section className={style.UserReview}>
      {tReview == null ? (
        <button
          type="button"
          className={style.commentBtn}
          onClick={() => setComment(true)}
        >
          댓글 달기
        </button>
      ) : (
        <></>
      )}
      <div className={style.profile}>
        {/* 프로필 사진 없을 때 사용할 기본 이미지 필요 */}
        {/* {profile != "" ? (
          <Image
            src={profile}
            alt=""
            width="30px"
            height="30px"
            className={style.profile}
          ></Image>
        ) : (
          <Image
            src="/images/profile.png"
            alt=""
            width="30px"
            height="30px"
            className={style.profile}
          ></Image>
        )} */}
      </div>
      <div className={style.textSection}>
        <h2 className={style.reviewInfo}>
          <span className={style.name}>{name}</span>
          <span className={style.date}>{date}</span>
          <span className={style.reportReview} onClick={reportReview}>
            신고
          </span>
        </h2>
        <span className={style.rating}>
          <Rating rating={rating}></Rating>
        </span>
        <span className={style.review}>{review}</span>
      </div>
      {tReview == null && comment ? (
        <CommentWriting lecId={lecId} pId={reviewId} num={1} />
      ) : (
        <></>
      )}
    </section>
  );
};

const DeleteModal = ({ lecId, pId, reviewId }) => {
  useEffect(() => {
    window.addEventListener("click", (e) => {
      const commentBack = document.getElementById("commentBack");
      e.target === commentBack ? (commentBack.style.display = "none") : false;
    });
  }, []);

  const DeleteComment = () => {
    axios
      .delete(
        `/tutors/my-lectures/${lecId}/reviews/${pId}/children/${reviewId}`
      )
      .then((response) => {
        console.log(response);
        window.location.reload();
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div className={style.commentModal} id="commentModal">
      <p className={style.text}>
        <strong>
          삭제하면 되돌릴 수 없습니다.
          <br />
          정말 삭제하시겠습니까?
        </strong>
      </p>
      <div className={style.choose}>
        <button
          type="button"
          className={style.no}
          onClick={() => {
            const commentBack = document.getElementById("commentBack");
            commentBack ? (commentBack.style.display = "none") : "";
          }}
        >
          아니오
        </button>
        <button
          type="button"
          className={style.ok}
          onClick={() => DeleteComment()}
        >
          네
        </button>
      </div>
    </div>
  );
};

const Comment = ({ date, comment, lecId, tuteeReviewId, tutorReviewId }) => {
  const [edit, setEdit] = useState(false);
  const [remove, setRemove] = useState(false);

  return (
    <section className={style.TutorComment}>
      <div className={style.btnSet}>
        <button
          type="button"
          className={style.commentBtn}
          onClick={() => setEdit(true)}
        >
          수정
        </button>
        <button
          type="button"
          className={style.commentBtn}
          onClick={() => {
            setRemove(true);
            const commentBack = document.getElementById("commentBack");
            commentBack ? (commentBack.style.display = "block") : "";
          }}
        >
          삭제
        </button>
      </div>
      <div className={style.profile}>
        {/* <Image
          src={profile}
          alt=""
          width="30px"
          height="30px"
          className={style.profile}
        ></Image> */}
      </div>
      <section className={style.textSection}>
        <h2 className={style.reviewInfo}>
          <span className={style.name}>튜터 댓글</span>
          <span className={style.date}>{date}</span>
        </h2>
        <span className={style.comment}>{comment}</span>
      </section>
      {edit ? (
        <CommentWriting
          lecId={lecId}
          pId={tuteeReviewId}
          reviewId={tutorReviewId}
          num={2}
        />
      ) : (
        <></>
      )}
      {remove ? (
        <div className={style.commentBack} id="commentBack">
          <div className={style.modal} id="modal">
            <DeleteModal
              lecId={lecId}
              pId={tuteeReviewId}
              reviewId={tutorReviewId}
            />
          </div>
        </div>
      ) : (
        <></>
      )}
    </section>
  );
};

const ReviewSection = ({
  // Uprofile,
  Uname,
  Udate,
  URating,
  Ureview,
  TutorReview,
  ReviewId,
  ClassId,
}) => {
  return (
    <>
      <Review
        // profile={Uprofile}
        name={Uname}
        date={Udate}
        rating={URating}
        lecId={ClassId}
        review={Ureview}
        reviewId={ReviewId}
        tReview={TutorReview.content}
      />
      {TutorReview.content != null ? (
        <Comment
          date={TutorReview.createdAt.substring(0, 10)}
          comment={TutorReview.content}
          lecId={ClassId}
          tuteeReviewId={ReviewId}
          tutorReviewId={TutorReview.reviewId}
        />
      ) : (
        <></>
      )}
    </>
  );
};
export default ReviewSection;
