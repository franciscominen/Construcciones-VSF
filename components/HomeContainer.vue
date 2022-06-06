<!-- Please remove this file from your project -->
<template>
  <main class="home_mainWrapper" id="home">
    <figure></figure>
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
      <SocialMediaLinks
        :classColor="`socialMedia_blue`"
        class="socialMedia-links"
      />
      <NuxtLink :to="{ path: '/', hash: '#about' }" class="goToAbout_button">
        <h3>Descubri sobre nosotros</h3>
        <img src="@/assets/images/icons/down-arrow.svg" alt="" />
      </NuxtLink>
      <figure></figure>
    </section>
  </main>
</template>

<script lang='ts'>
import SocialMediaLinks from '@/components/SocialMediaLinks.vue'
import ConsultModal from './ConsultModal.vue'
import aosMixin from '@/mixins/aos'

export default {
  name: 'HomeContainer',
  components: { SocialMediaLinks, ConsultModal },
  mixins: [aosMixin],
}
</script>

<style lang="scss" scoped>
@import '@/assets/main.scss';

.home_mainWrapper {
  overflow-x: hidden;
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
      -webkit-animation: fade-in 1.2s cubic-bezier(0.39, 0.575, 0.565, 1) 1s both;
      animation: fade-in 1.2s cubic-bezier(0.39, 0.575, 0.565, 1) 1s both;
      font-size: 68px;
      font-weight: 900;
      line-height: 1.05;
      color: $blue;
      span {
        color: $green;
      }
    }
    .animation_home {
      -webkit-animation: fade-in-fwd 0.8s cubic-bezier(0.39, 0.575, 0.565, 1) 1.4s
        both;
      animation: fade-in-fwd 0.8s cubic-bezier(0.39, 0.575, 0.565, 1) 1.4s both;
      max-width: 750px;
      min-width: 200px;
      object-fit: contain;
      z-index: 0;
    }
  }

  .home_footerWrapper {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    -webkit-animation: fade-in 0.4s cubic-bezier(0.39, 0.575, 0.565, 1)
      1.6s both;
    animation: fade-in 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) 1.6s both;
    .img-consult {
      position: sticky;
      bottom: 2em;
      right: 5%;
    }

    .goToAbout_button {
      position: relative;
      right: 2.5em;
      transition: 0.2s;
      h3 {
        color: $blue;
        font-size: 20px;
        font-weight: 500;
        margin-bottom: 4px;
        transition: 0.2s;
      }
      img {
        transition: 0.2s;
        max-width: 220px;
      }
      &:hover {
        h3 {
          color: $green;
        }
        img {
          filter: brightness(0) saturate(100%) invert(74%) sepia(11%)
            saturate(1948%) hue-rotate(65deg) brightness(101%) contrast(97%);
        }
      }
    }
  }
}

@media (max-width: 1024px) {
  .home_mainWrapper {
    height: calc(100vh - 80px);
    background-size: 250%;
    justify-content: space-between;
    .home_titleSection {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      h1 {
        font-size: 42px;
        text-align: center;
        order: 1;
      }
    }

    .home_footerWrapper {
      justify-content: center;
      .socialMedia-links {
        display: none;
      }
      .img-consult {
        display: none;
      }
      .goToAbout_button {
        position: inherit;
        right: 0;
        justify-self: left;
        align-self: left;
        h3 {
          color: $blue;
          font-size: 16px;
        }
        img {
          max-width: 180px;
        }
      }
    }
  }
}
</style>
