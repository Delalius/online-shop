import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export type CartItem = {
  id: number
  brand?: string
  title: string
  price: number
  quantity: number
  image: string
  concentration?: string
  volumeMl?: number
}

type AddToCartPayload = Omit<CartItem, 'quantity'>

type CartStore = {
  items: CartItem[]

  addToCart: (item: AddToCartPayload) => void
  increase: (id: number) => void
  removeFromCart: (id: number) => void
  decrease: (id: number) => void
  setQuantity: (id: number, quantity: number) => void
  clearCart: () => void

  getTotal: () => number
  getItemsCount: () => number
}

const normalizeQuantity = (quantity: number) => {
  if (!Number.isFinite(quantity)) {
    return 1
  }

  return Math.max(1, Math.floor(quantity))
}

export const useCartStore = create<CartStore>()(
  persist<CartStore>(
    (set, get) => ({
      items: [],

      addToCart: (item) =>
        set((state) => {
          const existing = state.items.find((i) => i.id === item.id)

          if (existing) {
            return state
          }

          return {
            items: [
              ...state.items,
              {
                id: item.id,
                brand: item.brand,
                title: item.title,
                price: item.price,
                image: item.image,
                concentration: item.concentration,
                volumeMl: item.volumeMl,
                quantity: 1,
              }
            ]
          }
        }),

      increase: (id) =>
        set((state) => ({
          items: state.items.map((item) =>
            item.id === id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        })),

      decrease: (id) =>
        set((state) => ({
          items: state.items
            .map((item) =>
              item.id === id
                ? { ...item, quantity: item.quantity - 1 }
                : item
            )
            .filter((item) => item.quantity > 0)
        })),

      setQuantity: (id, quantity) =>
        set((state) => ({
          items: state.items.map((item) =>
            item.id === id
              ? { ...item, quantity: normalizeQuantity(quantity) }
              : item
          )
        })),

      removeFromCart: (id) =>
        set((state) => ({
          items: state.items.filter((item) => item.id !== id)
        })),

      clearCart: () => set({ items: [] }),

      getTotal: () =>
        get().items.reduce((sum, item) => sum + item.price * item.quantity, 0),

      getItemsCount: () =>
        get().items.reduce((sum, item) => sum + item.quantity, 0),
    }),
    {
      name: 'cart-storage',
    }
  )
)
