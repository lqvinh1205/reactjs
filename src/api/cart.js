import instance from "./instance";

export const list = async (userId) => {
  const url = `/cart/${userId}`;
  return instance.get(url);
};

export const update = async (carts) => {
  await instance.patch("/cart", {
    ...carts,
    status: "Đã đặt hàng",
  });
};
