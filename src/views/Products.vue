<script lang="ts" setup>
  import Product, { IProduct } from '../components/Product.vue'
  import Icon from '../components/Icon.vue'
  import Button from '../components/Button.vue'
  import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
  import 'vue3-carousel/dist/carousel.css'

  const breakpoints = {
    0: {
      itemsToShow: 1.2
    },
    480: {
      itemsToShow: 1.5
    },
    768: {
      itemsToShow: 1.8
    },
    1024: {
      itemsToShow: 3.2
    }
  }

  const products: IProduct[] = [
    {
      name: '1010er Tray',
      price: '1,19€ / Stk.',
      shortDescription:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      longDescription:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus fuga, quae quidem quia repellat, soluta dolores voluptatum, natus quod ea ut perspiciatis. Quisquam, quos. Quisquam, quos.',
      image:
        'https://www.microgreen-shop.com/wp-content/uploads/2021/08/Der-neue-Microgreen-1010er-Tray-gelocht-in-neuer-Optik-und-noch-stabiler-Er-besteht-aus-extra-starkem-Aussenmaterial.png'
    },
    {
      name: '3010er Tray',
      price: '9,19€ / Stk.',
      shortDescription:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      longDescription:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus fuga, quae quidem quia repellat, soluta dolores voluptatum, natus quod ea ut perspiciatis. Quisquam, quos. Quisquam, quos.',
      image:
        'https://www.microgreen-shop.com/wp-content/uploads/2021/08/Der-neue-Microgreen-1010er-Tray-gelocht-in-neuer-Optik-und-noch-stabiler-Er-besteht-aus-extra-starkem-Aussenmaterial.png'
    },
    {
      name: '1010er Tray',
      price: '1,19€ / Stk.',
      shortDescription:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      longDescription:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus fuga, quae quidem quia repellat, soluta dolores voluptatum, natus quod ea ut perspiciatis. Quisquam, quos. Quisquam, quos.',
      image:
        'https://www.microgreen-shop.com/wp-content/uploads/2021/08/Der-neue-Microgreen-1010er-Tray-gelocht-in-neuer-Optik-und-noch-stabiler-Er-besteht-aus-extra-starkem-Aussenmaterial.png'
    },
    {
      name: '3010er Tray',
      price: '9,19€ / Stk.',
      shortDescription:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      longDescription:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus fuga, quae quidem quia repellat, soluta dolores voluptatum, natus quod ea ut perspiciatis. Quisquam, quos. Quisquam, quos.',
      image:
        'https://www.microgreen-shop.com/wp-content/uploads/2021/08/Der-neue-Microgreen-1010er-Tray-gelocht-in-neuer-Optik-und-noch-stabiler-Er-besteht-aus-extra-starkem-Aussenmaterial.png'
    },
    {
      name: '3010er Tray',
      price: '9,19€ / Stk.',
      shortDescription:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      longDescription:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus fuga, quae quidem quia repellat, soluta dolores voluptatum, natus quod ea ut perspiciatis. Quisquam, quos. Quisquam, quos.',
      image:
        'https://www.microgreen-shop.com/wp-content/uploads/2021/08/Der-neue-Microgreen-1010er-Tray-gelocht-in-neuer-Optik-und-noch-stabiler-Er-besteht-aus-extra-starkem-Aussenmaterial.png'
    }
  ]
</script>

<template>
  <div class="stage relative min-h-dvh overflow-hidden bg-nt-beige--alt">
    <Icon
      name="leaf"
      class="absolute right-4 top-32 w-12 fill-nt-green/15 sm:right-12 sm:top-16 md:right-48 md:w-52"
    />
    <div class="mx-auto max-w-7xl px-4 py-8 md:px-8 md:py-20">
      <!-- Headlines -->
      <h2
        class="mb-8 text-center text-3xl font-extrabold text-nt-brown md:text-6xl"
      >
        Produkte
      </h2>
      <h3 class="mb-4 hidden text-center text-lg md:block md:text-2xl">
        Von Farmern für Farmer
        <!-- Von der Praxis inspiriert -->
      </h3>
      <p class="mb-12 text-center">
        Jede Schale, jeder Topf und jedes Zubehörteil, das wir herstellen, wurde
        von uns persönlich auf dem Feld, im Gewächshaus und im urbanen Garten
        getestet.<br />
        <span class="hidden md:block">
          So stellen wir sicher, dass unsere Produkte in der Praxis den höchsten
          Ansprüchen genügen. <br />Unsere Erfahrungen als Farmer fließen direkt
          in die Entwicklung ein - und genau das macht den Unterschied.
        </span>
      </p>
      <!-- Carousel -->
      <Carousel
        :model-value="Math.floor((products.length - 1) / 2)"
        :snap-align="'center-odd'"
        :wrap-around="false"
        :breakpoints="breakpoints"
      >
        <Slide v-for="item in products" :key="item.name">
          <Product :product="item" />
        </Slide>
        <template #addons>
          <Navigation>
            <template #next>
              <Icon
                name="arrow"
                class="rotate-180 fill-gray-500 hover:fill-nt-brown"
              />
            </template>
            <template #prev>
              <Icon name="arrow" class="fill-gray-500 hover:fill-nt-brown" />
            </template>
          </Navigation>
          <Pagination />
        </template>
      </Carousel>
      <!-- Buttons -->
      <div
        class="mb-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
      >
        <Button class="flex gap-x-2"
          >B2B Bestellformular <Icon name="pdf" class="w-4 fill-nt-brown"
        /></Button>
        <Button class="flex gap-x-2"
          >B2C Bestellformular <Icon name="pdf" class="w-4 fill-nt-brown"
        /></Button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .stage {
    background-image: linear-gradient(
      rgba(255, 246, 238, 0.1),
      rgba(255, 246, 238, 1)
    );
    background-size: cover;
  }
</style>

<style lang="scss">
  $control-height: 30px;
  $bottom-gap: -5rem;
  .carousel__slide {
    padding-right: 1rem;
    padding-left: 1rem;
  }
  .carousel__viewport {
    margin-bottom: 8rem !important;
    overflow: visible;
  }
  .carousel__prev,
  .carousel__next {
    top: unset;
    bottom: $bottom-gap;
    transform: translateY(0%);
    z-index: 2;
  }
  .carousel__pagination {
    position: absolute;
    width: 100%;
    height: $control-height;
    bottom: $bottom-gap;
    margin-top: 0;
    z-index: 1;
    &-item {
      display: flex;
    }
    &-button::after {
      width: 7px;
      height: 7px;
      border-radius: 100%;
    }
  }
</style>
