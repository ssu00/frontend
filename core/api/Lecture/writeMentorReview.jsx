import axios from "axios";
const WriteMentorReview = async (token, classID, parentID, comment) => {
  try {
    const res = await axios.post(
      `/mentors/my-lectures/${classID}/reviews/${parentID}`,
      { content: comment },
      { headers: { Authorization: token } }
    );
    console.log(res);
    return res.status;
  } catch (err) {
    return err;
  }
};

export default WriteMentorReview;
