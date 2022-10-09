import type { CartState } from '@/models/cart'
import type { Product } from '@/models/product'

import { getSubTotalAmount, getShippingAmount, getTotalAmount, addProduct, removeProduct } from '@/services/cart'

export const cartState: CartState = reactive({
  products: [],
  subtotal: computed(() => getSubTotalAmount(cartState.products)),
  shippingAmount: computed(() => getShippingAmount(cartState)),
  total: computed(() => getTotalAmount(cartState)),
  addProduct: (product: Product) => { cartState.products = addProduct(cartState.products, product) },
  removeProduct: (productID: number) => { cartState.products = removeProduct(cartState.products, productID) }
})
