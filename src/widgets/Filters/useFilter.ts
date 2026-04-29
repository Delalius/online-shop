import { useMemo, useState } from 'react'
import type { Product, ProductType } from '@/shared/types/product'

export const useFilters = (products: Product[]) => {
  const [search, setSearch] = useState('')
  const [productType, setProductType] = useState<ProductType | 'all'>('all')
  const [brand, setBrand] = useState('all')
  const [category, setCategory] = useState('all')
  const [sort, setSort] = useState('default')

  const filteredProducts = useMemo(() => {
    let result = [...products]

    if (search) {
      const normalizedSearch = search.toLowerCase()

      result = result.filter(p =>
        [
          p.title,
          p.brand,
          p.collection,
          p.category,
          p.productType,
          ...p.accords,
          ...p.notes.top,
          ...p.notes.heart,
          ...p.notes.base,
        ].some((value) => value.toLowerCase().includes(normalizedSearch))
      )
    }

    if (productType !== 'all') {
      result = result.filter(p => p.productType === productType)
    }

    if (brand !== 'all') {
      result = result.filter(p => p.brand === brand)
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

    if (sort === 'rating-desc') {
      result.sort((a, b) => (b.rating?.rate ?? 0) - (a.rating?.rate ?? 0))
    }

    if (sort === 'title-asc') {
      result.sort((a, b) => a.title.localeCompare(b.title))
    }

    return result
  }, [products, search, productType, brand, category, sort])

  return {
    search,
    setSearch,
    productType,
    setProductType,
    brand,
    setBrand,
    category,
    setCategory,
    sort,
    setSort,
    filteredProducts,
  }
}
