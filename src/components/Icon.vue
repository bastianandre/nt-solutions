<template>
  <component :is="icon" />
</template>

<script lang="ts" setup>
  import { defineAsyncComponent } from 'vue'

  const props = defineProps<{ name: string }>()
  const icon = defineAsyncComponent(
    () => import(`./../assets/images/icons/${props.name}.svg`)
  )
</script>
