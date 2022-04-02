export const setLs = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data))
}
export const getLs = (key) => {
    return JSON.parse(localStorage.getItem(key))
}
export const removeLs = (key) => {
    return localStorage.removeItem(key)
}