import axios from "axios";

export const deleteMenteeReivew = async (token, reviewId) => {
  try {
    const res = await axios.delete(`/mentees/my-reviews/${reviewId}`, {
      headers: { Authorization: token },
    });
    console.log(res);
    return res;
  } catch (err) {
    return err;
  }
};
