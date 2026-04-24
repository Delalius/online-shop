import { Link } from 'react-router-dom';
import { ShoppingCart, Store } from 'lucide-react';
import { useCartStore } from '@/features/cart/store';

export const Header = () => {
  const count = useCartStore((state) => state.getItemsCount());

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
        <div className="flex items-center justify-between h-14 sm:h-16">
          <Link
            to="/"
            className="flex items-center gap-2 sm:gap-2.5 text-slate-800 hover:text-blue-600 transition-colors group"
          >
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg sm:rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
              <Store className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </div>
            <span className="font-bold text-lg sm:text-xl hidden xs:inline">Магазин</span>
          </Link>

          <nav className="flex items-center gap-3 sm:gap-6">
            <Link
              to="/"
              className="text-slate-600 hover:text-slate-900 font-medium text-sm sm:text-base transition-colors"
            >
              Каталог
            </Link>

            <Link
              to="/cart"
              className="flex items-center gap-1.5 sm:gap-2 bg-blue-600 hover:bg-blue-700 text-white px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg sm:rounded-xl font-semibold text-sm sm:text-base transition-all shadow-md hover:shadow-lg relative"
            >
              <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="hidden sm:inline">Корзина</span>
              {count > 0 && (
                <span className="absolute -top-1.5 -right-1.5 sm:-top-2 sm:-right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center shadow-lg animate-pulse">
                  {count}
                </span>
              )}
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};
