import { Link } from "react-router-dom";
import type { Product } from "@/shared/types/product";

type Props = {
  products: Product[];
};

export const RelatedProducts = ({ products }: Props) => {
  return (
    <div className="flex h-full flex-col rounded-[2rem] border border-white/70 bg-white/90 p-6 shadow-[0_20px_80px_-45px_rgba(15,23,42,0.45)] backdrop-blur">
      <div className="flex items-center justify-between gap-3">
        <h2 className="text-2xl font-bold text-slate-950">Похожие товары</h2>
        <Link to="/" className="text-sm font-semibold text-sky-600 hover:text-sky-700">
          Весь каталог
        </Link>
      </div>

      {products.length > 0 ? (
        <div className="mt-5 grid flex-1 auto-rows-fr gap-4 sm:grid-cols-2">
          {products.map((item, index) => (
            <Link
              key={item.id}
              to={`/product/${item.id}`}
              className={`group rounded-[1.5rem] border border-slate-200 bg-slate-50 p-4 transition hover:-translate-y-0.5 hover:border-slate-300 hover:bg-white ${
                products.length % 2 !== 0 && index === products.length - 1
                  ? "sm:col-span-2"
                  : ""
              }`}
            >
              <div className="flex h-full items-start gap-4">
                <div className="flex h-24 w-24 flex-shrink-0 items-center justify-center rounded-2xl bg-white p-3 shadow-sm">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-contain"
                  />
                </div>
                <div className="min-w-0">
                  <p className="line-clamp-2 font-semibold text-slate-900 group-hover:text-sky-700">
                    {item.title}
                  </p>
                  <p className="mt-2 text-sm capitalize text-slate-500">
                    {item.category}
                  </p>
                  <p className="mt-3 text-lg font-bold text-slate-950">
                    ${item.price.toFixed(2)}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="mt-5 rounded-[1.5rem] border border-dashed border-slate-200 bg-slate-50 p-6 text-sm text-slate-500">
          Для этого товара пока нет похожих предложений, но в каталоге уже есть
          другие интересные позиции.
        </div>
      )}
    </div>
  );
};
