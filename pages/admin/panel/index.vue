<template>
  <main>
    <nav>
      <img src="@/assets/images/logo-3.svg" alt="" />
      <h1>Admin Panel</h1>

      <ul>
        <li>
          <button @click="showConsults">Consultas</button>
        </li>
        <li>
          <button @click="showModels">Modelos</button>
        </li>
        <li>
          <button @click="signOut">
            <img src="@/assets/images/icons/logout.svg" alt="" />
          </button>
        </li>
      </ul>
    </nav>

    <ConsultasView v-if="!toggleView" :consults="consults" />
    <EditModelosView v-else />
  </main>
</template>

<script>
import ConsultasView from '@/components/admin/ConsultasView.vue'
import EditModelosView from '@/components/admin/EditModelosView.vue'

export default {
  name: 'AdminPanel',
  components: { ConsultasView, EditModelosView },
  data() {
    return {
      toggleView: false,
    }
  },
  computed: {
    consults() {
      return this.$store.state.consults
    },
    ansConsults() {
      let consults = this.$store.getters.getConsults.filter((consult) => {
        consult.answered === true
      })
      return consults
    },
  },
  async fetch() {
    await this.$store.dispatch('setConsults')
  },
  methods: {
    async signOut() {
      await this.$fire.auth.signOut()
    },
    showConsults() {
      return (this.toggleView = false)
    },
    showModels() {
      return (this.toggleView = true)
    },
  },
}
</script>

<style lang='scss' scoped>
@import '@/assets/main.scss';
main {
  width: 100%;
  min-height: 100vh;
  background: $blue;
  color: $white;
  padding: 0 22px;

  nav {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
    border-bottom: 1px solid $white;
    h1 {
      font-size: 38px;
      color: $green;
      margin-right: auto;
      margin-left: 22px;
    }

    ul {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 22px;
      li button {
        color: $white;
        font-size: 24px;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          width: 32px;
          margin-left: 22px;
        }
      }
    }
  }
}

@media (max-width: 730px) {
  main {
    padding: 0 4px;
    nav {
      padding: 16px 8px;
      h1 {
        display: none;
      }
      img {
        width: 48px;
      }
      ul {
        gap: 8px;
        li button {
          font-size: 18px;

          img {
            width: 28px;
            margin-left: 16px;
          }
        }
      }
    }
  }
}
</style>