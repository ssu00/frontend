import Api, { METHOD } from "../apiController";
export const signUp = async (user, addr) => {
  return await Api({
    method: METHOD.POST,
    url: "/sign-up",
    data: {
      birthYear: user.birth,
      gender: user.gender == "남자" ? "MALE" : "FEMALE",
      image: null,
      name: user.name,
      nickname: user.nickname,
      password: user.pw,
      passwordConfirm: user.pwConfirm,
      phoneNumber: user.phone,
      username: user.email,
      zone: `${addr.statePick} ${addr.sigunguPick} ${addr.dongPick}`,
    },
  });
};
