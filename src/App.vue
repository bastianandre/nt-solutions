<script setup lang="ts">
  import { ref } from 'vue'
  import Navigation from './components/Navigation.vue'
  import Home from './views/Home.vue'
  import Products from './views/Products.vue'
  import Mission from './views/Mission.vue'
  import Footer from './views/Footer.vue'
  import { vIntersectionObserver } from '@vueuse/components'
  import Partners from './views/Partners.vue'

  const activeSection = ref('home')

  function onIntersect([
    { target, isIntersecting }
  ]: IntersectionObserverEntry[]) {
    if (isIntersecting) {
      activeSection.value = target.id
    }
  }
</script>

<template>
  <Navigation :active="activeSection" />
  <section
    id="home"
    v-intersection-observer="[onIntersect, { threshold: 0.6 }]"
  >
    <Home />
  </section>
  <section
    id="products"
    v-intersection-observer="[onIntersect, { threshold: 0.5 }]"
  >
    <Products />
  </section>
  <section
    id="mission"
    v-intersection-observer="[onIntersect, { threshold: 0.5 }]"
  >
    <Mission />
  </section>
  <section
    id="partners"
    v-intersection-observer="[onIntersect, { threshold: 0.5 }]"
  >
    <Partners />
  </section>
  <section id="footer">
    <Footer />
  </section>
</template>

<style lang="scss"></style>
