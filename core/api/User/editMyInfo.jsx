import axios from "axios";

const EditMyInfo = async (token, params) => {
  try {
    const res = await axios.put("/users/my-info", params, {
      headers: { Authorization: token },
    });
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export default EditMyInfo;
