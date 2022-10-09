<script lang='ts' setup>
  import type { Product } from '@/models/product'
  import { getProducts } from '@/services/product'

  useHead({
    title: 'Code Challenge',
    viewport: 'width=device-witdh, initial-scale=1, maximum-scale=1',
    charset: 'utf-8',
    meta: [
      { name: 'description', content: 'Consulta Remedios Frontend Challenge Roberto' }
    ]
  })

  const { data: products/*,  pending */ } = await getProducts()

  useProductState().setProducts(products as unknown as Product[])
</script>
<template>
  <NuxtLayout>
    <NuxtPage />
    <TemplateHome />
  </NuxtLayout>
</template>
