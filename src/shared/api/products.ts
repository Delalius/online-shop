import axios from "axios";
import type { Product } from "@/shared/types/product";

const API_URL = 'https://fakestoreapi.com/products'

export const fetchProducts = async (): Promise<Product[]> => {
    const {data} = await axios.get<Product[]>(API_URL)
    return data
}

export const fetchProductById = async (id: string | number): Promise<Product> => {
    const {data} = await axios.get<Product>(`${API_URL}/${id}`)
    return data
}
