import axios from "axios"
const instance = axios.create({
    // baseURL: "https://showroom-cars.herokuapp.com/api"
    baseURL: "http://localhost:8000/api"
})
export default instance