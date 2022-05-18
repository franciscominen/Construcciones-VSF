<template>
  <nav class="mobile-nav">
    <div class="navClose_header">
      <img src="@/assets/images/logo-1.svg" alt="" class="nav_logo" @click="goTo('#home')"/>
      <img
        src="@/assets/images/open-nav-button.svg"
        alt=""
        @click="handleMobileMenu"
      />
    </div>
    <div :class="[isMobileMenuOpen ? 'navOpen_wrapper' : 'navOpen_wrapper-close']">
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
          <NuxtLink to="" class="navLink_mobile">
            <img src="@/assets/images/icons/inicio-icon.svg" alt="" />
            <h4>Inicio</h4>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="" class="navLink_mobile">
            <img src="@/assets/images/icons/constructions-icon.svg" alt="" />
            <h4>Construcciones</h4>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="" class="navLink_mobile">
            <img src="@/assets/images/icons/models-icon.svg" alt="" />
            <h4>Modelos</h4>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="" class="navLink_mobile">
            <img src="@/assets/images/icons/team-icon.svg" alt="" />
            <h4>Equipo</h4>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="" class="navLink_mobile" style="border: none">
            <img src="@/assets/images/icons/contact-icon.svg" alt="" />
            <h4>Contacto</h4>
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
    goTo(path){
     return this.$router.push(path);
    }
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
    background: $lightblue;
    position: absolute;
    width: 100%;
    height: 100vh;
    z-index: 11;
    top: 0;

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
        img {
          width: 72px;
        }
        h4 {
          color: $white;
          font-size: 28px;
          font-weight: 500;
        }
      }
    }
  }
  .navOpen_wrapper-close {
    display: none;
  }
}
</style>
