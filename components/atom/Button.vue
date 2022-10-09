<script lang='ts' setup>
  const emit = defineEmits(['click'])
</script>
<template>
  <button @click="emit('click')">
    <slot />
  </button>
</template>
<style lang="scss" scoped>
  button {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 30px;
    background: $blue;
    color: white;
    border: none;
    border-radius: 5px;
    font-family: 'Open Sans Bold', sans-serif;
    font-size: 14px;

    &:hover {
      background: lighten($blue, 4%);
    }

    &:active {
      transform: scale(0.965);
    } 
  }
</style>
