<template>
  <main class="aboutUs_mainWrapper" id="about">
    <h1 data-aos="zoom-in" data-aos-duration="800">Quienes somos?</h1>
    <section class="aboutUs_infoWrapper">
      <p data-aos="fade-right" data-aos-duration="800">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In facilisi id
        nisl tincidunt quam mattis ac. In facilisi id nisl tincidunt quam mattis
        ac. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In facilisi
        id nisl tincidunt quam mattis ac.
      </p>
      <lottie-player
        data-aos-duration="800"
        data-aos="fade-left"
        autoplay
        loop
        src="https://assets3.lottiefiles.com/packages/lf20_nm4ouwfb.json"
        speed="1"
        debug
        class="aboutUs_animation"
      ></lottie-player>
    </section>
  </main>
</template>

<script>
import aosMixin from '@/mixins/aos'

export default {
  name: 'AboutUsContainer',
  mixins: [aosMixin],
}
</script>

<style lang='scss' scoped>
@import '@/assets/main.scss';

.aboutUs_mainWrapper {
  overflow-x: hidden;
  min-height: auto;
  padding: 8em 6em 1em 6em;
  background: $white url('@/assets/images/home-bg.svg') no-repeat fixed center
    20em;
  background-size: contain;
  z-index: 0;
  h1 {
    color: $green;
    font-size: 68px;
    font-weight: 900;
    margin-bottom: 0.5em;
    text-align: center;
  }

  .aboutUs_infoWrapper {
    display: flex;
    gap: 2em;
    justify-content: center;
    align-items: center;
    padding: 0 1.5em;

    p {
      color: $blue;
      font-size: 32px;
      font-weight: 100;
      line-height: 1.4;
      width: 35%;
    }
    .aboutUs_animation {
      max-width: 450px;
      min-width: 100px;
      object-fit: contain;
    }
  }
}

@media (max-width: 1024px) {
  .aboutUs_mainWrapper {
    min-height: auto;
    padding: 6em 8% 2em 8%;
    background-size: 250%;

    h1 {
      color: $green;
      font-size: 56px;
      font-weight: 900;
      margin-bottom: 0.3em;
      text-align: left;
      line-height: 1.1;
    }

    .aboutUs_infoWrapper {
      display: flex;
      flex-direction: column;
      gap: 0;
      justify-content: center;
      align-items: center;
      padding: 0;

      p {
        font-size: 22px;
        font-weight: 400;
        line-height: 1.4;
        width: 100%;
      }

      .aboutUs_animation {
        padding: 2em;
      }
    }
  }
}
</style>
