import instance from "./instance";
export const signin = async (user) => {
  const url = `/signin`;
  return instance.post(url, user);
};
