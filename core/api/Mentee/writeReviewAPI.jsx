import axios from "axios";
const writeReviewAPI = async (token, writeID, content, score) => {
  try {
    const res = await axios.post(
      `mentees/my-lectures/${writeID}/reviews`,
      { content: content, score: score },
      { headers: { Authorization: token } }
    );

    console.log(res.status, "res.status");
    return res.status;
  } catch (err) {
    return err;
  }
};

export default writeReviewAPI;
