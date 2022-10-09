import { Product, ProductState, ProductSortOptions } from '@/models/product'

import { sortProducts } from '@/services/product'

export const productState: ProductState = reactive({
  products: [],
  setProducts: (products: Product[]) => { productState.products = products },
  sort: (sortOption: ProductSortOptions) => sortProducts(productState.products, sortOption)
})
