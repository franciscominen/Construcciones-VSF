<template>
  <div class="main_container">
    <section>
      <div class="info_container" data-aos="fade-right" data-aos-duration="500">
        <h1>Wood Frame</h1>
        <p>
          Es un sistema constructivo en seco que emplea perfiles de madera en su
          estructura junto con otros componentes de aislación, sujeción,
          división y terminación. Se caracteriza por ser un estilo de
          construcción sustentable (por el empleo de materiales renovables),
          por su optimización en materiales, su construcción ligera, su confort
          térmico y acústico, entre otros beneficios.
        </p>
      </div>
      <img
        src="@/assets/images/steel2.png"
        alt=""
        data-aos="fade-left"
        data-aos-duration="500"
        data-aos-delay="200"
      />
    </section>
    <section>
      <img
        src="@/assets/images/steel2.png"
        alt=""
        data-aos="fade-right"
        data-aos-delay="400"
        data-aos-duration="500"
      />
      <p data-aos="fade-left" data-aos-duration="500" data-aos-delay="600">
        En Viviendas Santa Fe (VSF Construcciones) nos especializamos en este
        sistema constructivo. En nuestra fábrica nos ocupamos desde armado de
        las estructuras de madera pasando al montaje y acabado final de la obra
        en su terreno. Contamos con personal especializado que se ocupa y
        supervisa de todo el proceso, para que el resultado sea como lo
        proyectamos: funcional y perfecto. Nuestras obras se caracterizan por
        ser de Construcción Mixta. Empleamos el Sistema Tradicional Húmedo (uso
        de ladrillos, cemento y hormigón) para el revestimiento y estructuras
        externas de la obra.
      </p>
    </section>
    <button class="go-back" @click="onGoBackWood">
      <img src="@/assets/images/icons/go-back.svg" alt="" />
    </button>
  </div>
</template>

<script lang='ts'>
import aosMixin from '@/mixins/aos'

export default {
  name: 'WoodFrameInfo',
  mixins: [aosMixin],
  props: {
    onGoBackWood: { type: Function },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/main.scss';

.main_container {
  width: 65%;
  margin: 0 auto;
  padding: 8em 0 4em 0;
  display: flex;
  flex-direction: column;
  gap: 22px;

  .go-back {
    position: absolute;
    left: 3%;
    top: 11.5em;
    transition: 0.2s;
    img {
      width: 32px;
    }
    &:hover {
      transform: scale(1.1);
    }
  }
  section {
    display: flex;
    justify-content: flex-start;
    gap: 22px;
    .info_container {
      color: $white;
      text-align: left;
      h1 {
        font-size: 58px;
        margin-bottom: 22px;
        color: $blue;
      }
      p {
        font-size: 18px;
        line-height: 1.6;
      }
    }
    img {
      max-width: 480px;
      width: 100%;
      object-fit: cover;
    }
    p {
      font-size: 18px;
      line-height: 1.6;
      color: $white;
    }
  }
}

@media (max-width: 1044px) {
  .main_container {
    width: auto;
    padding: 6em 18px 4em 19px;

    .go-back {
      position: inherit;
      margin-right: auto;
    }
    section {
      flex-direction: column;
      .info_container {
        h1 {
          font-size: 48px;
          margin-bottom: 16px;
        }
      }
      img {
        border: 2px solid $white;
        border-radius: 60px 6px 60px 6px;
        order: 3;
      }
    }
  }
}
</style>
