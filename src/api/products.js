import { getLs } from "../ultis/localstogare";
import instance from "./instance";

const isUser = getLs("user");

export const list = async () => {
  const url = `/products`;
  return instance.get(url, {
    headers: {
      "Authorization": `Bearer ${isUser?.token}`,
    },
  });
};
export const listPagination = async (page, perpage) => {
  const url = `/products?_page=${page}&_perpage=${perpage}`;
  return instance.get(url, {
    headers: {
      "Authorization": `Bearer ${isUser?.token}`,
    },
  });
};

export const read = async (id) => {
  const url = `/products/${id}`;
  return instance.get(url, {
    headers: {
      "Authorization": `Bearer ${isUser?.token}`,
    },
  });
};

export const create = async (user) => {
  const url = `/products/${isUser.user._id}`;
  return instance.post(url, user, {
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

export const search = async (text) => {
  const url = `/products?search=${text}`;
  return instance.get(url, {
    headers: {
      "Authorization": `Bearer ${isUser?.token}`,
    },
  });
};
export const range = async (start, end) => {
  const url = `/products?gte=${start}&lte=${end}`;
  return instance.get(url, {
    headers: {
      "Authorization": `Bearer ${isUser?.token}`,
    },
  });
};
