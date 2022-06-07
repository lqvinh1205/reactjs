import instance from "./instance";
export const signin = async (user) => {
  const url = `/signin`;
  return instance.post(url, user);
};

export const signup = async (user) => {
  const url = `/signup`;
  return instance.post(url, user);
};
