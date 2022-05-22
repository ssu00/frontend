import Api, { METHOD } from "../apiController";

export const deleteLecture = async (token, classID) => {
  const res = await Api({
    method: METHOD.DELETE,
    url: `/lectures/${classID}`,
    headers: { Authorization: token },
  });
  return res.status;
};
