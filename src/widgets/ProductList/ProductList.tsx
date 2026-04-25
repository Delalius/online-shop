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
    brand,
    setBrand,
    category,
    setCategory,
    sort,
    setSort,
    filteredProducts,
  } = useFilters(products);

  const brands = [...new Set(products.map((p) => p.brand))];
  const categories = [...new Set(products.map((p) => p.category))];

  useEffect(() => {
    fetchProducts()
      .then(setProducts)
      .catch(() => setError("Unable to load fragrances"))
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
        brand={brand}
        setBrand={setBrand}
        category={category}
        setCategory={setCategory}
        sort={sort}
        setSort={setSort}
        brands={brands}
        categories={categories}
        resultCount={filteredProducts.length}
      />

      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-dashed border-stone-300 bg-white/70 p-8 text-center">
          <p className="text-lg font-semibold text-stone-900">No fragrances found</p>
          <p className="mt-2 text-sm text-stone-500">
            Try another brand, fragrance family, or note.
          </p>
        </div>
      )}
    </>
  );
};
