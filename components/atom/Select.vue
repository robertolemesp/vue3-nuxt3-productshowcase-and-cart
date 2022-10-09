<script lang="ts" setup>
  interface Props {
    options: any
  }

  const { options } = defineProps<Props>()

  const selectedOption = ref<string>('')
  const emit = defineEmits(['onChange'])

  onMounted(() => { selectedOption.value = options[0].value || 'Selecione' })
</script>
<template>
  <div>
    <select :value="selectedOption" @change="emit('onChange', $event)">
      <option
        v-for="(option, i) in options" :key="i"
        :value="option.value"
      >
        {{ option.label }}
      </option>
    </select>
  </div>
</template>
<style lang="scss" scoped>
  div {
    position: relative;
    width: 262px;
    height: 40px;
    background: white;
    background-image: url('/assets/icons/arrow-down.svg');
    background-size: 8px;
    background-repeat: no-repeat;
    background-position: calc(100% - 15px) center;

    select {
      width: 100%;
      height: 40px;
      padding-left: 18px;
      background: none;
      border: $border;
      border-radius: 4px;
      -webkit-appearance: none !important;
      -moz-appearance: none !important;
      appearance: none;
      font-size: 14px;
      color: $gray-5;
    }
  }
</style>
