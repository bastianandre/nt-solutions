<script lang="ts" setup>
  import { onMounted, ref, watch } from 'vue'
  import Button from './Button.vue'
  import { useScroll } from '@vueuse/core'

  const { active = 'home' } = defineProps<{
    active: string
  }>()
  const { isScrolling, directions } = useScroll(window)
  const navRef = ref<HTMLElement | null>(null)
  const scrollDirection = ref<'up' | 'down'>('down')

  onMounted(() => {
    if (navRef.value) {
      const navHeight = navRef.value.offsetHeight
      document.documentElement.style.setProperty(
        '--nav-height',
        `${navHeight}px`
      )
    }
  })

  watch(
    isScrolling,
    () => {
      if (directions.top) {
        scrollDirection.value = 'up'
      } else if (directions.bottom) {
        scrollDirection.value = 'down'
      }
    },
    { immediate: true }
  )
</script>

<template>
  <nav
    ref="navRef"
    class="sticky top-0 z-50 bg-nt-beige shadow-md transition-all duration-300"
    :class="{ 'top-[calc(var(--nav-height)*-1)]': scrollDirection === 'down' }"
  >
    <div
      class="mx-auto flex max-w-7xl items-center justify-between gap-x-8 px-4 py-4 md:px-8"
    >
      <RouterLink to="/">
        <img
          src="../assets/images/logo.png"
          alt="NT Solutions Logo"
          class="h-16 object-contain"
        />
      </RouterLink>
      <!-- Hamburger -->
      <svg
        class="hamburger sm:hidden"
        viewBox="0 0 100 100"
        width="60"
        onclick="this.classList.toggle('active')"
      >
        <path
          class="line top"
          d="m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20"
        />
        <path class="line middle" d="m 30,50 h 40" />
        <path
          class="line bottom"
          d="m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20"
        />
      </svg>
      <ul class="hidden items-center gap-x-8 sm:flex">
        <li>
          <RouterLink to="#products">
            <span
              class="link relative font-bold text-nt-brown transition-all duration-200 hover:text-nt-green"
              :class="{ 'active text-nt-green': active === 'products' }"
            >
              Produkte
            </span>
          </RouterLink>
        </li>
        <li>
          <RouterLink to="#mission">
            <span
              class="link relative font-bold text-nt-brown transition-all duration-200 hover:text-nt-green"
              :class="{ 'active text-nt-green': active === 'mission' }"
            >
              Mission
            </span>
          </RouterLink>
        </li>
        <li>
          <RouterLink to="#partners">
            <span
              class="link relative font-bold text-nt-brown transition-all duration-200 hover:text-nt-green"
              :class="{ 'active text-nt-green': active === 'partners' }"
            >
              Partner
            </span>
          </RouterLink>
        </li>
        <li>
          <Button> Jetzt bestellen </Button>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
  .link::after {
    content: '';
    background-color: var(--color-nt-green);
    position: absolute;
    left: 0;
    bottom: -12px;
    width: 100%;
    height: 3px;
    transition: all 0.2s ease;
    transform: scaleX(0);
    border-radius: 3px;
  }
  .link.active::after {
    transform: scaleX(0.25);
  }
  .link:hover::after {
    transform: scaleX(1);
  }
  .hamburger {
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
    transition: transform 400ms;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  .hamburger.active {
    transform: rotate(45deg);
  }
  .hamburger.active .line {
    stroke: var(--color-nt-green);
  }
  .hamburger .line {
    fill: none;
    transition:
      stroke-dasharray 400ms,
      stroke-dashoffset 400ms;
    stroke: var(--color-nt-brown);
    stroke-width: 5.5;
    stroke-linecap: round;
  }

  .hamburger .top {
    stroke-dasharray: 40 160;
  }
  .hamburger .middle {
    stroke-dasharray: 40 142;
    transform-origin: 50%;
    transition: transform 400ms;
  }
  .hamburger .bottom {
    stroke-dasharray: 40 85;
    transform-origin: 50%;
    transition:
      transform 400ms,
      stroke-dashoffset 400ms;
  }
  .hamburger.active .top {
    stroke-dashoffset: -64px;
  }
  .hamburger.active .middle {
    //stroke-dashoffset: -20px;
    transform: rotate(90deg);
  }
  .hamburger.active .bottom {
    stroke-dashoffset: -64px;
  }
</style>
