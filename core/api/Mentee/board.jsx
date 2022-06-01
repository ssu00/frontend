import Api, { METHOD } from "../apiController";

export const getBoardList = async (token, page, search) => {
  Object.assign(page, search);
  const res = await Api({
    method: METHOD.GET,
    url: `/posts`,
    headers: { Authorization: token },
    params: page,
  });
  return res.data;
};

export const uploadPost = async (token, data) => {
  const res = await Api({
    method: METHOD.POST,
    url: `/posts`,
    data,
    headers: { Authorization: token },
  });
  return res;
};

export const getBoardDetail = async (token, post_id) => {
  const res = await Api({
    method: METHOD.GET,
    url: `/posts/${post_id}`,
    headers: { Authorization: token },
  });
  return res.data;
};

export const getBoardDetailComments = async (token, post_id) => {
  const res = await Api({
    method: METHOD.GET,
    url: `/posts/${post_id}/comments`,
    headers: { Authorization: token },
  });
  return res.data;
};

export const uploadBoardComments = async (token, post_id, data) => {
  const res = await Api({
    method: METHOD.POST,
    url: `/posts/${post_id}/comments`,
    data,
    headers: { Authorization: token },
  });
  return res;
};

export const editBoardPosts = async (token, post_id, data) => {
  const res = await Api({
    method: METHOD.PUT,
    url: `/users/my-posts/${post_id}`,
    category: data.category,
    content: data.content,
    title: data.title,
    image: data.image,
    headers: { Authorization: token },
  });
  return res;
};

export const deleteBoardPosts = async (token, post_id) => {
  const res = await Api({
    method: METHOD.DELETE,
    url: `/users/my-posts/${post_id}`,
    headers: { Authorization: token },
  });
  return res;
};

export const deleteBoardComments = async (token, post_id, comment_id) => {
  const res = await Api({
    method: METHOD.DELETE,
    url: `/posts/${post_id}/comments/${comment_id}`,
    headers: { Authorization: token },
  });
  return res;
};

export const likeBoardPosts = async (token, post_id) => {
  const res = await Api({
    method: METHOD.POST,
    url: `/posts/${post_id}/like`,
    headers: { Authorization: token },
  });
  return res;
};

export const getBoardCategory = async (token) => {
  const res = await Api({
    method: METHOD.GET,
    url: `/posts/categories`,
    headers: { Authorization: token },
  });
  return res.data;
};
