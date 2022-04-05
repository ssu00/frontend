import axios from "axios";
const UploadImage = async (data) => {
  try {
    const res = await axios.post("/uploads/images", data);
    return res;
  } catch (err) {
    return err;
  }
};

export default UploadImage;
