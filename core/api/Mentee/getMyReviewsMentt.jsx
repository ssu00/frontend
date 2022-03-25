import axios from "axios";

export const getMyReviewsMentt = async (token) => {
  try {
    const res = await axios.get("/mentees/my-reviews", {
      headers: { Authorization: token },
    });
    return res.data;
  } catch (e) {
    console.log(e);
  }
};
