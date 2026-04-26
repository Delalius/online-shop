import { ChevronRight } from "lucide-react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useCartStore } from "@/features/cart/store";
import { ProductDetails } from "@/pages/Product/components/ProductDetails";
import { ProductErrorState } from "@/pages/Product/components/ProductErrorState";
import { ProductHero } from "@/pages/Product/components/ProductHero";
import { ProductInfoGrid } from "@/pages/Product/components/ProductInfoGrid";
import { RelatedProducts } from "@/pages/Product/components/RelatedProducts";
import {
  getProductCategoryLabel,
  getProductCode,
  getProductRating,
  getProductReviews,
  getProductReviewCount,
  productBenefits,
} from "@/pages/Product/model";
import { useProductPage } from "@/pages/Product/useProductPage";
import { ProductPageSkeleton } from "@/shared/ui/ProductPageSkeleton";

export default function ProductPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { product, relatedProducts, error } = useProductPage(id);

  const addToCart = useCartStore((state) => state.addToCart);
  const increase = useCartStore((state) => state.increase);
  const decrease = useCartStore((state) => state.decrease);
  const items = useCartStore((state) => state.items);

  const cartItem = product
    ? items.find((item) => item.id === product.id) ?? null
    : null;
  const isInCart = Boolean(cartItem);
  const currentQuantity = cartItem?.quantity ?? 0;
  const rating = getProductRating(product);
  const reviews = getProductReviews(product);
  const reviewCount = getProductReviewCount(product);
  const productCode = getProductCode(product);
  const categoryLabel = getProductCategoryLabel(product);

  const handlePrimaryAction = () => {
    if (!product) {
      return;
    }

    if (isInCart) {
      navigate("/cart");
      return;
    }

    addToCart({
      id: product.id,
      brand: product.brand,
      title: product.title,
      price: product.price,
      image: product.image,
      concentration: product.concentration,
      volumeMl: product.volumeMl,
    });
  };

  const handleIncrease = () => {
    if (!product) {
      return;
    }

    if (isInCart) {
      increase(product.id);
      return;
    }

    addToCart({
      id: product.id,
      brand: product.brand,
      title: product.title,
      price: product.price,
      image: product.image,
      concentration: product.concentration,
      volumeMl: product.volumeMl,
    });
  };

  const handleDecrease = () => {
    if (product && currentQuantity > 0) {
      decrease(product.id);
    }
  };

  if (!product && !error) {
    return <ProductPageSkeleton />;
  }

  if (error || !product) {
    return (
      <ProductErrorState error={error ?? "Unable to retrieve fragrance details."} />
    );
  }

  return (
    <div className="bg-[linear-gradient(180deg,#fbf7f2_0%,#ffffff_48%,#eef6f0_100%)] px-4 py-6 sm:px-6 sm:py-10">
      <div className="mx-auto max-w-[1480px]">
        <div className="mb-6 flex flex-wrap items-center gap-2 text-sm text-slate-500">
          <Link to="/" className="transition hover:text-slate-900">
            Collection
          </Link>
          <ChevronRight className="h-4 w-4" />
          <span className="rounded-full bg-white/80 px-3 py-1 text-stone-700 shadow-sm">
            {categoryLabel}
          </span>
        </div>

        <ProductHero
          product={product}
          benefits={productBenefits}
          productCode={productCode}
          rating={rating}
          reviewCount={reviewCount}
          currentQuantity={currentQuantity}
          isInCart={isInCart}
          onPrimaryAction={handlePrimaryAction}
          onIncrease={handleIncrease}
          onDecrease={handleDecrease}
        />

        <ProductInfoGrid />

        <section className="mt-8 grid items-stretch gap-6 xl:grid-cols-[1fr_0.9fr]">
          <ProductDetails
            product={product}
            rating={rating}
            reviewCount={reviewCount}
          />
          <RelatedProducts products={relatedProducts} reviews={reviews} />
        </section>
      </div>
    </div>
  );
}
