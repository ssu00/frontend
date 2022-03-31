import axios from "axios";
export const GetLectureDetails = async (token, id) => {
  try {
    const res = await axios.get(`/lectures/${id}`, {
      headers: { Authorization: token },
    });
    return res.data;
  } catch (err) {
    return err;
  }
};

export default GetLectureDetails;
