import { useEffect, useState } from "react";
import { ProductCard } from "@/entities/product/ProductCard";
import { fetchProducts } from "@/shared/api/products";
import type { Product } from "@/shared/types/product";
import { ProductCardSkeleton } from "@/shared/ui/ProductCardSkeleton";
import { Filters } from "@/widgets/Filters/Filters";
import { useFilters } from "@/widgets/Filters/useFilter";

export const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const {
    search,
    setSearch,
    category,
    setCategory,
    sort,
    setSort,
    filteredProducts,
  } = useFilters(products);

  const categories = [...new Set(products.map((p) => p.category))];

  useEffect(() => {
    fetchProducts()
      .then(setProducts)
      .catch(() => setError("Ошибка при загрузки продуктов"))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <ProductCardSkeleton key={i} />
        ))}
      </div>
    );
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <>
    <Filters
        search={search}
        setSearch={setSearch}
        category={category}
        setCategory={setCategory}
        sort={sort}
        setSort={setSort}
        categories={categories}
      />
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {filteredProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
    </>
  );
};
