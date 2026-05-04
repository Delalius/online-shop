import { ArrowLeft, Home, SearchX, ShoppingBag } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <main className="flex min-h-screen items-center justify-center bg-[linear-gradient(180deg,#fbf7f2_0%,#ffffff_52%,#eef6f0_100%)] px-4 py-10 sm:px-6">
      <section className="mx-auto grid w-full max-w-5xl items-center gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="relative mx-auto flex aspect-square w-full max-w-sm items-center justify-center overflow-hidden rounded-[2rem] border border-stone-200 bg-white shadow-[0_24px_80px_-45px_rgba(28,25,23,0.5)]">
          <div className="absolute inset-x-0 top-0 h-32 bg-[linear-gradient(135deg,#f7d9aa_0%,#f3c7b6_48%,#efe6d8_100%)] opacity-60" />
          <div className="relative flex h-36 w-36 items-center justify-center rounded-[2rem] bg-stone-950 text-amber-200 shadow-xl">
            <SearchX className="h-16 w-16" aria-hidden="true" />
          </div>
        </div>

        <div className="text-center lg:text-left">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-800">
            404 / Page not found
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-stone-950 sm:text-5xl">
            This shelf is empty
          </h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-stone-600 lg:text-lg">
            The page may have moved, or the link no longer belongs to the
            Maison Eclat collection.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <Link
              to="/"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-stone-950 px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-amber-800"
            >
              <Home className="h-4 w-4" aria-hidden="true" />
              Collection
            </Link>
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl border border-stone-200 bg-white px-5 py-3 text-sm font-semibold text-stone-700 shadow-sm transition hover:border-stone-300 hover:text-stone-950"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              Go back
            </button>
          </div>

          <div className="mt-8 inline-flex items-center gap-2 rounded-full bg-white/85 px-4 py-2 text-sm font-medium text-stone-500 shadow-sm">
            <ShoppingBag className="h-4 w-4 text-amber-800" aria-hidden="true" />
            Browse perfumes, shampoos, and boutique care formulas.
          </div>
        </div>
      </section>
    </main>
  );
};

export default NotFoundPage;
