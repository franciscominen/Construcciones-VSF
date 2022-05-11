<!-- Please remove this file from your project -->
<template>
  <main class="home_mainWrapper">
    <section class="home_titleSection">
      <h1>Construcción <br />sin <span>estrés</span>.</h1>
      <lottie-player
        autoplay
        loop
        style="width: 400px"
        src="https://assets3.lottiefiles.com/packages/lf20_owsiqp5i.json"
        speed="1"
        debug
      ></lottie-player>
    </section>
    <section class="home_footerWrapper">
      <SocialMediaLinks :classColor="`socialMedia_lightblue`" />
      <button>Descubri sobre nosotros</button>
      <img src="@/assets/images/icons/msg-modal-icon.svg" alt="" style="width: 50px" class="img-consult"/>
    </section>
  </main>
</template>

<script>
import SocialMediaLinks from '@/components/SocialMediaLinks.vue'

export default {
  name: 'HomeContainer',
  components: { SocialMediaLinks }
}
</script>

<style lang="scss">
@import '@/assets/main.scss';

.home_mainWrapper {
  min-height: 100vh;
  height: auto;
  background: $white url('@/assets/images/home-bg.svg') no-repeat fixed center
    20em;
  background-size: contain;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 2em;

  .home_titleSection {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    top: 6em;
    h1 {
      font-size: 68px;
      font-weight: 900;
      line-height: 1.05;
      color: $blue;
      span {
        color: $green;
      }
    }
  }

  .home_footerWrapper {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    .img-consult {
      position: sticky;
      bottom: 2em;
      right: 5%;
    }
  }
}
</style>
