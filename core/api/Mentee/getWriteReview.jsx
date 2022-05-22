import axios from "axios";

export const getWriteReview = async (reviewID, content, score, token) => {
  try {
    const res = await axios.post(
      `/mentees/my-lectures/${reviewID}/reviews`,
      {
        content: content,
        score: score,
      },
      {
        headers: { Authorization: token },
      }
    );
    console.log(res);
    return res;
  } catch (e) {
    console.log(e);
  }
};
