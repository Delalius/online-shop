import { Sparkles } from "lucide-react";
import type { CSSProperties } from "react";
import heroBackgroundUrl from "@/assets/hero1.jpg";
import boutiqueStillLifeUrl from "@/assets/hero2.jpg";
import ritualStillLifeUrl from "@/assets/hero3.jpg";
import hairCareTextureUrl from "@/assets/hair1.jpg";
import hairRitualDetailUrl from "@/assets/hair2.jpg";
import hairCareEditorialUrl from "@/assets/hair3.jpg";
import perfumeEditorialUrl from "@/assets/perfume.jpg";
import { ProductList } from "@/widgets/ProductList/ProductList";
import { boutiqueStats, perfumeProducts } from "@/shared/data/perfumes";

const heroBackgroundImage = heroBackgroundUrl;
const heroBackgroundPosition = "center right";

const brandNotes = [
  {
    title: "What",
    eyebrow: "The edit",
    imageAlt: "Perfume bottle arranged in a minimal boutique still life",
    description:
      "A focused edit of fragrances and hair-care formulas chosen for texture, mood, and everyday pleasure.",
    detail:
      "Perfume for atmosphere, shampoo for daily care, and packaging that makes the whole order feel intentional from the first glance.",
  },
  {
    title: "Where",
    eyebrow: "The place",
    imageAlt: "Warm product still life with water droplets",
    description:
      "Curated like a small European boutique: quiet shelves, tactile packaging, and products that feel considered at home.",
    detail:
      "The visual world is warm stone, clear glass, soft water, and clean shelf space - a calm setting for formulas with character.",
  },
  {
    title: "How",
    eyebrow: "The ritual",
    imageAlt:
      "Generated boutique shampoo bottles from the Maison Eclat care edit",
    description:
      "Each formula is described through notes, care profile, finish, and ritual so choosing feels calm instead of crowded.",
    detail:
      "The catalogue keeps the same language across scent and care: notes, mood, family, finish, and the feeling it leaves behind.",
  },
];

const hairStoryImages = [
  {
    src: hairCareTextureUrl,
    alt: "Soft highlighted hair used as an editorial care texture",
  },
  {
    src: hairRitualDetailUrl,
    alt: "Close hair-care editorial detail with glossy strands",
  },
];

const ritualStoryImages = [
  {
    src: hairCareEditorialUrl,
    alt: "Editorial hair-care composition with glossy hair texture",
  },
  {
    src: perfumeEditorialUrl,
    alt: "Perfume bottle arranged in a polished editorial still life",
  },
];

