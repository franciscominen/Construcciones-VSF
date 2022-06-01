<template>
  <div>
    <Navbar class="navbar-desktop" />
    <NavbarMobile class="navbar-mobile" />
    <ConsultModal />
    <main class="models_mainContainer">
      <h1>Nuestros Principales Modelos</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error provident
        consequuntur eius dolores sapiente doloribus commodi quod veritatis ipsa
        quam? Tambien, puede
        <NuxtLink to="/contact"
          >consultar por un modelo perzonalizado.</NuxtLink
        >
      </p>
      <Spinner
        v-if="isLoading"
        style="width: 60px; height: 60px; margin: 0 auto; position: relative; top: 8em;"
        >Cargando..</Spinner
      >
      <section class="cards_container" v-else>
        <ModelCard v-for="model in models" :key="model.name" :model="model" />
      </section>
    </main>

    <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import NavbarMobile from '@/components/NavbarMobile.vue'
import ConsultModal from '@/components/ConsultModal.vue'
import Footer from '@/components/Footer.vue'
import ModelCard from '~/components/models/ModelCard.vue'
import Spinner from '~/components/Spinner.vue'

export default {
  name: 'Models',
  components: {
    Footer,
    Navbar,
    NavbarMobile,
    ConsultModal,
    ModelCard,
    Spinner,
  },
  data() {
    return {
      isLoading: false,
    }
  },
  computed: {
    models() {
      return this.$store.state.models
    },
  },
  async fetch() {
    this.isLoading = true
    await this.$store.dispatch('getModels')
    this.isLoading = false
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/main.scss';
div {
  background: $white url('@/assets/images/home-bg.svg') no-repeat fixed center
    20em;
  background-size: contain;

  .models_mainContainer {
    padding: 7em 0 4em 0;
    margin: 0 auto;
    min-height: 100vh;
    max-width: 75em;
    width: 100%;
    object-fit: cover;
    h1 {
      color: $lightblue;
      font-size: 48px;
      margin-bottom: 12px;
    }
    p {
      color: $lightblue;
      font-size: 18px;
      font-weight: 400;
      width: 80%;
      margin-bottom: 32px;
      a {
        color: $green;
        transition: 0.2s;
        &:hover {
          transition: 0.2s;
          text-decoration: underline;
        }
      }
    }
    .cards_container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 22px;
    }
  }
}
@media (max-width: 900px) {
  div {
    background-size: 250%;
    .models_mainContainer {
      padding: 6em 22px 2em 22px;
      h1 {
        font-size: 32px;
      }
      p {
        width: 100%;
      }
      .cards_container {
        gap: 32px;
      }
    }
  }
}
</style>