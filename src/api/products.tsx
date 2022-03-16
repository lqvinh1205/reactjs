import instance from "./instance"

export const list = () => {
    const url = "/products"
    return instance.get(url);
}
export const read = (id: number) => {
    const url = `/products/${id}`
    return instance.get(url);
}