import instance from "./instance";

export const list = async () => {
  const url = `/cart`;
  return instance.get(url);
};

export const read = async (id) => {
  const url = `/cart/${id}`;
  return instance.get(url);
};

export const create = async (user) => {
  const url = `/cart`;
  return instance.post(url, user);
};

export const remove = async (id) => {
  const url = `/cart/${id}`;
  return instance.delete(url);
};

export const update = async (product) => {
  const url = `/cart/${product.id}/edit`;
  return instance.put(url, product);
};