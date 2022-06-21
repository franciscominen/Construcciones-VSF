<template>
  <div class="main">
    <Navbar class="navbar-desktop" />
    <NavbarMobile class="navbar-mobile" />
    <ConsultModal />
    <section class="modelDescript_container">
      <section
        class="carousel_wrapper"
        data-aos="fade-in"
        data-aos-duration="900"
      >
        <ModelImagesCarousel :model="model" />
        <article>
          <h1>Modelo {{ model.name }}</h1>
          <ul>
            <li>
              <img src="@/assets/images/icons/mts.svg" alt="" />
              <h3>{{ model.mts }}mts Superficie Total</h3>
            </li>
            <li>
              <img src="@/assets/images/icons/bed.svg" alt="" />
              <h3>{{ model.cantHab }} Dormitorios</h3>
            </li>
            <li>
              <img src="@/assets/images/icons/bath.svg" alt="" />
              <h3>{{ model.cantBath }} Baños</h3>
            </li>
            <li>
              <img src="@/assets/images/icons/kitchen.svg" alt="" />
              <h3>Cocina</h3>
            </li>
            <li v-if="model.living">
              <img src="@/assets/images/icons/living.svg" alt="" />
              <h3>Living</h3>
            </li>
            <li v-if="model.comedor">
              <img src="@/assets/images/icons/comedor.svg" alt="" />
              <h3>Comedor</h3>
            </li>
            <li v-if="model.car">
              <img src="@/assets/images/icons/car.svg" alt="" />
              <h3>Cochera Galería</h3>
            </li>
          </ul>
        </article>
      </section>
      <p class="model_description" data-aos="fade-up" data-aos-duration="700">
        {{model.descrip}}
        <br /><br />
        Los planos de nuestros modelos son totalmente PERSONALIZABLES y se
        pueden rediseñar según el confort y la necesidad del cliente.
        <br /><br />
        <span @click="goToContact"
          >Consulta sin compromiso por el modelo {{ model.name }}</span
        >.
      </p>
      <NuxtLink to="/models">Volver a Modelos</NuxtLink>
    </section>
    <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import NavbarMobile from '@/components/NavbarMobile.vue'
import ConsultModal from '@/components/ConsultModal.vue'
import Footer from '@/components/Footer.vue'
import ModelImagesCarousel from '~/components/models/ModelImagesCarousel.vue'
import aosMixin from '@/mixins/aos'

export default {
  name: 'ModelDescription',
  mixins: [aosMixin],
  components: {
    Footer,
    Navbar,
    NavbarMobile,
    ConsultModal,
    ModelImagesCarousel,
  },
  computed: {
    models() {
      return this.$store.state.models
    },
    modelParam() {
      return this.$router.currentRoute.params.model
    },
    model() {
      const model = this.models.filter((model) => {
        return model.name === this.modelParam
      })
      return Object.assign({}, ...model)
    },
  },
  methods: {
    goToContact() {
      this.$router.replace('/contact')
    },
  },
  async fetch() {
    await this.$store.dispatch('getModels')
  },
  mounted() {},
}
</script>

<style lang="scss" scoped>
@import '@/assets/main.scss';
.main {
  background: $white url('@/assets/images/home-bg.svg') no-repeat fixed center
    20em;
  background-size: contain;
  overflow-x: hidden;
}

.modelDescript_container {
  max-width: 60em;
  width: 100%;
  object-fit: cover;
  margin: 0 auto;
  padding: 8em 0 4em 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .carousel_wrapper {
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;

    article {
      border-left: 2px solid $lightblue;
      padding-left: 18px;
      height: 400px;
      display: flex;
      flex-direction: column;
      gap: 26px;
      color: $blue;
      h1 {
        font-size: 46px;
        font-weight: 900;
        line-height: 0.8;
      }
      ul {
        display: flex;
        flex-direction: column;
        gap: 14px;
        li {
          display: flex;
          align-items: center;
          gap: 12px;
          img {
            border-radius: 4px;
            width: 36px;
            background: $lightblue;
            padding: 3px;
          }
          h3 {
            color: $lightblue;
            font-size: 18px;
            font-weight: 600;
          }
        }
      }
    }
  }

  .model_description {
    color: $lightblue;
    font-size: 18px;
    font-weight: 400;
    text-align: center;
    margin: 16px auto;
    line-height: 1.6;
    span {
      color: $blue;
      cursor: pointer;
      &:hover {
        text-decoration: underline;
      }
    }
  }

  a {
    color: $lightblue;
    font-weight: 600;
    padding: 16px 22px;
    border: 1px solid $lightblue;
    border-radius: 4px;
    margin-top: 32px;
    transition: 0.2s;
    &:hover {
      color: $white;
      background: $lightblue;
      border: 1px solid $lightblue;
    }
  }
}

@media (max-width: 900px) {
  .modelDescript_container {
    padding: 6.5em 16px 2em 16px;
    .carousel_wrapper {
      flex-direction: column;
      gap: 0px;
      margin-bottom: 1em;
      article {
        height: auto;
        border-left: none;
        padding-left: 0;
      }
    }
    .model_description {
      max-width: 100%;
    }
  }
}
</style>
