import axios from "axios";
const RegisterProfileImg = async (token, imgUrl) => {
  try {
    const res = await axios.put(
      "/users/my-info/image",
      { image: imgUrl },
      {
        headers: { Authorization: token },
      }
    );
    return res;
  } catch (err) {
    return err;
  }
};

export default RegisterProfileImg;
