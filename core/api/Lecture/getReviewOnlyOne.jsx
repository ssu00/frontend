import axios from "axios";
const GetReviewOnlyOne = async (classID, reviewID) => {
  try {
    const res = await axios.get(
      `/mentors/my-lectures/${classID}/reviews/${reviewID}`
    );
    return res.data;
  } catch (err) {
    return err;
  }
};

export default GetReviewOnlyOne;
