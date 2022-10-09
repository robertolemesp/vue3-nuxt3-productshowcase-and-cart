<script lang="ts" setup>
  import { ProductSortOptions } from '@/models/product'

  interface SortOption {
    value: ProductSortOptions
    label: string
  }

  const selectOptions: SortOption[] = [
    { value: 'popularity', label: 'Mais populares' },
    { value: 'lowest-price', label: 'Menor preço' },
    { value: 'highest-price', label: 'Maior preço' },
    { value: 'a-z', label: 'A-Z' },
    { value: 'z-a', label: 'Z-A' }
  ]

  const productState = useProductState()

  const handleSelectChange = (event: any) => productState.sort(event.target.value as ProductSortOptions)
</script>

<template>
  <section>
    <div>
      <AtomHeading style="line-height: 35px;">Games</AtomHeading>
      <AtomSelect
        :options="selectOptions"
        @onChange="handleSelectChange"
      />
    </div>
    <ul>
      <li v-for="(product, i) in productState.products" :key="i">
        <MoleculeProduct :product="product" />
      </li>
    </ul>
  </section>
</template>
<style lang="scss" scoped>
  section {
    width: 100%;
    @media(min-width: 1280px) {
      max-width: 850px;
    }

    > div {
      display: flex;
      flex-flow: row wrap;
      align-items: flex-start;
      justify-content: space-between;
      @media(max-width: 582px) {
        justify-content: center;
        height: 115px;
      }
    }

    ul {
      display: flex;
      flex-flow: row wrap;
      justify-content: space-between;
      @media(max-width: 941px) { justify-content: space-around; }
      width: 100%;
      margin-top: 60px;
      list-style-type: none;

      li { margin-bottom: 48px; }
    }
  }
</style>
