import axios from "axios";
const GetMenteeReview = async (token, data) => {
  try {
    const res = await axios.get(
      `/lectures/${data.id}/lecturePrices/${data.lecturePriceId}/reviews`,
      {
        headers: { Authorization: token },
        params: { page: 1 },
      }
    );

    return res.data;
  } catch (err) {
    return err;
  }
};

export default GetMenteeReview;
