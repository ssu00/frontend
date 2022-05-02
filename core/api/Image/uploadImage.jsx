import axios from "axios";
const UploadImage = async (data, token) => {
  try {
    const res = await axios.post("/uploads/images", data, {
      headers: { Authorization: token },
    });
    return res;
  } catch (err) {
    return err;
  }
};

export default UploadImage;
