import axios from "axios";
const GetReview = async (classID) => {
  try {
    const res = await axios.get(`/mentors/my-lectures/${classID}/reviews`);
    return res.data;
  } catch (err) {
    return err;
  }
};

export default GetReview;
