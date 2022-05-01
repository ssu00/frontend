import axios from "axios";
const GetReview = async (data) => {
  try {
    const res = await axios.get(`/mentors/my-lectures/${data}/reviews`);
    return res.data;
  } catch (err) {
    return err;
  }
};

export default GetReview;
