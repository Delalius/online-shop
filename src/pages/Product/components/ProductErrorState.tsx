import { Store } from "lucide-react";
import { Link } from "react-router-dom";

type Props = {
  error: string;
};

export const ProductErrorState = ({ error }: Props) => {
  return (
    <div className="px-4 py-12 sm:px-6">
      <div className="mx-auto max-w-3xl rounded-[2rem] border border-rose-100 bg-white p-8 text-center shadow-sm">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-rose-50 text-rose-500">
          <Store className="h-6 w-6" />
        </div>
        <h1 className="text-2xl font-bold text-slate-900">Товар недоступен</h1>
        <p className="mt-3 text-slate-600">{error}</p>
        <Link
          to="/"
          className="mt-6 inline-flex rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
        >
          Вернуться в каталог
        </Link>
      </div>
    </div>
  );
};
