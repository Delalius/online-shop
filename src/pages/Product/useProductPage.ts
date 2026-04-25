import { useEffect, useState } from "react";
import { fetchProductById, fetchProducts } from "@/shared/api/products";
import type { Product } from "@/shared/types/product";

export const useProductPage = (id?: string) => {
  const [product, setProduct] = useState<Product | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadProduct = async () => {
      if (!id) {
        setError("Unable to identify the fragrance.");
        return;
      }

      try {
        setError(null);

        const selectedProduct = await fetchProductById(id);
        const products = await fetchProducts();

        setProduct(selectedProduct);
        setRelatedProducts(
          products
            .filter(
              (item) =>
                item.category === selectedProduct.category &&
                item.id !== selectedProduct.id
            )
            .slice(0, 4)
        );
      } catch {
        setError("Unable to load fragrance details.");
      }
    };

    loadProduct();
  }, [id]);

  return {
    product,
    relatedProducts,
    error,
  };
};
