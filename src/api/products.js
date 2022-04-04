import { getLs } from "../ultis/localstogare";
import instance from "./instance";

const isUser = getLs("user");

export const create = async (user) => {
  const url = `/products/${isUser.user._id}`;
  return instance.post(url, user, {
    headers: {
      "Authorization": `Bearer ${isUser?.token}`,
    },
  });
};

export const list = async () => {
  const url = `/products/${isUser.user._id}`;
  return instance.get(url, {
    headers: {
      "Authorization": `Bearer ${isUser?.token}`,
    },
  });
};

export const read = async (id) => {
  const url = `/products/${id}/${isUser.user._id}`;
  return instance.get(url, {
    headers: {
      "Authorization": `Bearer ${isUser?.token}`,
    },
  });
};

export const remove = async (id) => {
  const url = `/products/${id}/${isUser.user._id}`;
  return instance.delete(url, {
    headers: {
      "Authorization": `Bearer ${isUser?.token}`,
    },
  });
};

export const update = async (product) => {
  const url = `/products/${product.id}/${isUser.user._id}/edit`;
  return instance.put(url, product, {
    headers: {
      "Authorization": `Bearer ${isUser?.token}`,
    },
  });
};

export const search = async (value) => {
  const url = `/products_search?name=${value.value}`;
  return instance.post(url, value, {
    headers: {
      "Authorization": `Bearer ${isUser?.token}`,
    },
  });
};


export const range = async (value) => {
  const url = `/products_pricerange`;
  return instance.post(url, value, {
    headers: {
      "Authorization": `Bearer ${isUser?.token}`,
    },
  });
};
