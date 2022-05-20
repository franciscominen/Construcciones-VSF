<template>
  <div>
    <Navbar v-if="!isMobile" />
    <NavbarMobile v-else />
    <HomeContainer :isMobile='isMobile'/>
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
  },
  data() {
    return {

    }
  },
  methods: {},
  computed: {
    isMobile(): boolean {
      if (process.client) {
        let width = window.innerWidth
        if (width < 1024) {
          return true
        }
      }
      return false
    },
  },
  created() {
    this.isMobile
  },
})
</script>

<style lang="scss">
@import '@/assets/main.scss';
</style>
