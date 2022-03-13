import axios from "axios";
const GetEachLecture = async (token, classID) => {
  try {
    const res = await axios.get(`/mentors/my-lectures/${classID}`, {
      headers: { Authorization: token },
    });
    console.log("res=======", res);
    return res.data;
  } catch (err) {
    return err;
  }
};

export default GetEachLecture;
