import axios from "axios";
const GetMyInfoAsMentor = async (token) => {
  try {
    const res = await axios.get("/mentors/my-info", {
      headers: { Authorization: token },
    });
    return res.data;
  } catch (err) {
    return err;
  }
};

export default GetMyInfoAsMentor;
