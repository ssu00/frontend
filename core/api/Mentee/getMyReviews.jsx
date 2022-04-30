import axios from "axios";

export const getMyReviews = async (reviewID) => {
  try {
    const res = await axios.get(`mentees/my-reviews/${reviewID}`);
    return res.data;
  } catch (e) {
    console.log(e);
  }
};