const Home = () => {
  const featuredPerfumes = [
    perfumeProducts[1],
    perfumeProducts[0],
    perfumeProducts[5],
  ];
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
            className="relative isolate flex min-h-150 overflow-hidden rounded-4xl bg-stone-950 p-6 text-white shadow-[0_24px_90px_-55px_rgba(28,25,23,0.75)] sm:p-10 lg:min-h-160"
            style={heroStyle}
          >
            <div className="absolute inset-0 -z-10 bg-black/15" />
            <div className="flex w-full max-w-5xl flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/15 px-4 py-2 text-sm text-stone-100 shadow-sm backdrop-blur-md">
                  <Sparkles className="h-4 w-4 text-amber-300" />
                  Online selective boutique
                </div>
                <h1 className="mt-8 max-w-5xl text-4xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
                  Selective perfumes and hair care with Parisian elegance
                </h1>
                <p className="mt-6 max-w-3xl text-base leading-7 text-stone-200 sm:text-lg">
                  Discover authentic luxury fragrances, extrait de parfum, and
                  elevated shampoos with expressive notes, polished formulas,
                  and boutique-level detail.
                </p>
              </div>

              <div className="mt-10 grid gap-3 sm:grid-cols-3">
                {boutiqueStats.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-md"
                  >
                    <p className="text-3xl font-semibold text-amber-200">
                      {item.value}
                    </p>
                    <p className="mt-1 text-sm text-stone-300">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative min-h-130 overflow-hidden rounded-4xl border border-stone-200 bg-white p-6 shadow-sm">
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
                    className={`flex items-end rounded-3xl bg-stone-50 p-2 shadow-[0_24px_60px_-35px_rgba(28,25,23,0.35)] ${
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
                Choose your formula
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-6 text-stone-500">
              Every product is described through mood, family, and notes, so the
              shopping experience feels closer to a private boutique
              consultation.
            </p>
          </div>
          <ProductList />
        </div>
      </section>

      <section className="bg-stone-950 text-white">
        <div className="h-screen overflow-y-auto scroll-smooth snap-y snap-mandatory">
          {brandNotes.map((item, index) => (
            <article
              key={item.title}
              className="brand-story-section grid min-h-screen snap-start snap-always items-center gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:py-14"
            >
              <div className="brand-story-copy mx-auto flex w-full max-w-xl flex-col justify-between gap-8 lg:min-h-[70vh]">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-200">
                    Maison Eclat / {item.eyebrow}
                  </p>
                  <h2 className="mt-3 text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
                    {item.title}
                  </h2>
                  <p className="mt-6 text-xl leading-8 text-stone-200">
                    {item.description}
                  </p>
                  <p className="mt-5 max-w-lg text-base leading-7 text-stone-400">
                    {item.detail}
                  </p>
                </div>

                <div className="flex items-center gap-3 text-sm text-stone-400">
                  <span className="h-px w-16 bg-amber-200" />
                  <span>
                    {String(index + 1).padStart(2, "0")} / {brandNotes.length}
                  </span>
                </div>
              </div>

              <div className="brand-story-media mx-auto grid h-[52vh] w-full max-w-4xl gap-4 sm:h-[62vh] sm:grid-cols-[0.92fr_1.08fr] lg:h-[78vh]">
                {index === 0 && (
                  <>
                    <figure className="brand-story-photo relative overflow-hidden rounded-3xl sm:row-span-2">
                      <img
                        src={boutiqueStillLifeUrl}
                        alt={item.imageAlt}
                        className="h-full w-full object-cover"
                      />
                    </figure>
                    {hairStoryImages.map((image) => (
                      <figure
                        key={image.src}
                        className="brand-story-photo hidden overflow-hidden rounded-3xl sm:block"
                      >
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="h-full w-full object-cover"
                        />
                      </figure>
                    ))}
                  </>
                )}

                {index === 1 && (
                  <>
                    <figure className="brand-story-photo relative overflow-hidden rounded-3xl sm:col-span-2">
                      <img
                        src={ritualStillLifeUrl}
                        alt={item.imageAlt}
                        className="h-full w-full object-cover"
                      />
                    </figure>
                    <div className="brand-story-note hidden rounded-3xl border border-white/10 bg-white/5 p-5 sm:block">
                      <p className="text-sm uppercase tracking-[0.22em] text-amber-200">
                        Paris mood
                      </p>
                      <p className="mt-4 text-sm leading-6 text-stone-300">
                        Clean glass, quiet stone, warm water, and formulas that
                        keep their place in the room.
                      </p>
                    </div>
                    <div className="brand-story-note hidden rounded-3xl border border-white/10 bg-white/5 p-5 sm:block">
                      <p className="text-sm uppercase tracking-[0.22em] text-amber-200">
                        Shelf logic
                      </p>
                      <p className="mt-4 text-sm leading-6 text-stone-300">
                        A small edit instead of endless rows, with each item
                        chosen to earn its space.
                      </p>
                    </div>
                  </>
                )}

                {index === 2 && (
                  <>
                    <div className="grid grid-cols-2 gap-4 sm:col-span-2">
                      {ritualStoryImages.map((image) => (
                        <figure
                          key={image.src}
                          className="brand-story-photo overflow-hidden rounded-3xl"
                        >
                          <img
                            src={image.src}
                            alt={image.alt}
                            className="h-full w-full object-cover"
                          />
                        </figure>
                      ))}
                    </div>
                    <div className="brand-story-note hidden rounded-3xl border border-white/10 bg-white/5 p-5 sm:block">
                      <p className="text-sm uppercase tracking-[0.22em] text-amber-200">
                        Notes
                      </p>
                      <p className="mt-4 text-sm leading-6 text-stone-300">
                        Every formula carries a clear opening, core, and finish.
                      </p>
                    </div>
                    <div className="brand-story-note hidden rounded-3xl border border-white/10 bg-white/5 p-5 sm:block">
                      <p className="text-sm uppercase tracking-[0.22em] text-amber-200">
                        Care
                      </p>
                      <p className="mt-4 text-sm leading-6 text-stone-300">
                        Shampoo pages translate scent language into useful daily
                        care details.
                      </p>
                    </div>
                  </>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Home;
