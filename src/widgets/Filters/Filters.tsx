type Props = {
  search: string
  setSearch: (v: string) => void
  category: string
  setCategory: (v: string) => void
  sort: string
  setSort: (v: string) => void
  categories: string[]
}

export const Filters = ({
  search,
  setSearch,
  category,
  setCategory,
  sort,
  setSort,
  categories,
}: Props) => {
  return (
    <div className="flex flex-col md:flex-row gap-3 mb-6">
      
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Поиск..."
        className="border px-3 py-2 rounded-lg w-full md:w-1/3"
      />

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="border px-3 py-2 rounded-lg"
      >
        <option value="all">Все категории</option>
        {categories.map(cat => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>

      <select
        value={sort}
        onChange={(e) => setSort(e.target.value)}
        className="border px-3 py-2 rounded-lg"
      >
        <option value="default">По умолчанию</option>
        <option value="price-asc">Цена ↑</option>
        <option value="price-desc">Цена ↓</option>
      </select>
    </div>
  )
}