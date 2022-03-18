import instance from "./instance"

export const list = () => {
    const url = "/products"
    return instance.get(url);
}
export const read = (id: number) => {
    const url = `/products/${id}`
    return instance.get(url);
}
export const create = (data: object) => {
    const url = `/products`
    return instance.post(url, data);
}