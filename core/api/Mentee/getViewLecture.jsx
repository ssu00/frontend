import Api, { METHOD } from "../apiController";

export const getViewLecture = async (id, token) => {
  const res = await Api({
    method: METHOD.GET,
    url: `mentees/my-review/${id}`,
    headers: { Authorization: token },
  });

  return res.data;
};
