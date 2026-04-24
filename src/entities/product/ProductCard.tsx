import { ShoppingCart, Plus } from "lucide-react";
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
        title: product.title,
        price: product.price,
        image: product.image,
      });
    }
  };

  return (
    <Link to={`/product/${product.id}`} className="block">
      <div className="bg-white rounded-xl sm:rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group">
        <div className="relative overflow-hidden aspect-square bg-gradient-to-br from-slate-100 to-slate-200">
          <div className="relative overflow-hidden aspect-square bg-white p-3">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          {product.category && (
            <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-slate-700 px-2.5 py-1 rounded-lg text-xs font-semibold shadow-sm">
              {product.category}
            </span>
          )}
        </div>

        <div className="p-4 sm:p-5">
          <h3 className="font-semibold text-slate-800 text-base sm:text-lg mb-1.5 line-clamp-1">
            {product.title}
          </h3>

          {product.description && (
            <p className="text-slate-500 text-xs sm:text-sm mb-3 line-clamp-2">
              {product.description}
            </p>
          )}

          <div className="flex items-center justify-between gap-3 mt-4">
            <p className="text-lg sm:text-xl font-semibold text-blue-600">
              ${product.price.toFixed(2)}
            </p>

            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                handleClick();
              }}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-lg font-medium text-sm transition-all shadow-md hover:shadow-lg group/button
    ${
      isInCart
        ? "bg-green-600 hover:bg-green-700 active:bg-green-800"
        : "bg-blue-600 hover:bg-blue-700 active:bg-blue-800"
    }
    text-white
  `}
            >
              {isInCart ? (
                <>
                  <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="hidden sm:inline">В корзине</span>
                </>
              ) : (
                <>
                  <Plus className="w-4 h-4 sm:w-5 sm:h-5 group-hover/button:rotate-90 transition-transform" />
                  <span className="hidden sm:inline">В корзину</span>
                  <ShoppingCart className="w-4 h-4 sm:hidden" />
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};
