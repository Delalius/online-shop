import { Minus, Plus, Sparkles, Star } from "lucide-react";
import type { Product } from "@/shared/types/product";
import type { ProductBenefit } from "@/pages/Product/model";

type Props = {
  product: Product;
  benefits: ProductBenefit[];
  productCode: string;
  rating: number;
  reviewCount: number;
  currentQuantity: number;
  isInCart: boolean;
  onPrimaryAction: () => void;
  onIncrease: () => void;
  onDecrease: () => void;
};

export const ProductHero = ({
  product,
  benefits,
  productCode,
  rating,
  reviewCount,
  currentQuantity,
  isInCart,
  onPrimaryAction,
  onIncrease,
  onDecrease,
}: Props) => {
  return (
    <section className="overflow-hidden rounded-[2rem] border border-stone-200 bg-white/90 shadow-[0_20px_80px_-45px_rgba(28,25,23,0.45)] backdrop-blur">
      <div className="grid gap-8 p-5 sm:p-8 xl:grid-cols-[minmax(0,1.15fr)_minmax(520px,0.85fr)] xl:items-start">
        <div className="rounded-[1.75rem] bg-[linear-gradient(145deg,#fbf7f2_0%,#ffffff_52%,#eef6f0_100%)] p-6 sm:p-8">
          <div className="mb-5 flex items-center justify-between gap-3">
            <span className="rounded-full bg-white/85 px-4 py-1.5 text-sm font-semibold text-amber-800 shadow-sm">
              {product.brand}
            </span>
            <span className="rounded-full border border-stone-200 bg-white px-4 py-1.5 text-sm text-stone-500">
              {productCode}
            </span>
          </div>

          <div className="flex min-h-[360px] items-center justify-center rounded-[1.5rem] bg-white/80 p-6 shadow-inner sm:min-h-[520px]">
            <img
              src={product.image}
              alt={product.title}
              className="h-80 w-full object-contain transition duration-500 hover:scale-[1.04] sm:h-[28rem] xl:h-[34rem]"
            />
          </div>

          <div className="mt-5 grid gap-3 md:grid-cols-3">
            {benefits.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="rounded-2xl border border-stone-200 bg-white/80 p-4"
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-800">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-sm font-semibold text-stone-950">{title}</h3>
                <p className="mt-1 text-sm leading-5 text-stone-500">{description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col justify-between gap-6">
          <div>
            <div className="mb-4 flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-1 rounded-full bg-amber-50 px-3 py-1.5 text-sm font-semibold text-amber-600">
                <Star className="h-4 w-4 fill-current" />
                {rating.toFixed(1)}
              </div>
              <span className="text-sm text-stone-500">{reviewCount} reviews</span>
              <span className="rounded-full bg-emerald-50 px-3 py-1.5 text-sm font-semibold text-emerald-700">
                In stock
              </span>
            </div>

            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-800">
              {product.collection}
            </p>
            <h1 className="mt-3 text-3xl font-bold tracking-tight text-stone-950 sm:text-4xl xl:text-5xl">
              {product.title}
            </h1>

            <p className="mt-4 max-w-3xl text-base leading-7 text-stone-600 xl:text-lg">
              {product.description}
            </p>
          </div>

          <div className="rounded-[1.75rem] border border-stone-200 bg-stone-50/80 p-5 xl:p-6">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="text-sm text-stone-500">Bottle price</p>
                <p className="mt-1 text-4xl font-bold tracking-tight text-stone-950 xl:text-5xl">
                  ${product.price.toFixed(2)}
                </p>
              </div>
              <div className="inline-flex items-center gap-2 rounded-2xl bg-white px-4 py-3 text-sm text-stone-500 shadow-sm">
                <Sparkles className="h-4 w-4 text-amber-700" />
                {product.concentration}, {product.volumeMl} ml
              </div>
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl bg-white p-4 shadow-sm">
                <p className="text-sm text-stone-500">Family</p>
                <p className="mt-1 font-semibold capitalize text-stone-950">
                  {product.category}
                </p>
              </div>
              <div className="rounded-2xl bg-white p-4 shadow-sm">
                <p className="text-sm text-stone-500">Mood</p>
                <p className="mt-1 font-semibold text-stone-950">{product.mood}</p>
              </div>
              <div className="rounded-2xl bg-white p-4 shadow-sm">
                <p className="text-sm text-stone-500">In cart</p>
                <p className="mt-1 font-semibold text-stone-950">
                  {currentQuantity > 0 ? `${currentQuantity} pcs.` : "Not yet"}
                </p>
              </div>
            </div>

            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <button
                  onClick={onPrimaryAction}
                  className={`inline-flex min-h-12 flex-1 items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold text-white transition ${
                    isInCart
                    ? "bg-emerald-700 hover:bg-emerald-800"
                    : "bg-stone-950 hover:bg-amber-800"
                }`}
              >
                {isInCart ? "Go to cart" : "Add to cart"}
              </button>

              <div className="flex items-center justify-between rounded-2xl border border-stone-200 bg-white px-3 py-2 sm:min-w-[180px]">
                <button
                  onClick={onDecrease}
                  className="flex h-10 w-10 items-center justify-center rounded-xl text-stone-500 transition hover:bg-stone-100 hover:text-stone-950 disabled:cursor-not-allowed disabled:opacity-40"
                  disabled={currentQuantity === 0}
                  aria-label="Decrease quantity"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <div className="text-center">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                    Qty
                  </p>
                  <p className="text-lg font-semibold text-stone-950">
                    {currentQuantity}
                  </p>
                </div>
                <button
                  onClick={onIncrease}
                  className="flex h-10 w-10 items-center justify-center rounded-xl text-stone-500 transition hover:bg-stone-100 hover:text-stone-950"
                  aria-label="Increase quantity"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
