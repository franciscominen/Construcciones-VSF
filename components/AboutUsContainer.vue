<template>
  <main class="aboutUs_mainWrapper" id="about">
    <h1 data-aos="zoom-in" data-aos-duration="800">¿Quiénes somos?</h1>
    <section class="aboutUs_infoWrapper">
      <p data-aos="fade-right" data-aos-duration="800">
        Somos una empresa argentina ubicada en la Provincia de Santa Fe, con
        oficinas en la Capital y en la localidad de San Jorge. Abrimos nuestras
        puertas en el año 2017, conformando un equipo de trabajo que se ocupa de
        ofrecer un servicio de construcción amplio, unido por un acompañamiento
        personal cercano con nuestros clientes durante todo el proceso,
        iniciando en la venta y finalizando con la entrega de la llave de la
        edificación. <br /><br />Brindando seguridad, resistencia y confort a
        todo el país.<br />
        Trabajamos por una <span style="color: #73E262; font-weight: 500">#ConstrucciónSinEstrés</span>.
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
  padding: 8em 6em 4em 6em;
  background: $white url('@/assets/images/home-bg.svg') no-repeat fixed center
    20em;
  background-size: contain;
  -webkit-background: $white url('@/assets/images/home-bg.svg') no-repeat fixed
    center 20em;
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
      font-size: 22px;
      font-weight: 400;
      line-height: 1.5;
      width: 50%;
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
    background: $white url('@/assets/images/home-bg.svg') no-repeat scroll top;
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
