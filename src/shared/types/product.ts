export type Product = {
  id: number
  brand: string
  title: string
  price: number
  description: string
  category: string
  collection: string
  concentration: string
  volumeMl: number
  gender: string
  mood: string
  accords: string[]
  notes: {
    top: string[]
    heart: string[]
    base: string[]
  }
  image: string
  rating?: {
    rate: number
    count: number
  }
}
