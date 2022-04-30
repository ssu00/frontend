import axios from "axios";

export const getReviewInfo = async (id, token) => {
  try {
    const res = await axios.get(`/mentees/my-reviews/${id}`, {
      headers: { Authorization: token },
    });
    return res.data;
  } catch (err) {
    return err;
  }
};
