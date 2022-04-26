import axios from "axios";

export const editMenteeReview = async (reviewId, token, content, score) => {
  try {
    const res = await axios.put(
      `/mentees/my-reviews/${reviewId}`,
      { content: content, score: score },
      { headers: { Authorization: token } }
    );

    return res;
  } catch (e) {
    console.log(e);
  }
};

export default editMenteeReview;
