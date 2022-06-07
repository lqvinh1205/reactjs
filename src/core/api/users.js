import { getLs } from "../../shared/ultis/localstogare";
import instance from "./instance";
const isUser = getLs("user");

export const list = async () => {
  const url = `/users`;
  return instance.get(url, {
    headers: {
      "Authorization": `Bearer ${isUser?.token}`,
    },
  });
};

export const read = async (id) => {
  const url = `/users/${id}`;
  return instance.get(url, {
    headers: {
      "Authorization": `Bearer ${isUser?.token}`,
    },
  });
};

export const create = async (user) => {
  const url = `/users/${isUser.user._id}`;
  return instance.post(url, user, {
    headers: {
      "Authorization": `Bearer ${isUser?.token}`,
    },
  });
};

export const remove = async (id) => {
  const url = `/users/${id}/${isUser.user._id}`;
  return instance.delete(url, {
    headers: {
      "Authorization": `Bearer ${isUser?.token}`,
    },
  });
};

export const update = async (user) => {
  const url = `/users/${user.id}/${isUser.user._id}`;
  return instance.patch(url, user, {
    headers: {
      "Authorization": `Bearer ${isUser?.token}`,
    },
  });
};
