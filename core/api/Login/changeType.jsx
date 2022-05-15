import axios from "axios";
const ChangeType = async (token) => {
  try {
    const res = await axios.get("/change-type", {
      headers: { Authorization: token },
    });
    return res;
  } catch (err) {
    console.log("err===============", err.response);
    return err;
  }
};
export default ChangeType;
