<script lang="ts" setup>
  import Button from '../components/Button.vue'
</script>

<template>
  <div class="stage">
    <div class="flex h-full backdrop-contrast-75">
      <div
        class="mx-auto flex w-full max-w-7xl items-center justify-between self-end px-4 py-8 pb-12 md:px-8 md:py-24"
      >
        <div class="text-white">
          <!-- Headlines -->
          <h5
            class="absolute top-4 mb-4 hidden text-xs font-medium md:mb-8 md:text-base"
          >
            Produkte von Farmern für Farmer
          </h5>
          <h1
            class="mb-6 text-3xl font-extrabold text-nt-beige sm:mb-12 md:text-7xl"
          >
            <span class="gradient">Grün</span> wachsen<br />
            mit gutem Gewissen
          </h1>
          <!-- Copy -->
          <p
            class="font-semimedium mb-8 rounded py-2 text-nt-beige backdrop-blur-md sm:text-lg lg:text-xl"
          >
            Wir entwickeln nachhaltige und langlebige Urban Farming-Utensilien
            für Gärtner, Landwirte und Enthusiasten.<br />
            CO<sub>2</sub>-neutral, vegan und ausschließlich in Deutschland
            hergestellt.
          </p>
          <!-- Buttons -->
          <div class="flex gap-4">
            <RouterLink to="#mission">
              <Button type="secondary"> Unsere Mission </Button>
            </RouterLink>
            <RouterLink to="#products" class="flex">
              <Button> Zu den Produkten </Button>
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .stage {
    height: calc(100dvh - var(--nav-height) + 1px);
    background-image: linear-gradient(
        rgba(45, 41, 35, 0.1),
        rgba(45, 41, 35, 0.75)
      ),
      url('https://images.westend61.de/0001572054pw/man-tending-trays-of-microgreens-seedlings-growing-in-urban-farm-MINF16219.jpg');
    background-position: center;
    background-size: cover;
  }
  .caption {
    backdrop-filter: blur(15px);
  }
  //https://images.westend61.de/0001326851pw/gardener-in-grenhouse-checking-spinach-seedling-is-nursery-pots-FLLF00398.jpg
</style>
