<template>
  <div>
    <div class="main-container">
      <Navbar class="navbar-desktop" />
      <NavbarMobile class="navbar-mobile" />
      <ConsultModal />
      <section class="constructions_mainWrapper" v-if="showCards">
        <h1 data-aos="fade-down" data-aos-duration="700">
          Procesos Constructivos
        </h1>
        <p data-aos="fade-down" data-aos-duration="700">
          En Viviendas Santa Fe <span style="color: #73E262">(VSF Construcciones)</span> dominamos 3 sistemas
          constructivos, para ofrecer a nuestros clientes un servicio que se
          adapte a su gusto.
        </p>
        <section
          class="constructions_cardsWrapper"
          data-aos="fade-up"
          data-aos-duration="700"
          data-aos-delay="500"
        >
          <div class="constructions_card constructions_card-steel">
            <div>
              <img src="@/assets/images/icons/steel.svg" alt="" />
              <span>
                <h2>Steel Frame</h2>
                <button @click="onShowSteelFrame">Que es?</button>
              </span>
            </div>
          </div>
          <div class="constructions_card constructions_card-wood">
            <div>
              <img src="@/assets/images/icons/wood.svg" alt="" />
              <span>
                <h2>Wood Frame</h2>
                <button @click="onShowWoodFrame">Que es?</button></span
              >
            </div>
          </div>
          <div class="constructions_card constructions_card-hibrida">
            <div>
              <img src="@/assets/images/icons/hibrid.svg" alt="" />
              <span>
                <h2>Húmeda</h2>
                <button @click="onShowHibrido">Que es?</button></span
              >
            </div>
          </div>
        </section>
      </section>
      <SteelFrameInfo v-if="showSteelFrame" :onGoBackSteel="onGoBackSteel" />
      <WoodFrameInfo v-if="showWoodFrame" :onGoBackWood="onGoBackWood" />
      <HibridoInfo v-if="showHibrido" :onGoBackHibrido="onGoBackHibrido" />
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import NavbarMobile from '@/components/NavbarMobile.vue'
import SteelFrameInfo from '@/components/contructions/SteelFrameInfo.vue'
import WoodFrameInfo from '@/components/contructions/WoodFrameInfo.vue'
import HibridoInfo from '@/components/contructions/HibridoInfo.vue'
import Footer from '@/components/Footer.vue'
import ConsultModal from '@/components/ConsultModal.vue'
import aosMixin from '@/mixins/aos'

export default {
  name: 'Constructions',
  mixins: [aosMixin],
  components: {
    Navbar,
    NavbarMobile,
    SteelFrameInfo,
    WoodFrameInfo,
    HibridoInfo,
    Footer,
    ConsultModal,
  },
  data() {
    return {
      showSteelFrame: false,
      showWoodFrame: false,
      showHibrido: false,
      showCards: true,
    }
  },
  methods: {
    onShowSteelFrame() {
      scroll(0, 0)
      this.showCards = false
      this.showSteelFrame = true
    },
    onGoBackSteel() {
      scroll(0, 0)
      this.showSteelFrame = false
      this.showCards = true
    },
    onShowWoodFrame() {
      scroll(0, 0)
      this.showCards = false
      this.showWoodFrame = true
    },
    onGoBackWood() {
      scroll(0, 0)
      this.showWoodFrame = false
      this.showCards = true
    },
    onShowHibrido() {
      scroll(0, 0)
      this.showCards = false
      this.showHibrido = true
    },
    onGoBackHibrido() {
      scroll(0, 0)
      this.showHibrido = false
      this.showCards = true
    },
  },
}
</script>

<style lang='scss' scoped>
@import '@/assets/main.scss';

.main-container {
  overflow-x: hidden;
  min-height: 100vh;
  background-color: $lightblue;
  background: $lightblue url('@/assets/images/lightblue-pattern.svg') no-repeat
    fixed center 20em;
  background-size: contain;

  .constructions_mainWrapper {
    padding: 8em 0 0 0;
    color: $white;
    text-align: center;
    h1 {
      font-size: 48px;
      margin-bottom: 12px;
    }
    p {
      font-size: 18px;
      width: 38em;
      margin: 0 auto;
    }

    .constructions_cardsWrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 32px;
      margin-top: 30px;

      .constructions_card {
        border: 2px solid $white;
        border-radius: 60px 6px 6px 6px;
        transition: 0.2s;
        width: 20em;
        height: 23em;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;

        div {
          opacity: 0;
          transition: 0.3s;
          background: linear-gradient(
            0deg,
            rgba(93, 134, 239, 1) 18%,
            rgba(93, 134, 239, 0) 100%
          );
          display: flex;
          align-items: flex-end;
          padding: 20px 20px 30px 20px;
          height: 20em;
          border-radius: 4px 4px 4px 4px;
          img {
            margin-right: 16px;
          }
          span {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            width: 100%;
            h2 {
              font-size: 35px;
              margin-bottom: 8px;
            }
            button {
              width: 100%;
              color: $white;
              border: 1px solid $green;
              border-radius: 4px;
              font-size: 18px;
              font-weight: 600;
              padding: 8px 16px;
              transition: 0.2s;
              &:hover {
                background: $green;
              }
            }
          }
        }
        &:hover {
          div {
            opacity: 1;
          }
        }
        &-steel {
          @extend .constructions_card;
          background: url('@/assets/images/steelframe.png') no-repeat center;
        }
        &-wood {
          @extend .constructions_card;
          background: url('@/assets/images/woodframe.png') no-repeat center;
        }
        &-hibrida {
          @extend .constructions_card;
          background: url('@/assets/images/hibrido.png') no-repeat center;
        }
      }
    }
  }
}

@media (max-width: 1044px) {
  .main-container {
    min-height: auto;
    background-color: $lightblue;
    background-size: 250%;

    .constructions_mainWrapper {
      padding: 6em 12px 4em 12px;

      h1 {
        font-size: 28px;
        margin-bottom: 12px;
      }
      p {
        font-size: 16px;
        width: auto;
      }

      .constructions_cardsWrapper {
        flex-direction: column;

        .constructions_card {
          div {
            opacity: 1;
          }
        }
      }
    }
  }
}
</style>
