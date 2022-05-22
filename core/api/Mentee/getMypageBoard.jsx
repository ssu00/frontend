import Api, { METHOD } from "../apiController";

export const getMyPosts = async (token, page) => {
  const res = await Api({
    method: METHOD.GET,
    url: `/users/my-posts`,
    params: page,
    headers: { Authorization: token },
  });

  return res.data;
};

export const getMyComments = async (token, page) => {
  const res = await Api({
    method: METHOD.GET,
    url: `/users/my-posts/commenting`,
    params: page,
    headers: { Authorization: token },
  });

  return res.data;
};

export const getMyLikes = async (token, page) => {
  const res = await Api({
    method: METHOD.GET,
    url: `/users/my-posts/liking`,
    params: page,
    headers: { Authorization: token },
  });

  return res.data;
};
