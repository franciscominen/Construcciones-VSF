<template>
  <div>
    <Navbar />
    <HomeContainer />
    <AboutUsContainer />
    <TestimonialsContainer />
    <ActivityContainer />
    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
// @ts-ignore
import HomeContainer from '@/components/HomeContainer.vue'
import Navbar from '@/components/Navbar.vue'
import AboutUsContainer from '@/components/AboutUsContainer.vue'
import ActivityContainer from '@/components/ActivityContainer.vue'
import TestimonialsContainer from '@/components/TestimonialsContainer.vue'
import Footer from '@/components/Footer.vue'

export default Vue.extend({
  name: 'IndexPage',
  components: {
    Navbar,
    HomeContainer,
    AboutUsContainer,
    ActivityContainer,
    TestimonialsContainer,
    Footer
  },
})
</script>
