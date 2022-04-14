import axios from "axios";

const deleteMenteeReivew = async (token, lectureId, reviewId) => {
  try {
    const res = await axios.delete(
      `/mentees/my-lectures/${lectureId}/reviews/${reviewId}
      `,
      { headers: { Authorization: token } }
    );
    console.log(res);
    return res;
  } catch (err) {
    return err;
  }
};

export default deleteMenteeReivew;
