import axios from "axios";

const GetUserInfo = async (token, id) => {
  try {
    const res = await axios.get(`/users/${id}`, {
      headers: { Authorization: token },
    });
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export default GetUserInfo;
