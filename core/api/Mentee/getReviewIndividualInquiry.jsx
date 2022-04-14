import axios from "axios";

export const getReviewIndividualInquiry = async (
  token,
  lectureId,
  reviewId
) => {
  try {
    const res = await axios.get(
      `mentees/my-lectures/${lectureId}/reviews/${reviewId}`,
      { headers: { Authorization: token } }
    );

    console.log(1);
    console.log(res.data);
    return res.data;
  } catch (e) {
    console.log(e);
  }
};
