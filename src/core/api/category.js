import { getLs } from "../../shared/ultis/localstogare";
import instance from "./instance";

const isUser = getLs("user");

export const list = async () => {
  const url = `/category`;
  return instance.get(url, {
    headers: {
      "Authorization": `Bearer ${isUser?.token}`,
    },
  });
};

export const read = async (id) => {
  const url = `/category/${id}`;
  return instance.get(url, {
    headers: {
      "Authorization": `Bearer ${isUser?.token}`,
    },
  });
};

export const create = async (user) => {
  const url = `/category/${isUser?.user._id}`;
  return instance.post(url, user, {
    headers: {
      "Authorization": `Bearer ${isUser?.token}`,
    },
  });
};

export const remove = async (id) => {
  const url = `/category/${id}/${isUser?.user._id}`;
  return instance.delete(url, {
    headers: {
      "Authorization": `Bearer ${isUser?.token}`,
    },
  });
};

export const update = async (cate) => {
  console.log(cate);
  const url = `/category/${cate.id}/${isUser?.user._id}/edit`;
  return instance.put(url, cate, {
    headers: {
      "Authorization": `Bearer ${isUser?.token}`,
    },
  });
};
