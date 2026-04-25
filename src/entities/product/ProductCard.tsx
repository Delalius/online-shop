import { ShoppingCart, Plus, Star } from "lucide-react";
import type { Product } from "@/shared/types/product";
import { useCartStore } from "@/features/cart/store";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

type Props = {
  product: Product;
};

export const ProductCard = ({ product }: Props) => {
  const addToCart = useCartStore((state) => state.addToCart);
  const items = useCartStore((state) => state.items);
  const navigate = useNavigate();

  const isInCart = items.some((item) => item.id === product.id);

  const handleClick = () => {
    if (isInCart) {
      navigate("/cart");
    } else {
      addToCart({
        id: product.id,
        brand: product.brand,
        title: product.title,
        price: product.price,
        image: product.image,
        concentration: product.concentration,
        volumeMl: product.volumeMl,
      });
    }
  };

  return (
    <Link to={`/product/${product.id}`} className="block">
      <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-stone-300 hover:shadow-xl">
        <div className="relative overflow-hidden bg-[linear-gradient(145deg,#fbf7f2_0%,#ffffff_55%,#eef6f0_100%)] p-4">
          <div className="absolute left-4 top-4 z-10 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-stone-700 shadow-sm">
            {product.brand}
          </div>
          <div className="absolute right-4 top-4 z-10 flex items-center gap-1 rounded-full bg-stone-950 px-3 py-1 text-xs font-semibold text-white">
            <Star className="h-3.5 w-3.5 fill-amber-300 text-amber-300" />
            {product.rating?.rate.toFixed(1)}
          </div>
          <div className="relative mt-7 flex aspect-[4/4.2] items-center justify-center">
            <img
              src={product.image}
              alt={product.title}
              className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </div>

        <div className="flex flex-1 flex-col p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">
            {product.collection}
          </p>
          <h3 className="mt-2 line-clamp-1 text-xl font-semibold text-stone-950">
            {product.title}
          </h3>

          <p className="mt-2 line-clamp-2 text-sm leading-6 text-stone-500">
            {product.description}
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {product.accords.slice(0, 3).map((accord) => (
              <span
                key={accord}
                className="rounded-full bg-stone-100 px-3 py-1 text-xs font-medium text-stone-700"
              >
                {accord}
              </span>
            ))}
          </div>

          <div className="mt-auto flex items-end justify-between gap-3 pt-5">
            <div>
              <p className="text-xs text-stone-500">
                {product.concentration}, {product.volumeMl} ml
              </p>
              <p className="mt-1 text-2xl font-semibold text-stone-950">
              ${product.price.toFixed(2)}
              </p>
            </div>

            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                handleClick();
              }}
              className={`flex min-h-11 items-center gap-1.5 rounded-xl px-3 py-2 text-sm font-semibold text-white shadow-sm transition group/button
    ${
      isInCart
        ? "bg-emerald-700 hover:bg-emerald-800"
        : "bg-stone-950 hover:bg-amber-800"
    }
  `}
            >
              {isInCart ? (
                <>
                  <ShoppingCart className="h-4 w-4" />
                  <span className="hidden sm:inline">In cart</span>
                </>
              ) : (
                <>
                  <Plus className="h-4 w-4 transition-transform group-hover/button:rotate-90" />
                  <span className="hidden sm:inline">Add to cart</span>
                  <ShoppingCart className="h-4 w-4 sm:hidden" />
                </>
              )}
            </button>
          </div>
        </div>
      </article>
    </Link>
  );
};
