<script lang='ts' setup>
  interface Props {
    variant?: 'big' | 'small'
  }

  const { variant = 'big' } = defineProps<Props>()

  const computedStyle = computed(() =>({
    fontSize: `${variant === 'big' ? 48 : 18}px`,
    fontFamily: `Open Sans ${variant === 'big' ? 'Semi-' : ''}Bold, sans-serif`
  }))

</script>
<template>
  <h1 :style="computedStyle">
    <slot />
  </h1>
</template>
<style lang="scss" scoped>
  h1 {
    letter-spacing: 0;
    color: $gray-6;
  }
</style>
