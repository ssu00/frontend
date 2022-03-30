import axios from "axios";
const GetLecture = async () => {
  try {
    const res = await axios.get(`/lectures`);
    return res.data;
  } catch (err) {
    return err;
  }
};

export default GetLecture;
