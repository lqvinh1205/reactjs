import instance from "./instance";
export const signin = async (user) => {
    console.log(2);
  const url = `/signin`;
  return instance.post(url, user);
};
