import axios from "axios";

const GetMyInfo = async (token) => {
  try {
    const res = await axios.get("/users/my-info", {
      headers: { Authorization: token },
    });
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export default GetMyInfo;
