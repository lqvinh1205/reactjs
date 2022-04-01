import { getLs } from "../ultis/localstogare";
import instance from "./instance";

const isUser = getLs("user");

export const create = async (user) => {
  const url = `/category/${isUser.user._id}`;
  return instance.post(url, user, {
    headers: {
      "Authorization": `Bearer ${isUser?.token}`,
    },
  });
};

export const list = async () => {
  const url = `/category/${isUser.user._id}`;
  return instance.get(url, {
    headers: {
      "Authorization": `Bearer ${isUser?.token}`,
    },
  });
};

export const read = async (id) => {
  const url = `/category/${id}/${isUser.user._id}`;
  return instance.get(url, {
    headers: {
      "Authorization": `Bearer ${isUser?.token}`,
    },
  });
};

export const remove = async (id) => {
  const url = `/category/${id}/${isUser.user._id}`;
  return instance.delete(url, {
    headers: {
      "Authorization": `Bearer ${isUser?.token}`,
    },
  });
};

export const update = async (product) => {
  console.log(product);
  const url = `/category/${product.id}/${isUser.user._id}/edit`;
  return instance.put(url, product, {
    headers: {
      "Authorization": `Bearer ${isUser?.token}`,
    },
  });
};
