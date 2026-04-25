import type { Product } from "@/shared/types/product";

type Props = {
  product: Product;
  rating: number;
  reviewCount: number;
};

export const ProductDetails = ({
  product,
  rating,
  reviewCount,
}: Props) => {
  return (
    <div className="flex h-full flex-col rounded-[2rem] border border-stone-200 bg-white/90 p-6 shadow-[0_20px_80px_-45px_rgba(28,25,23,0.45)] backdrop-blur">
      <h2 className="text-2xl font-bold text-stone-950">Fragrance pyramid</h2>
      <p className="mt-4 max-w-3xl text-base leading-7 text-stone-600">
        {product.description}
      </p>

      <div className="mt-6 grid flex-1 auto-rows-fr gap-3 sm:grid-cols-2">
        <div className="h-full rounded-2xl border border-stone-200 bg-stone-50 p-4">
          <p className="text-sm text-stone-500">Top notes</p>
          <p className="mt-1 font-semibold text-stone-950">
            {product.notes.top.join(", ")}
          </p>
        </div>
        <div className="h-full rounded-2xl border border-stone-200 bg-stone-50 p-4">
          <p className="text-sm text-stone-500">Heart</p>
          <p className="mt-1 font-semibold text-stone-950">
            {product.notes.heart.join(", ")}
          </p>
        </div>
        <div className="h-full rounded-2xl border border-stone-200 bg-stone-50 p-4">
          <p className="text-sm text-stone-500">Base</p>
          <p className="mt-1 font-semibold text-stone-950">
            {product.notes.base.join(", ")}
          </p>
        </div>
        <div className="h-full rounded-2xl border border-stone-200 bg-stone-50 p-4">
          <p className="text-sm text-stone-500">Customer rating</p>
          <p className="mt-1 font-semibold text-stone-950">
            {rating.toFixed(1)} out of 5 based on {reviewCount} reviews
          </p>
        </div>
      </div>
    </div>
  );
};
