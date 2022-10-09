<script lang='ts' setup>
  import type { Product } from '@/models/product'

  import { getProductDynamicStyles } from '@/services/product'

  interface Props {
    product: Product
    variant?: 'default' | 'small'
  }

  const { product, variant = 'default' } = defineProps<Props>()

  const state = reactive({ isBeingHovered: false })
  const cartState = useCartState()

  const isVariantDefault = computed(() => variant === 'default').value === true

  const shouldAppearOnHover = computed(() => !isVariantDefault && state.isBeingHovered)
  const shouldHideOnHover = computed(() => !isVariantDefault || (isVariantDefault && !state.isBeingHovered))
  const shouldChangeOnHover = computed(() => isVariantDefault && state.isBeingHovered)

  const handleMouseEnter = () => { state.isBeingHovered = true }
  const handleMouseLeave = () => { state.isBeingHovered = false }
  const handleClick = () => isVariantDefault && cartState.addProduct(product)
  const handleRemoveButtonClick = () => cartState.removeProduct(product.id)

  const dynamicStyles = getProductDynamicStyles(variant)
</script>
<template>
  <article
    class="showcase-item"
    :style="dynamicStyles.item"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
    @click="handleClick"
  >
    <AtomFigure
      :style="dynamicStyles.figure"
      :imageSrc="product.image"
      :imageAlt="product.name"
    />
    <div class="description" :style="dynamicStyles.description">
      <label v-if="shouldHideOnHover" :style="dynamicStyles.label">
        {{ product.name }}
      </label>
      <span :style="dynamicStyles.price">
        {{ shouldChangeOnHover ? 'adicionar ao carrinho' : $formatCurrencyToBrl(product.price) }}
      </span>
    </div>
    <AtomButton
      v-if="shouldAppearOnHover"
      :style="{
        alignItems: 'flex-start',
        position: 'absolute',
        right: '5px',
        top: '50%',
        transform: 'translateY(-50%)',
        width: '15px',
        height: '15px',
        margin: 'auto 0 auto 15px',
        fontSize: '12px',
        lineHeight: '12px',
        borderRadius: '50%',
      }"
      @click="handleRemoveButtonClick"
    >
      x
    </AtomButton>
  </article>
</template>
<style lang='scss' scoped>
  article {
    position: relative;

    &:hover { cursor: pointer; }
    .description {
      display: flex;
      flex-flow: column;

      span { font-family: 'Open Sans Bold', sans-serif; }
    }
  }
</style>
