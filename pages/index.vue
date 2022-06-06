<template>
  <div>
    <Navbar class="navbar-desktop" />
    <NavbarMobile class="navbar-mobile" />
    <HomeContainer />
    <AboutUsContainer />
    <TestimonialsContainer />
    <ActivityContainer />
    <ConsultModal />
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
import ConsultModal from '~/components/ConsultModal.vue'

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
    ConsultModal,
  },
})
</script>

<style lang="scss">
@import '@/assets/main.scss';
</style>
