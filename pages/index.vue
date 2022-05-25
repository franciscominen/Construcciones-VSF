<template>
  <div>
    <Navbar v-if="$device.isDesktop" />
    <NavbarMobile v-else />
    <HomeContainer />
    <AboutUsContainer />
    <TestimonialsContainer />
    <ActivityContainer />
    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import HomeContainer from '@/components/HomeContainer.vue'
import Navbar from '@/components/Navbar.vue'
import AboutUsContainer from '@/components/AboutUsContainer.vue'
import ActivityContainer from '@/components/ActivityContainer.vue'
import TestimonialsContainer from '@/components/TestimonialsContainer.vue'
import Footer from '@/components/Footer.vue'
import NavbarMobile from '@/components/NavbarMobile.vue'

export default Vue.extend({
  name: 'IndexPage',
  components: {
    Navbar,
    NavbarMobile,
    HomeContainer,
    AboutUsContainer,
    ActivityContainer,
    TestimonialsContainer,
    Footer,
  }
})
</script>

<style lang="scss">
@import '@/assets/main.scss';
</style>
