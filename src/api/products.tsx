import { Product } from "../types/products";
import instance from "./instance"

export const list = () => {
    const url = "/products"
    return instance.get(url);
}
export const read = (id: any) => {
    const url = `/products/${id}`
    return instance.get(url);
}
export const create = (data: Product) => {
    const url = `/products`
    return instance.post(url, data);
}
export const remove = (id: number) => {
    const url = `/products/${id}`
    return instance.delete(url);
}
export const update = (data: any) => {
    const url = `/products/${data._id}`
    return instance.put(url, data);
}