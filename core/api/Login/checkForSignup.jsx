import Api, { METHOD } from "../apiController";
export const nickNameDupCheck = async (nickname) => {
  const res = await Api({
    method: METHOD.GET,
    url: `/check-nickname?nickname=${nickname}`,
  });
  return res.data;
};

export const emailDupCheck = async (email) => {
  const res = await Api({
    method: METHOD.GET,
    url: `/check-username?username=${email}`,
  });
  return res.data;
};
