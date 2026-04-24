import { useMemo, useState } from 'react'
import type { Product } from '@/shared/types/product'

export const useFilters = (products: Product[]) => {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('all')
  const [sort, setSort] = useState('default')

  const filteredProducts = useMemo(() => {
    let result = [...products]

    if (search) {
      result = result.filter(p =>
        p.title.toLowerCase().includes(search.toLowerCase())
      )
    }

    if (category !== 'all') {
      result = result.filter(p => p.category === category)
    }

    if (sort === 'price-asc') {
      result.sort((a, b) => a.price - b.price)
    }

    if (sort === 'price-desc') {
      result.sort((a, b) => b.price - a.price)
    }

    return result
  }, [products, search, category, sort])

  return {
    search,
    setSearch,
    category,
    setCategory,
    sort,
    setSort,
    filteredProducts,
  }
}
