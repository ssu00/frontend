import axios from "axios";

export const editReview = async (lectureID, reviewID, content, score) => {
  try {
    const res = await axios.post(
      `/mentees/my-lectures/${lectureID}/reviews/${reviewID}`,
      {
        content: content,
        score: score,
      },
      {
        headers: { Authorization: token },
      }
    );
    return res.data;
  } catch (e) {
    console.log(e);
  }
};
