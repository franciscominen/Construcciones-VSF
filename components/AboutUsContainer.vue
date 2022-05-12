<template>
  <main class="aboutUs_mainWrapper" id='about'>
    <h1>Quienes somos?</h1>
    <section class="aboutUs_infoWrapper">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In facilisi id
        nisl tincidunt quam mattis ac. In facilisi id nisl tincidunt quam mattis
        ac. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In facilisi
        id nisl tincidunt quam mattis ac.
      </p>
      <lottie-player
        autoplay
        loop
        style="width: 450px"
        src="https://assets3.lottiefiles.com/packages/lf20_nm4ouwfb.json"
        speed="1"
        debug
      ></lottie-player>
    </section>
  </main>
</template>

<script>
export default {
  name: 'AboutUsContainer',
}
</script>

<style lang='scss'>
@import '@/assets/main.scss';

.aboutUs_mainWrapper {
  min-height: 100vh;
  padding: 8em 6em 1em 6em;
  background: $blue url('@/assets/images/blue-pattern.svg') no-repeat fixed center
    20em;
  background-size: contain;

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
      color: $white;
      font-size: 32px;
      font-weight: 100;
      line-height: 1.4;
      width: 35%;
    }

  }

}
</style>
