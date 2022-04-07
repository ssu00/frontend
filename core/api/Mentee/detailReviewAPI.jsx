import axios from "axios";
const detailReviewAPI = async (token, reviewID, content, score) => {
  try {
    const res = await axios.post(
      `mentees/my-lectures/${reviewID}/reviews`,
      { content: content, score: score },
      { headers: { Authorization: token } }
    );
    console.log(res);
    console.log(res.status, "res.status, detail");
    return res.status;
  } catch (err) {
    return err;
  }
};

export default detailReviewAPI;
