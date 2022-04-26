import axios from "axios";

export const getOriginalReview = async (id, token) => {
  try {
    const res = await axios.get(`/mentees/my-reviews/${id}`, {
      headers: { Authorization: token },
    });

    return res.data;
  } catch (e) {
    console.log(e);
  }
};
