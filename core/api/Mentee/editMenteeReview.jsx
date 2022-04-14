import axios from "axios";

export const editMenteeReview = async (
  lectureId,
  reviewId,
  token,
  content,
  score
) => {
  try {
    const res = await axios.put(
      `/mentees/my-lectures/${lectureId}/reviews/${reviewId}`,
      { content: content, score: score },
      { headers: { Authorization: token } }
    );
    console.log(res, "ttt");
    return res;
  } catch (e) {
    console.log(e);
  }
};

export default editMenteeReview;
