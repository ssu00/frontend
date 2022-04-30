import axios from "axios";
const CheckNotification = async (token) => {
  try {
    const res = await axios.put("/users/my-notifications", "", {
      headers: { Authorization: token },
    });
    console.log("res==", res);
    return res.data;
  } catch (err) {
    console.log("check err==", err);
    return err.response;
  }
};

export default CheckNotification;
