import axios from "axios";
const GetMyLectures = async (token, pageNum) => {
  try {
    const res = await axios.get(`/mentors/my-lectures?page=${pageNum}`, {
      headers: { Authorization: token },
    });
    return res.data;
  } catch (err) {
    return err;
  }
};

export default GetMyLectures;
