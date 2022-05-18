import axios from "axios";
export const writeReviewAPI = async (token, writeID, content, score) => {
  try {
    const res = await axios.post(
      `/mentees/my-enrollments/${writeID}/reviews`,
      { content: content, score: score },
      { headers: { Authorization: token } }
    );

    return res.status;
  } catch (err) {
    return err;
  }
};
