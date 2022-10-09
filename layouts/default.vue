<template>
  <main>
    <slot />
  </main>
</template>
<style lang="scss" scoped>
  main {
    display: flex;
    flex-flow: row wrap;
    width: 100%;
    max-width: 1280px;
    margin: 42px auto;
    padding: 0 70px;
  }
</style>
