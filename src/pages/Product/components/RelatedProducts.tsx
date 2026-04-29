import { Star } from "lucide-react";
import { Link } from "react-router-dom";
import type { ProductReview } from "@/pages/Product/model";
import type { Product } from "@/shared/types/product";

type Props = {
  products: Product[];
  reviews: ProductReview[];
  productType: Product["productType"];
};

export const RelatedProducts = ({ products, reviews, productType }: Props) => {
  const isShampoo = productType === "shampoo";

  return (
    <div className="flex h-full flex-col rounded-[2rem] border border-stone-200 bg-white/90 p-6 shadow-[0_20px_80px_-45px_rgba(28,25,23,0.45)] backdrop-blur">
      <div className="flex items-center justify-between gap-3">
        <h2 className="text-2xl font-bold text-stone-950">
          {isShampoo ? "Related shampoos" : "Related fragrances"}
        </h2>
        <Link to="/" className="text-sm font-semibold text-amber-800 hover:text-stone-950">
          Full collection
        </Link>
      </div>

      {products.length > 0 ? (
        <div className="mt-5 grid auto-rows-fr gap-4 sm:grid-cols-2">
          {products.map((item, index) => (
            <Link
              key={item.id}
              to={`/product/${item.id}`}
              className={`group rounded-[1.5rem] border border-stone-200 bg-stone-50 p-4 transition hover:-translate-y-0.5 hover:border-stone-300 hover:bg-white ${
                products.length % 2 !== 0 && index === products.length - 1
                  ? "sm:col-span-2"
                  : ""
              }`}
            >
              <div className="flex h-full items-start gap-4">
                <div className="flex h-24 w-24 flex-shrink-0 items-center justify-center rounded-2xl bg-white p-2 shadow-sm">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-contain"
                  />
                </div>
                <div className="min-w-0">
                  <p className="line-clamp-2 font-semibold text-stone-950 group-hover:text-amber-800">
                    {item.title}
                  </p>
                  <p className="mt-2 text-sm text-stone-500">
                    {item.brand} - {item.category}
                  </p>
                  <p className="mt-3 text-lg font-bold text-stone-950">
                    ${item.price.toFixed(2)}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="mt-5 rounded-[1.5rem] border border-dashed border-stone-200 bg-stone-50 p-6 text-sm text-stone-500">
          There are no related {isShampoo ? "shampoos" : "fragrances"} for this
          family yet, but the collection includes other expressive formulas.
        </div>
      )}

      <div className="mt-6 border-t border-stone-200 pt-6">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-800">
              Reviews
            </p>
            <h3 className="mt-1 text-xl font-bold text-stone-950">
              What customers notice
            </h3>
          </div>
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-amber-50 text-amber-700">
            <Star className="h-5 w-5 fill-current" />
          </div>
        </div>

        <div className="mt-4 grid gap-3">
          {reviews.map((review) => (
            <article
              key={`${review.author}-${review.context}`}
              className="rounded-[1.25rem] border border-stone-200 bg-stone-50 p-4"
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <h4 className="font-semibold text-stone-950">{review.author}</h4>
                  <p className="text-sm text-stone-500">{review.context}</p>
                </div>
                <div
                  className="flex items-center gap-1 text-amber-500"
                  aria-label={`${review.rating.toFixed(1)} out of 5 stars`}
                >
                  {Array.from({ length: 5 }, (_, starIndex) => (
                    <Star
                      key={starIndex}
                      className={`h-4 w-4 ${
                        starIndex < Math.round(review.rating)
                          ? "fill-current"
                          : "text-stone-300"
                      }`}
                    />
                  ))}
                </div>
              </div>
              <p className="mt-3 text-sm leading-6 text-stone-600">
                {review.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};
