<template>
  <nav>
    <img
      @click="goTo({ path: '/', hash: '#home' })"
      src="@/assets/images/logo-1.svg"
      alt="Viviendas Santa Fe"
    />
    <ul>
      <li>
        <button @click="handleToggleDropdown">Inicio</button>
        <ul
          :class="[
            toggleDropdown ? 'navbar_dropdown' : 'navbar_dropdown--disabled',
          ]"
        >
          <li>
            <button
              @click="closeDropdownAndgoTo({ path: '/', hash: '#about' })"
            >
              <strong>></strong> Nosotros
            </button>
          </li>
          <li>
            <button
              @click="
                closeDropdownAndgoTo({ path: '/', hash: '#testimonials' })
              "
            >
              <strong>></strong> Testimonios
            </button>
          </li>
          <li>
            <button
              @click="closeDropdownAndgoTo({ path: '/', hash: '#activity' })"
            >
              <strong>></strong> Que hacemos
            </button>
          </li>
        </ul>
      </li>
      <li><NuxtLink to="/constructions">Construcciones</NuxtLink></li>
      <li><NuxtLink to="/models">Modelos</NuxtLink></li>
      <li><NuxtLink to="/">Equipo</NuxtLink></li>
      <li>
        <NuxtLink to="/contact" class="contact_navLink">Contacto</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/admin"
          ><img
            src="@/assets/images/icons/admin-icon.svg"
            alt="Sing In"
            class="admin_icon"
        /></NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      toggleDropdown: false,
    }
  },
  methods: {
    handleToggleDropdown() {
      return (this.toggleDropdown = !this.toggleDropdown)
    },
    goTo(location) {
      this.$router.push(location)
    },
    closeDropdownAndgoTo(location) {
      this.handleToggleDropdown()
      this.$router.push(location)
    },
  },
}
</script>

<style lang='scss' scoped>
@import '@/assets/main.scss';

nav {
  z-index: 5;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: $white;
  position: fixed;
  width: 100%;
  /* top: 0; */
  padding: 24px 5%;
  img {
    width: 180px;
    cursor: pointer;
  }
  ul {
    align-self: end;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 56px;
    li {
      a {
        font-size: 18px;
        font-weight: 500;
        color: $lightblue;
        transition: 0.2s;
        .admin_icon {
          transition: 0.2s;
          max-width: 26px;
          margin: auto 0;
        }
        &:hover {
          color: $green;
          .admin_icon {
            filter: brightness(0) saturate(100%) invert(74%) sepia(11%)
              saturate(1948%) hue-rotate(65deg) brightness(101%) contrast(97%);
          }
        }
      }

      button {
        font-size: 18px;
        font-weight: 500;
        color: $lightblue;
        transition: 0.2s;
        &:hover {
          color: $green;
        }
      }
      .contact_navLink {
        border: 1px solid $lightblue;
        padding: 8px 18px;
        border-radius: 5px;
        transition: 0.2s;
        &:hover {
          border: 1px solid $green;
          color: $green;
        }
      }
    }
  }
  .navbar_dropdown {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    position: absolute;
    gap: 16px;
    margin-top: 18px;
    background: $white;
    padding: 32px 22px 22px 22px;
    margin: 0 -24px;
    border-radius: 6px;
    transition: 0.5s ease;
    -webkit-transform: scaleY(1);
    transform: scaleY(1);
    -webkit-transform-origin: 100% 0%;
    transform-origin: 100% 0%;
    &--disabled {
      @extend .navbar_dropdown;
      transition: 0.5s ease;
      -webkit-transform: scaleY(0);
      transform: scaleY(0);
      -webkit-transform-origin: 100% 0%;
      transform-origin: 100% 0%;
    }
    li {
      color: $lightblue;
      font-family: $textFont;
      font-size: 16px;
    }
  }
}
.nuxt-link-exact-active {
  color: $blue;
}
</style>