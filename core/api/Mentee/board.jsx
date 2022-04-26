import axios from "axios";

export const GetBoardList = async (token, page) => {
  try {
    const res = await axios.get(`/posts`, {
      headers: { Authorization: token },
      params: page,
    });
    return res.data;
  } catch (err) {
    return err;
  }
};

export const UploadPost = async (token, data) => {
  try {
    const res = await axios.post("/posts", data, {
      headers: { Authorization: token },
    });
    return res;
  } catch (err) {
    return err.response;
  }
};
