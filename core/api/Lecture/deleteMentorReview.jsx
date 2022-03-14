import axios from "axios";
const DeleteMentorReview = async (token, classID, parentID, childID) => {
  try {
    const res = await axios.delete(
      `/mentors/my-lectures/${classID}/reviews/${parentID}/children/${childID}`,
      { headers: { Authorization: token } }
    );
    console.log(res);
    return res.status;
  } catch (err) {
    return err;
  }
};

export default DeleteMentorReview;
