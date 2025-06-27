import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://6838e0b36561b8d882ae6fcd.mockapi.io/api"
})

export const getProducts = async () => {
    const resp = await axiosInstance.get("/market-products")
    return resp.data
}

export const getProductById = async id => {
    const resp = await axiosInstance.get(`/market-products/${id}`)
    return resp.data
}