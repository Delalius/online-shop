import { Link } from 'react-router-dom';
import { ShoppingCart, SprayCan } from 'lucide-react';
import { useCartStore } from '@/features/cart/store';

export const Header = () => {
  const count = useCartStore((state) => state.getItemsCount());

  return (
    <header className="sticky top-0 z-50 border-b border-stone-200 bg-white/85 shadow-sm backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
        <div className="flex items-center justify-between h-14 sm:h-16">
          <Link
            to="/"
            className="group flex items-center gap-2 text-stone-900 transition-colors hover:text-amber-800 sm:gap-2.5"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-stone-950 shadow-md transition-shadow group-hover:shadow-lg sm:h-10 sm:w-10 sm:rounded-xl">
              <SprayCan className="h-4 w-4 text-amber-200 sm:h-5 sm:w-5" />
            </div>
            <span className="hidden text-lg font-bold sm:inline sm:text-xl">
              Maison Éclat
            </span>
          </Link>

          <nav className="flex items-center gap-3 sm:gap-6">
            <Link
              to="/"
              className="text-sm font-medium text-stone-600 transition-colors hover:text-stone-950 sm:text-base"
            >
              Collection
            </Link>

            <Link
              to="/cart"
              className="relative flex items-center gap-1.5 rounded-lg bg-stone-950 px-3 py-2 text-sm font-semibold text-white shadow-md transition-all hover:bg-amber-800 hover:shadow-lg sm:gap-2 sm:rounded-xl sm:px-4 sm:py-2.5 sm:text-base"
            >
              <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="hidden sm:inline">Cart</span>
              {count > 0 && (
                <span className="absolute -right-1.5 -top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-rose-700 text-xs font-bold text-white shadow-lg sm:-right-2 sm:-top-2 sm:h-6 sm:w-6">
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
