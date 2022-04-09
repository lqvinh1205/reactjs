import axios from "axios"
const instance = axios.create({
    baseURL: "https://showroom-cars.herokuapp.com/api"
})
export default instance
// https://showroom-cars.herokuapp.com