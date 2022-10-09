import type { CartState } from '@/models/cart'
import type { Product } from '@/models/product'

const calculateSubTotalAmount = (products: Product[]) => products.reduce((sum: number, { price }: Product) => sum + price, 0)
export const getSubTotalAmount = (products: Product[]) => calculateSubTotalAmount(products)

const calculateShippingAmount = (products: Product[]) => products.length * 10
export const getShippingAmount = (cart: CartState) => cart.subtotal > 250 ? 0 : calculateShippingAmount(cart.products)

const calculateTotalAmount = (cart: CartState) => cart.subtotal + cart.shippingAmount
export const getTotalAmount = (cart: CartState) => calculateTotalAmount(cart)

export const addProduct = (products: Product[], product: Product) => [...products, product]

export const removeProduct = (products: Product[], removingProductID: number) => {
  const productIndex = products.findIndex((product: Product) => product.id === removingProductID)

  if (productIndex === -1) {
    // eslint-disable-next-line no-console
    console.log('produto não encontrado no carrinho')
    return products
  }

  return [...products.slice(0, productIndex), ...products.slice(productIndex + 1)]
}
