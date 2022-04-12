import instance from "./instance";

export const list = async () => {
  const url = `/detail-cart`;
  return instance.get(url);
};

export const read = async (id) => {
  const url = `/detail-cart/${id}`;
  return instance.get(url);
};

export const create = async (product) => {
  const url = `/detail-cart`;
  return instance.post(url, product);
};

export const remove = async (id) => {
  const url = `/detail-cart/${id}`;
  return instance.delete(url);
};

export const update = async (product) => {
  const url = `/detail-cart/${product.id}/edit`;
  return instance.put(url, product);
};