import axios from "axios";
const GetLectureDetail = async (id) => {
  try {
    const res = await axios.get(`/lectures/${id}`);

    return res.data;
  } catch (err) {
    return err;
  }
};

export default GetLectureDetail;
