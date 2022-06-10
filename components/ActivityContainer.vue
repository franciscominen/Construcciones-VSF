<template>
  <main class="activity_mainWrapper" id="activity">
    <h1 data-aos="zoom-in">¿A qué nos dedicamos?</h1>
    <section class="activity_infoWrapper">
      <lottie-player
        autoplay
        loop
        class="activity_animation"
        src="https://assets4.lottiefiles.com/packages/lf20_griqijxi.json"
        speed="1"
        debug
        data-aos="fade-right"
      ></lottie-player>
      <p data-aos="fade-left">
        Nos dedicamos a la venta, diseño, planificación y producción de
        construcciones en Sistemas Tradicionales: <span>Wood Frame</span>, <span>Steel Frame</span> y
        <span>Húmedo</span>; y a la elaboración de aberturas para nuestras edificaciones, con
        un acompañamiento personalizado durante todo el proceso.
      </p>
    </section>
  </main>
</template>

<script>
import aosMixin from '@/mixins/aos'

export default {
  name: 'ActivityContainer',
  mixins: [aosMixin],
}
</script>

<style lang='scss' scoped>
@import '@/assets/main.scss';

.activity_mainWrapper {
  overflow-x: hidden;
  min-height: 100vh;
  padding: 6em 6em 4em 6em;
  background: $lightblue url('@/assets/images/lightblue-pattern.svg') no-repeat
    fixed center 20em;
  -webkit-background: $lightblue url('@/assets/images/lightblue-pattern.svg')
    no-repeat fixed center 20em;
  background-size: contain;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    color: $green;
    font-size: 68px;
    font-weight: 900;
    margin-bottom: 15px;
    text-align: center;
  }

  .activity_infoWrapper {
    display: flex;
    gap: 10px;
    justify-content: center;
    align-items: center;
    padding: 0 1.5em;
    margin-bottom: 4em;

    p {
      color: $white;
      font-size: 26px;
      font-weight: 100;
      line-height: 1.5;
      width: 40%;
      span {
        color: $green;
        font-weight: 600;
      }
    }

    .activity_animation {
      max-width: 650px;
      min-width: 100px;
      object-fit: contain;
    }
  }
}

@media (max-width: 1024px) {
  .activity_mainWrapper {
    min-height: auto;
    padding: 6em 8% 4em 8%;
    background-size: 250%;
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
      font-size: 48px;
      line-height: 1.3;
      font-weight: 900;
      margin-bottom: 15px;
      text-align: left;
    }

    .activity_infoWrapper {
      display: flex;
      flex-direction: column;
      gap: 0;
      justify-content: center;
      align-items: center;
      padding: 0;
      margin-bottom: 2em;

      p {
        color: $white;
        font-size: 22px;
        font-weight: 100;
        line-height: 1.4;
        width: auto;
      }

      .activity_animation {
        margin-bottom: 0;
        order: 1;
      }
    }
  }
}
</style>
