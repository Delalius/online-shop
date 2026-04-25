import { Sparkles } from "lucide-react";
import type { CSSProperties } from "react";
import heroBackgroundUrl from "@/assets/hero1.jpg";
import { ProductList } from "@/widgets/ProductList/ProductList";
import { boutiqueStats, perfumeProducts } from "@/shared/data/perfumes";

const heroBackgroundImage = heroBackgroundUrl;
const heroBackgroundPosition = "center right";

const Home = () => {
  const featuredPerfumes = [perfumeProducts[1], perfumeProducts[0], perfumeProducts[5]];
  const heroStyle = {
    backgroundImage: [
      "linear-gradient(90deg, rgba(8,8,7,0.78) 0%, rgba(8,8,7,0.66) 48%, rgba(8,8,7,0.34) 100%)",
      heroBackgroundImage
        ? `url(${heroBackgroundImage})`
        : "linear-gradient(135deg, #080807 0%, #1c1917 55%, #3f2f1f 100%)",
    ].join(", "),
    backgroundPosition: heroBackgroundPosition,
    backgroundSize: "cover",
  } satisfies CSSProperties;

  return (
    <main className="bg-[linear-gradient(180deg,#fbf7f2_0%,#ffffff_46%,#eef6f0_100%)]">
      <section className="px-4 py-8 sm:px-6 sm:py-12">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[minmax(0,1fr)_420px] lg:items-stretch">
          <div
            className="relative isolate flex min-h-[600px] overflow-hidden rounded-[2rem] bg-stone-950 p-6 text-white shadow-[0_24px_90px_-55px_rgba(28,25,23,0.75)] sm:p-10 lg:min-h-[640px]"
            style={heroStyle}
          >
            <div className="absolute inset-0 -z-10 bg-black/15" />
            <div className="flex w-full max-w-5xl flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/15 px-4 py-2 text-sm text-stone-100 shadow-sm backdrop-blur-md">
                  <Sparkles className="h-4 w-4 text-amber-300" />
                  Online selective perfumery
                </div>
                <h1 className="mt-8 max-w-5xl text-4xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
                  Niche perfumes and selective fragrances with Parisian elegance
                </h1>
                <p className="mt-6 max-w-3xl text-base leading-7 text-stone-200 sm:text-lg">
                  Discover authentic luxury perfume, eau de parfum, extrait de
                  parfum, unisex fragrances, oud, neroli, amber, and rare
                  compositions from independent perfume houses.
                </p>
              </div>

              <div className="mt-10 grid gap-3 sm:grid-cols-3">
                {boutiqueStats.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-md"
                  >
                    <p className="text-3xl font-semibold text-amber-200">{item.value}</p>
                    <p className="mt-1 text-sm text-stone-300">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative min-h-[520px] overflow-hidden rounded-[2rem] border border-stone-200 bg-white p-6 shadow-sm">
            <div className="absolute inset-x-0 top-0 h-40 bg-[linear-gradient(135deg,#f7d9aa_0%,#f3c7b6_48%,#efe6d8_100%)] opacity-45" />
            <div className="relative flex h-full flex-col justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-700">
                  Seasonal edit
                </p>
                <h2 className="mt-3 text-2xl font-semibold text-stone-950 sm:text-3xl">
                  Three moods of autumn
                </h2>
                <p className="mt-3 text-sm leading-6 text-stone-500">
                  Clean neroli, creamy fig, and dark oud - a polished set for
                  daytime, leisure, and evening.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-3 items-end gap-3">
                {featuredPerfumes.map((product, index) => (
                  <div
                    key={product.id}
                    className={`flex items-end rounded-[1.5rem] bg-stone-50 p-2 shadow-[0_24px_60px_-35px_rgba(28,25,23,0.35)] ${
                      index === 1 ? "h-72" : index === 0 ? "h-56" : "h-64"
                    }`}
                  >
                    <img
                      src={product.image}
                      alt={product.title}
                      className="h-full w-full object-contain"
                    />
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-2xl bg-stone-50 p-4 text-sm font-medium text-stone-700">
                Complimentary gift wrapping from $180.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-12 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-700">
                Collection
              </p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight text-stone-950">
                Choose your fragrance
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-6 text-stone-500">
              Every bottle is described through mood, family, and notes, so the
              shopping experience feels closer to a private boutique consultation.
            </p>
          </div>
        <ProductList />
      </div>
      </section>
    </main>
  );
}

export default Home;
