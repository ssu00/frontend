import axios from "axios";
const GetMyLectures = async (pageNum) => {
  try {
    const res = await axios.get(`/mentors/my-lectures?page=${pageNum}`);
    return res.data;
  } catch (err) {
    return err;
  }
};

export default GetMyLectures;
