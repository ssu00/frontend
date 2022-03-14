import axios from "axios";
const EditMentorReview = async (token, classID, parentID, childID, comment) => {
  try {
    const res = await axios.put(
      `/mentors/my-lectures/${classID}/reviews/${parentID}/children/${childID}`,
      { content: comment },
      { headers: { Authorization: token } }
    );
    return res.status;
  } catch (err) {
    return err;
  }
};

export default EditMentorReview;
