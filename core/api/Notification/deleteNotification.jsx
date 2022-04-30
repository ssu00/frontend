import axios from "axios";
const DeleteNotification = async (token, notificationId) => {
  try {
    const res = await axios.delete(
      `/users/my-notifications/${notificationId}`,
      {
        headers: { Authorization: token },
      }
    );
    console.log("res=", res);
    return res.status;
  } catch (err) {
    return err;
  }
};

export default DeleteNotification;
