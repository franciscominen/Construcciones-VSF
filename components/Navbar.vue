<template>
  <nav>
    <img src="@/assets/images/logo-1.svg" alt="Viviendas Santa Fe" />
    <ul>
      <li><NuxtLink to="/">Inicio</NuxtLink></li>
      <li><NuxtLink to="/">Construcciones</NuxtLink></li>
      <li><NuxtLink to="/">Modelos</NuxtLink></li>
      <li><NuxtLink to="/">Equipo</NuxtLink></li>
      <li><NuxtLink to="/contact" class="contact_navLink">Contacto</NuxtLink></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
}
</script>

<style lang='scss' scoped>
@import '@/assets/main.scss';

nav {
  z-index: 5;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: transparent;
  position: fixed;
  width: 100%;
  top: 0;
  padding: 28px 5em;
  img {
    width: 180px;
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
      }
      .contact_navLink {
        border: 1px solid $lightblue;
        padding: 8px 18px;
        border-radius: 5px;
      }
    }
  }
}
</style>