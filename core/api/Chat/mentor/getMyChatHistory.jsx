import axios from "axios";
const GetMyChatHistory = async (token, chid) => {
  try {
    const res = await axios.get(`/mentors/my-chatrooms/${chid}`, {
      headers: { Authorization: token },
    });
    return res.data;
  } catch (err) {
    console.log("err=", err);
    return err;
  }
};

export default GetMyChatHistory;
