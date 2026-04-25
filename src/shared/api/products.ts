import type { Product } from "@/shared/types/product";
import { perfumeProducts } from "@/shared/data/perfumes";

const imitateNetwork = () => new Promise((resolve) => setTimeout(resolve, 250));

export const fetchProducts = async (): Promise<Product[]> => {
    await imitateNetwork();
    return perfumeProducts;
};

export const fetchProductById = async (id: string | number): Promise<Product> => {
    await imitateNetwork();

    const product = perfumeProducts.find((item) => item.id === Number(id));

    if (!product) {
        throw new Error("Product not found");
    }

    return product;
};
