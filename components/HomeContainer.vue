<!-- Please remove this file from your project -->
<template>
  <main class="home_mainWrapper">
    <section>
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
  </main>
</template>

<script>
export default {
  name: 'HomeContainer',
}
</script>

<style lang="scss">
@import '@/assets/main.scss';

.home_mainWrapper {
  min-height: 100vh;
  background-color: $white;
  background-image: url('@/assets/images/home-bg.svg');
  background-repeat: no-repeat;
  background-position-x: center;
  background-position-y: 15em;
  background-attachment: fixed;
  background-size: contain;
  section {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    top: 2em;
  }
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
</style>
