import { StyleValue } from 'vue'

export interface Product {
  id: number
  name: string
  price: number
  score: number
  image: string
}

export type ProductSortOptions = 'popularity' | 'lowest-price' | 'highest-price' | 'a-z' | 'z-a'

export interface ProductState {
  products: Product[]
  setProducts: (products: Product[]) => void
  sort: (sortOption: ProductSortOptions) => void
}

export const productSortOptions: Record<ProductSortOptions, keyof Product> = {
  popularity: 'score',
  'lowest-price': 'price',
  'highest-price': 'price',
  'a-z': 'name',
  'z-a': 'name'
}

export interface ProductDynamicStyles {
  item: StyleValue
  figure: StyleValue
  description: StyleValue
  label: StyleValue
  price: StyleValue
}
