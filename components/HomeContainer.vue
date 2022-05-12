<!-- Please remove this file from your project -->
<template>
  <main class="home_mainWrapper" id='home'>
    <section class="home_titleSection">
      <h1>Construcción <br />sin <span>estrés</span>.</h1>
      <lottie-player
        autoplay
        loop
        class="animation_home"
        src="https://assets3.lottiefiles.com/packages/lf20_owsiqp5i.json"
        speed="1"
        debug
      ></lottie-player>
    </section>
    <section class="home_footerWrapper">
      <SocialMediaLinks :classColor="`socialMedia_blue`" />
      <NuxtLink to='#about' class="goToAbout_button">
        <h3>Descubri sobre nosotros</h3>
        <img src="@/assets/images/icons/down-arrow.svg" alt="">
      </NuxtLink>
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

  height: 100vh;
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

    min-height: 100px;
    max-height: 100em;
    object-fit: contain;
    h1 {
      font-size: 68px;
      font-weight: 900;
      line-height: 1.05;
      color: $blue;
      span {
        color: $green;
      }
    }
    .animation_home {
      max-width: 750px;
      min-width: 200px;
      object-fit: contain;
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

    .goToAbout_button {
      position: relative;
      right: 2.5em;
      h3 {
        color: $blue;
        font-size: 20px;
        font-weight: 500;
        margin-bottom: 4px;
      }
      img {
        max-width: 220px;
      }
    }
  }
}
</style>
