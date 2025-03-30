<script setup lang="ts">
  import { ref } from 'vue'

  export interface IProduct {
    name: string
    price: string
    shortDescription: string
    longDescription: string
    image: string
  }

  defineProps<{ product: IProduct }>()
  const details = ref(false)
</script>

<template>
  <div
    class="product relative cursor-pointer transition-transform"
    @click="details = !details"
  >
    <div
      class="front flex flex-col rounded-lg bg-white p-4 shadow-lg transition-transform duration-500 ease-swing backface-hidden"
      :class="
        details ? '[transform:rotateY(180deg)]' : '[transform:rotateY(0deg)]'
      "
    >
      <img
        src="https://www.microgreen-shop.com/wp-content/uploads/2021/08/Der-neue-Microgreen-1010er-Tray-gelocht-in-neuer-Optik-und-noch-stabiler-Er-besteht-aus-extra-starkem-Aussenmaterial.png"
      />
      <div class="mb-4 flex justify-between">
        <h5 class="text-lg font-bold text-nt-brown">
          {{ product.name }}
        </h5>
        <h5 class="font-semibold text-nt-green">
          {{ product.price }}
        </h5>
      </div>
      <p class="text-left text-gray-500">
        {{ product.shortDescription }}
      </p>
    </div>
    <div
      class="back absolute inset-0 flex flex-col items-center justify-center rounded-lg bg-white p-4 shadow-lg transition-transform duration-500 ease-swing backface-hidden"
      :class="
        details ? '[transform:rotateY(0deg)]' : '[transform:rotateY(180deg)]'
      "
    >
      {{ product.longDescription }}
    </div>
  </div>
</template>

<style lang="scss">
  .carousel__slide--active .product {
    transform: scale(1.05);
  }
</style>
