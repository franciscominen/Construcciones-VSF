<template>
  <main>
    <header>
      <img src="@/assets/images/logo-4.svg" alt="" />
      <h1>Admin Panel</h1>
    </header>

    <section class="adminForm_wrapper">
      <h2>Iniciar Sesion</h2>
      <input type="text" v-model="auth.email" placeholder="Usuario" />
      <input
        v-model="auth.password"
        type="password"
        placeholder="Contrasenia"
      />
      <button @click="login" :disabled="!isValidForm">Ingresar</button>
    </section>

    <div class="errorLogin_toast" v-if="errorToast">
      <p>
        Nombre de Usuario o Contrasenia incorrectos. <br />Intente nuevamente.
      </p>
    </div>

    <NuxtLink to="/">Regresar</NuxtLink>
  </main>
</template>

<script>
export default {
  name: 'AdminSignIn',
  data() {
    return {
      auth: {
        email: '',
        password: '',
      },
      emailInput: '',
      passwordInput: '',
      errorToast: false,
    }
  },
  computed: {
    isValidForm() {
      const isValid =
        this.auth.email.length > 1 && this.auth.password.length > 1
      return isValid
    },
  },
  methods: {
    async login() {
      try {
        await this.$fire.auth.signInWithEmailAndPassword(
          this.auth.email,
          this.auth.password
        )
        console.log('Autenticado')
        $nuxt.$router.push('/admin/panel')
      } catch (error) {
        this.errorToast = !this.errorToast
        return console.error(error)
      }
    },
  },
  mounted() {},
}
</script>

<style lang='scss' scoped>
@import '@/assets/main.scss';

main {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background: $lightblue;
  width: 100%;
  min-height: 100vh;
  color: $white;

  .errorLogin_toast {
    -webkit-animation: flip-in-hor-bottom 4s
      cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    animation: flip-in-hor-bottom 4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    margin-top: 22px;
  }

  header {
    padding: 28px;
    img {
      max-width: 280px;
      margin-bottom: 16px;
    }
    h1 {
      font-size: 48px;
    }
  }

  .adminForm_wrapper {
    display: flex;
    flex-direction: column;
    gap: 22px;
    background: $white;
    color: $blue;
    padding: 42px 24px;
    border-radius: 4px 4px 44px 4px;

    input {
      border: 1px solid $lightblue;
      border-radius: 4px;
      padding: 16px;
      font-size: 18px;
      background: transparent;
      font-family: $textFont;
      width: 20em;
      color: $lightblue;
      font-weight: 600;
      transition: .2s;
      &:focus {
        outline: none;
        border: 1px solid $green;
      }
    }
    button {
      font-size: 22px;
      font-weight: 600;
      width: 100%;
      background: $lightblue;
      padding: 18px;
      color: $white;
      border-radius: 4px;
      transition: 0.2s;
      &:disabled {
        transition: 0.2s;
        background: rgb(158, 158, 158);
        pointer-events: none;
      }
      &:hover {
        transition: 0.2s;
        background: $green;
      }
    }
  }

  a {
    color: $white;
    font-size: 22px;
    text-decoration: underline;
    margin-top: auto;
    padding: 24px;
  }
}

/**
 * ----------------------------------------
 * animation flip-in-hor-bottom
 * ----------------------------------------
 */
@-webkit-keyframes flip-in-hor-bottom {
  0% {
    -webkit-transform: rotateX(80deg);
    transform: rotateX(80deg);
    opacity: 0;
  }
  25% {
    -webkit-transform: rotateX(0);
    transform: rotateX(0);
    opacity: 1;
  }
  50% {
    -webkit-transform: rotateX(0);
    transform: rotateX(0);
    opacity: 1;
    display: none;
  }
  100% {
    -webkit-transform: rotateX(-70deg);
    transform: rotateX(-70deg);
    opacity: 0;
  }
}
@keyframes flip-in-hor-bottom {
  0% {
    -webkit-transform: rotateX(80deg);
    transform: rotateX(80deg);
    opacity: 0;
  }
  25% {
    -webkit-transform: rotateX(0);
    transform: rotateX(0);
    opacity: 1;
  }
  50% {
    -webkit-transform: rotateX(0);
    transform: rotateX(0);
    opacity: 1;
  }
  100% {
    -webkit-transform: rotateX(-70deg);
    transform: rotateX(-70deg);
    opacity: 0;
    display: none;
  }
}
</style>
