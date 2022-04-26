import axios from "axios";

export const getReviewIndividualInquiry = async (token, menteeReviewId) => {
  try {
    const res = await axios.get(`/mentees/my-reviews/${menteeReviewId}`, {
      headers: { Authorization: token },
    });

    return res.data;
  } catch (e) {
    console.log(e);
  }
};
