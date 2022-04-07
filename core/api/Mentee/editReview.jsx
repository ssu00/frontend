import axios from "axios";

export const editReview = async ({
  token,
  lectureID,
  reviewID,
  content,
  score,
}) => {
  try {
    const res = await axios.put(
      `/mentees/my-lectures/${lectureID}/reviews/${reviewID}`,
      {
        content: content,
        score: score,
      },
      { headers: { Authorization: token } }
    );
    console.log(res);
    return res;
  } catch (e) {
    console.log(e);
  }
};
