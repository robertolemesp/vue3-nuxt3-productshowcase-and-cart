import { Product } from './product'

export interface CartState {
  products: Product[]
  subtotal: number
  shippingAmount: number
  total: number
  addProduct: (product: Product) => void
  removeProduct: (productID: number) => void
}
