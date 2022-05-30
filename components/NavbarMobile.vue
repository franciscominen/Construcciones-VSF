<template>
  <nav class="mobile-nav">
    <div class="navClose_header">
      <img
        src="@/assets/images/logo-1.svg"
        alt=""
        class="nav_logo"
        @click="goTo({ path: '/', hash: '#home' })"
      />
      <img
        src="@/assets/images/open-nav-button.svg"
        alt=""
        @click="handleMobileMenu"
      />
    </div>
    <div
      :class="[isMobileMenuOpen ? 'navOpen_wrapper' : 'navOpen_wrapper-close']"
    >
      <div class="navOpen_header">
        <img src="@/assets/images/logo-3.svg" alt="" class="nav_logo" />
        <img
          src="@/assets/images/close-nav-button.svg"
          alt="nav_closeBtn"
          @click="handleMobileMenu"
        />
      </div>
      <ul class="navLinks_mobile">
        <li>
          <NuxtLink to="/" class="navLink_mobile">
            <button @click="handleMobileMenu">
              <img src="@/assets/images/icons/inicio-icon.svg" alt="" />
              <h4>Inicio</h4>
            </button>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/constructions" class="navLink_mobile">
            <button @click="handleMobileMenu">
              <img src="@/assets/images/icons/constructions-icon.svg" alt="" />
              <h4>Construcciones</h4>
            </button>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/models" class="navLink_mobile">
            <button>
              <img src="@/assets/images/icons/models-icon.svg" alt="" />
              <h4>Modelos</h4>
            </button>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/team" class="navLink_mobile">
            <button>
              <img src="@/assets/images/icons/team-icon.svg" alt="" />
              <h4>Equipo</h4>
            </button>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/contact" class="navLink_mobile" style="border: none">
            <button>
              <img src="@/assets/images/icons/contact-icon.svg" alt="" />
              <h4>Contacto</h4>
            </button>
          </NuxtLink>
        </li>
      </ul>
      <SocialMediaLinks :classColor="`socialMedia_white`" />
    </div>
  </nav>
</template>

<script>
import SocialMediaLinks from '@/components/SocialMediaLinks.vue'

export default {
  name: 'NavbarMobile',
  components: { SocialMediaLinks },
  data() {
    return {
      isMobileMenuOpen: false,
    }
  },
  methods: {
    handleMobileMenu() {
      return (this.isMobileMenuOpen = !this.isMobileMenuOpen)
    },
    goTo(path) {
      return this.$router.push(path)
    },
    goToAndCloseMenu(path) {
      this.handleMobileMenu()
      return this.$router.push(path)
    },
  },
}
</script>

<style lang='scss' scoped>
@import '@/assets/main.scss';

.mobile-nav {
  background: $lightblue;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 10;

  .navClose_header {
    background: $white;
    padding: 22px 5%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .nav_logo {
      min-width: 120px;
      max-width: 160px;
      object-fit: contain;
    }
  }

  .navOpen_wrapper {
    transform: translateY(0);
    transition: .6s;
    background: $lightblue;
    position: absolute;
    width: 100%;
    height: 100vh;
    z-index: 11;
    top: 0;
    &-close {
      @extend .navOpen_wrapper;
      transform: translateY(-100vh);
      transition: .6s cubic-bezier(0.215, 0.61, 0.355, 1) ;
    }

    .navOpen_header {
      display: flex;
      justify-content: space-between;
      padding: 22px 5%;
    }

    .navLinks_mobile {
      display: flex;
      flex-direction: column;
      padding: 20px 15%;
      margin-bottom: 22px;

      .navLink_mobile {
        display: flex;
        align-items: center;
        border-bottom: 1px solid $white;
        padding: 12px 0;
        width: 100%;
        button {
          display: flex;
          align-items: center;
          width: 100%;
          img {
            width: 58px;
          }
          h4 {
            color: $white;
            font-size: 24px;
            font-weight: 300;
          }
        }
      }

      .nuxt-link-active {
        button {
          h4 {
            font-weight: 600;
          }
        }
      }
    }
  }
}
</style>
