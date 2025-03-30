<script setup lang="ts">
  const { disabled = false, type = 'primary' } = defineProps<{
    disabled?: boolean
    type?: 'primary' | 'secondary'
  }>()
</script>

<template>
  <button
    type="button"
    class="ease-swing cursor-pointer whitespace-nowrap rounded px-4 py-2 font-bold backdrop-blur-md transition-all duration-200"
    :class="{
      '!cursor-not-allowed bg-gray-500': disabled,
      'bg-nt-yellow text-nt-brown': type === 'primary',
      'border-2 border-nt-beige text-nt-beige backdrop-blur-md':
        type === 'secondary'
    }"
    :disabled="disabled"
  >
    <slot />
  </button>
</template>

<style lang="scss" scoped>
  button:hover {
    scale: 1.03;
    background-blend-mode: lighten;
    filter: brightness(1.1);
    transition-property: -webkit-filter;
  }
</style>
