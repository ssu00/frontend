import axios from "axios";
const GetMyNotification = async (token, page) => {
  try {
    console.log("page=", page);
    const res = await axios.get(`/users/my-notifications?page=${page}`, {
      headers: { Authorization: token },
    });
    console.log("res=", res);
    return res.data;
  } catch (err) {
    return err;
  }
};

export default GetMyNotification;
