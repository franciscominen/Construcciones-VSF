<template>
  <div>
    <Navbar v-if="!isMobile" />
    <NavbarMobile v-else />
    <HomeContainer />
    <AboutUsContainer />
    <TestimonialsContainer v-if='!isMobile'/>
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
      isMobile: false
    }
  },
  methods: {},
  computed: {
    responsive(): boolean {
      if (process.client) {
        let width = window.innerWidth
        console.log(width);
        
        if (width < 1024) {
          return this.isMobile = true;
        }
      }
      return this.isMobile;
    },
  },
  created() {
    console.log(this.responsive);
    
  },
})
</script>
