import axios from "axios";
const GetUncheckedNotificationCount = async (token) => {
  try {
    const res = await axios.get(`/users/my-notifications/count-unchecked`, {
      headers: { Authorization: token },
    });
    return res.data;
  } catch (err) {
    return err;
  }
};

export default GetUncheckedNotificationCount;
