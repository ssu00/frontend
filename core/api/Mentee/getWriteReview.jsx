import axios from "axios";

export const getWriteReview = async ({ data, token }) => {
  try {
    const res = await axios.post(`/mentees/my-lectures/${reviewID}/reviews`, {
      headers: { Authorization: token },
    });
    console.log(res.data);
  } catch (e) {
    console.log(e);
  }
};
