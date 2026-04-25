type Props = {
  search: string
  setSearch: (v: string) => void
  brand: string
  setBrand: (v: string) => void
  category: string
  setCategory: (v: string) => void
  sort: string
  setSort: (v: string) => void
  brands: string[]
  categories: string[]
  resultCount: number
}

export const Filters = ({
  search,
  setSearch,
  brand,
  setBrand,
  category,
  setCategory,
  sort,
  setSort,
  brands,
  categories,
  resultCount,
}: Props) => {
  return (
    <div className="mb-8 rounded-2xl border border-stone-200 bg-white/90 p-4 shadow-sm">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-700">
            Perfume shelf
          </p>
          <p className="mt-1 text-sm text-stone-500">
            Fragrances found: {resultCount}
          </p>
        </div>
        <button
          type="button"
          onClick={() => {
            setSearch("")
            setBrand("all")
            setCategory("all")
            setSort("default")
          }}
          className="rounded-full border border-stone-200 px-4 py-2 text-sm font-semibold text-stone-700 transition hover:border-stone-900 hover:text-stone-950"
        >
          Reset
        </button>
      </div>

      <div className="grid gap-3 md:grid-cols-[minmax(220px,1.2fr)_1fr_1fr_1fr]">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by note, house, or fragrance"
          className="min-h-12 rounded-xl border border-stone-200 bg-stone-50 px-4 text-sm outline-none transition focus:border-amber-700 focus:bg-white"
        />

        <select
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
          className="min-h-12 rounded-xl border border-stone-200 bg-stone-50 px-4 text-sm capitalize outline-none transition focus:border-amber-700 focus:bg-white"
        >
          <option value="all">All brands</option>
          {brands.map(item => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="min-h-12 rounded-xl border border-stone-200 bg-stone-50 px-4 text-sm capitalize outline-none transition focus:border-amber-700 focus:bg-white"
        >
          <option value="all">All families</option>
          {categories.map(cat => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>

        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="min-h-12 rounded-xl border border-stone-200 bg-stone-50 px-4 text-sm outline-none transition focus:border-amber-700 focus:bg-white"
        >
          <option value="default">Recommended</option>
          <option value="price-asc">Price: low to high</option>
          <option value="price-desc">Price: high to low</option>
          <option value="rating-desc">Rating</option>
          <option value="title-asc">Name A-Z</option>
        </select>
      </div>
    </div>
  )
}
