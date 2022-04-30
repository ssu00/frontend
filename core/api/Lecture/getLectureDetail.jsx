import axios from "axios";
const GetLectureDetail = async (id, token) => {
  try {
    const res = await axios.get(`/mentors/my-lectures/${id}`, {
      headers: { Authorization: token },
    });
    return res.data;
  } catch (err) {
    return err;
  }
};

export default GetLectureDetail;
