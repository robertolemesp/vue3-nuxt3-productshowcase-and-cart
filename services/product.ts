import type { StyleValue } from 'vue'

import { Product, ProductDynamicStyles, ProductSortOptions, productSortOptions } from '@/models/product'

import { gray3, gray4, blue3 } from '@/assets/_variables.module.scss'

export const sortProducts = (products: Product[], sortOption: ProductSortOptions) => {
  products.sort((a: Product, b: Product) => {
    const productKey: keyof Product = productSortOptions[sortOption]

    switch (sortOption) {
    case 'lowest-price':
      return a[productKey] > b[productKey] ? 1 : a[productKey] === b[productKey] ? 0 : -1

    case 'z-a':
      return a[productKey] > b[productKey] ? 1 : a[productKey] === b[productKey] ? 0 : -1

    default:
      return a[productKey] < b[productKey] ? 1 : a[productKey] === b[productKey] ? 0 : -1
    }
  })
}

export const getProducts = async () => await useComposedFetch<Product>('/api/product')

export const getProductDynamicStyles = (variant = 'default'): ProductDynamicStyles => {
  const isVariantDefault = variant === 'default'

  const item: StyleValue = {
    marginBottom: `${isVariantDefault ? 25 : 19}px`,
    ...(!isVariantDefault && {
      display: 'flex',
      flexFlow: 'row',
      height: '53px'
    })
  }

  const figureWidth = `${isVariantDefault ? 262 : 60}px`
  const figure: StyleValue = {
    width: figureWidth,
    minWidth: figureWidth,
    height: `${isVariantDefault ? 230 : 53}px`
  }

  const description: StyleValue = {
    alignItems: isVariantDefault ? 'center' : 'flex-start',
    justifyContent: isVariantDefault ? 'space-evenly' : 'center',
    ...(isVariantDefault ? { marginTop: '5px' } : { marginLeft: '10px' }),
    height: isVariantDefault ? '50px' : '100%'
  }

  const label: StyleValue = {
    color: isVariantDefault ? gray4 : gray3,
    fontSize: `${isVariantDefault ? 16 : 14}px`,
    ...(!isVariantDefault && { marginRight: '5px' })
  }

  const price: StyleValue = {
    color: isVariantDefault ? blue3 : gray4,
    fontSize: `${isVariantDefault ? 16 : 14}px`
  }

  return { item, figure, description, label, price }
}
