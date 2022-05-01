import axios from "axios";

export const GetMyPosts = async (token, page) => {
  try {
    const res = await axios.get(`/users/my-posts`, {
      headers: { Authorization: token },
      params: page,
    });
    return res.data;
  } catch (err) {
    return err;
  }
};

export const GetMyComments = async (token, page) => {
  try {
    const res = await axios.get(`/users/my-posts/commenting`, {
      headers: { Authorization: token },
      params: page,
    });
    return res.data;
  } catch (err) {
    return err;
  }
};

export const GetMyLikes = async (token, page) => {
  try {
    const res = await axios.get(`/users/my-posts/liking`, {
      headers: { Authorization: token },
      params: page,
    });
    return res.data;
  } catch (err) {
    return err;
  }
};
