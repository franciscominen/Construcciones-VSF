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
        quam? Est optio nam error quod, labore a consequuntur similique culpa.
      </p>
      <section>
        <ModelCard
          :name="`Modelo 1234`"
          :cantDorm="`3`"
          :cantBath="`2`"
          :mts="`123`"
          :car="true"
        />
        <ModelCard
          :name="`Modelo 4567`"
          :cantDorm="`2`"
          :cantBath="`1`"
          :mts="`84`"
          :car="false"
        />
        <ModelCard
          :name="`Modelo 7890`"
          :cantDorm="`1`"
          :cantBath="`1`"
          :mts="`72`"
          :car="true"
        />
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

export default {
  name: 'Models',
  components: { Footer, Navbar, NavbarMobile, ConsultModal, ModelCard },
}
</script>

<style lang="scss" scoped>
@import '@/assets/main.scss';
div {
  background: $white url('@/assets/images/home-bg.svg') no-repeat fixed center
    20em;
  background-size: contain;

  .models_mainContainer {
    padding: 8em 7% 4em 7%;
    h1 {
      color: $lightblue;
      font-size: 48px;
      margin-bottom: 12px;
    }
    p {
      color: $lightblue;
      font-size: 18px;
      width: 70%;
      margin-bottom: 32px;
    }
    section {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
}
@media (max-width: 1375px) {
  div {
    background-size: 250%;
    .models_mainContainer {
      padding: 7em 7% 4em 7%;
      h1 {
        font-size: 36px;
      }
      p {
        width: auto;
      }
      section {
       flex-direction: column;
       gap: 28px;
      }
    }
  }
}
</style>