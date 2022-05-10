<template>
  <div>
    <Navbar />
    <HomeContainer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
// @ts-ignore
import HomeContainer from '@/components/HomeContainer.vue'
import Navbar from '~/components/Navbar.vue'

export default Vue.extend({
  name: 'IndexPage',
  components: { HomeContainer, Navbar },
})
</script>
