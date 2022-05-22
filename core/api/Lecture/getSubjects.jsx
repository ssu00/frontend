import Api, { METHOD } from "../apiController";

export const getSubjects = async () => {
  const res = await Api({
    method: METHOD.GET,
    url: "/subjects",
  });

  return res.data;
};
