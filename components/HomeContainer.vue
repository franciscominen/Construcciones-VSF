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
      <SocialMediaLinks :classColor="`socialMedia_blue`" v-if="!isMobile" />
      <NuxtLink to="#about" class="goToAbout_button">
        <h3>Descubri sobre nosotros</h3>
        <img src="@/assets/images/icons/down-arrow.svg" alt="" />
      </NuxtLink>
      <img
        src="@/assets/images/icons/msg-modal-icon.svg"
        alt=""
        style="width: 50px"
        class="img-consult"
      />
    </section>
  </main>
</template>

<script lang='ts'>
import SocialMediaLinks from '@/components/SocialMediaLinks.vue'

export default {
  name: 'HomeContainer',
  components: { SocialMediaLinks },
  data() {
    return {
      isMobile: false,
    }
  },
  computed: {
    responsive(): boolean {
      if (process.client) {
        let width = window.innerWidth
        console.log(width)

        if (width < 1024) {
          return (this.isMobile = true)
        }
      }
      return this.isMobile
    },
  },
  created() {
    this.responsive
  },
}
</script>

<style lang="scss" scoped>
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
      z-index: 1;
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

@media (max-width: 1024px) {
  .home_mainWrapper {
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
