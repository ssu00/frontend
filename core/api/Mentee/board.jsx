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

export const GetBoardDetail = async (token, post_id) => {
  try {
    const res = await axios.get(`/posts/${post_id}`, {
      headers: { Authorization: token },
    });
    return res.data;
  } catch (err) {
    return err;
  }
};

export const GetBoardDetailComments = async (token, post_id) => {
  try {
    const res = await axios.get(`/posts/${post_id}/comments`, {
      headers: { Authorization: token },
    });
    return res.data;
  } catch (err) {
    return err;
  }
};

export const UploadBoardComments = async (token, post_id, data) => {
  try {
    const res = await axios.post(`/posts/${post_id}/comments`, data, {
      headers: { Authorization: token },
    });
    return res;
  } catch (err) {
    return err.response;
  }
};

export const EditBoardPosts = async (token, post_id, data) => {
  try {
    const res = await axios.put(
      `/users/my-posts/${post_id}`,
      {
        category: data.category,
        content: data.content,
        title: data.title,
        image: data.image,
      },
      { headers: { Authorization: token } }
    );

    return res;
  } catch (e) {
    return e.response;
  }
};

export const DeleteBoardPosts = async (token, post_id) => {
  try {
    const res = await axios.delete(`/users/my-posts/${post_id}`, {
      headers: { Authorization: token },
    });

    return res;
  } catch (e) {
    return e.response;
  }
};

export const DeleteBoardComments = async (token, post_id, comment_id) => {
  try {
    const res = await axios.delete(`/posts/${post_id}/comments/${comment_id}`, {
      headers: { Authorization: token },
    });

    return res;
  } catch (e) {
    return e.response;
  }
};
