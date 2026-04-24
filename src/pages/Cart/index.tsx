import { ShoppingCart, Trash2, Plus, Minus } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useCartStore } from "@/features/cart/store";

const Cart = () => {
  const items = useCartStore((state) => state.items);
  const getTotal = useCartStore((state) => state.getTotal);
  const increase = useCartStore((state) => state.increase);
  const decrease = useCartStore((state) => state.decrease);
  const setQuantity = useCartStore((state) => state.setQuantity);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const navigate = useNavigate();

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-4">
        <div className="text-center">
          <ShoppingCart className="w-16 h-16 sm:w-24 sm:h-24 mx-auto text-slate-300 mb-4" />
          <h2 className="text-xl sm:text-2xl text-slate-600">Корзина пуста</h2>
          <p className="text-sm sm:text-base text-slate-400 mt-2">
            Добавьте товары для начала покупок
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-4 sm:py-8 px-3 sm:px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-8">
          <ShoppingCart className="w-6 h-6 sm:w-8 sm:h-8 text-slate-700" />
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-800">
            Корзина
          </h1>
          <span className="ml-auto bg-blue-600 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm">
            {items.length} {items.length === 1 ? "товар" : "товара"}
          </span>
        </div>

        <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
          {items.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl sm:rounded-2xl shadow-sm hover:shadow-md transition-shadow p-4 sm:p-6"
            >
              <div className="flex gap-3 sm:gap-6 items-start sm:items-center">
                <div className="relative flex-shrink-0 bg-white p-2 rounded-lg sm:rounded-xl">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-20 h-20 sm:w-24 sm:h-24 object-contain"
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-slate-800 text-base sm:text-lg mb-1 truncate">
                    {item.title}
                  </h3>
                  <p className="text-xl sm:text-2xl font-bold text-blue-600">
                    ${item.price.toFixed(2)}
                  </p>

                  <div className="mt-3 sm:hidden flex items-center justify-between">
                    <div className="flex items-center gap-2 bg-slate-50 rounded-lg px-1.5 py-1.5">
                      <button
                        onClick={() => decrease(item.id)}
                        className="w-7 h-7 flex items-center justify-center bg-white hover:bg-slate-100 text-slate-600 rounded-md transition-colors shadow-sm"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <input
                        type="number"
                        min="1"
                        value={item.quantity}
                        onChange={(event) =>
                          setQuantity(item.id, Number(event.target.value))
                        }
                        className="w-10 bg-transparent text-center font-semibold text-slate-700 text-sm outline-none"
                        aria-label="Quantity"
                      />
                      <button
                        onClick={() => increase(item.id)}
                        className="w-7 h-7 flex items-center justify-center bg-white hover:bg-slate-100 text-slate-600 rounded-md transition-colors shadow-sm"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <div className="text-right">
                      <p className="text-xs text-slate-500">Сумма</p>
                      <p className="text-lg font-bold text-slate-800">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="hidden sm:flex items-center gap-3 bg-slate-50 rounded-xl px-2 py-2">
                  <button
                    onClick={() => decrease(item.id)}
                    className="w-8 h-8 flex items-center justify-center bg-white hover:bg-slate-100 text-slate-600 rounded-lg transition-colors shadow-sm"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(event) =>
                      setQuantity(item.id, Number(event.target.value))
                    }
                    className="w-12 bg-transparent text-center font-semibold text-slate-700 outline-none"
                    aria-label="Quantity"
                  />
                  <button
                    onClick={() => increase(item.id)}
                    className="w-8 h-8 flex items-center justify-center bg-white hover:bg-slate-100 text-slate-600 rounded-lg transition-colors shadow-sm"
                    aria-label="Increase quantity"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>

                <div className="hidden sm:block text-right min-w-[100px]">
                  <p className="text-sm text-slate-500 mb-1">Сумма</p>
                  <p className="text-xl font-bold text-slate-800">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center hover:bg-red-50 text-red-500 rounded-lg transition-colors"
                  aria-label="Remove item"
                >
                  <Trash2 className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 sticky bottom-2 sm:bottom-4">
          <div className="flex items-center justify-between mb-3 sm:mb-4">
            <span className="text-slate-600 text-base sm:text-lg">Итого:</span>
            <span className="text-3xl sm:text-4xl font-bold text-slate-800">
              ${getTotal().toFixed(2)}
            </span>
          </div>
          <button
            onClick={() => navigate("/checkout")}
            className="w-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white py-3 sm:py-4 rounded-lg sm:rounded-xl font-semibold text-base sm:text-lg transition-colors shadow-lg hover:shadow-xl"
          >
            Оформить заказ
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
