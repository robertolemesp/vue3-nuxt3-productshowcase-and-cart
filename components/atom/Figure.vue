<script lang='ts' setup>
  interface Props {
    imageAlt?: string
    imageSrc: string
  }

  const { imageAlt = '', imageSrc = '' } = defineProps<Props>()
</script>
<template>
  <figure>
    <img :src="`assets/images/${imageSrc}`" :alt="imageAlt">
  </figure>
</template>
<style lang="scss" scoped>
  figure {
    display: flex;
    justify-content: center;
    align-items: center;
    background: $gray;
    border-radius: 3px;

    img { width: 65%; }
  }
</style>
