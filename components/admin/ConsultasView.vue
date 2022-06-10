<template>
  <main>
    <h1>Consultas</h1>

    <ul class="toggleConsults_buttons">
      <li>
        <button
          @click="showAnsweredConsults"
          :class="[!showConsults ? 'active' : '']"
        >
          Respondidas
        </button>
      </li>
      <li><figure></figure></li>
      <li>
        <button
          @click="showNotAnsweredConsults"
          :class="[!showConsults ? '' : 'active']"
        >
          Sin responder<span v-if="notAnsweredConsults.length">{{ notAnsweredConsults.length }}</span>
        </button>
      </li>
    </ul>

    <section class="consultCards_container" v-if="!showConsults">
      <ConsultCard
        :showConsults="showConsults"
        :consult="consult"
        v-for="consult in answeredConsults"
        :key="consult.id"
      />
    </section>
    <section class="consultCards_container" v-else>
      <ConsultCard
        :showConsults="showConsults"
        :consult="consult"
        v-for="consult in notAnsweredConsults"
        :key="consult.id"
      />
    </section>
  </main>
</template>

<script>
import ConsultCard from '@/components/admin/ConsultCard'
export default {
  name: 'Consultas',
  components: { ConsultCard },
  data() {
    return {
      showConsults: false,
    }
  },
  computed: {
    consults() {
      return this.$store.state.consults
    },
    answeredConsults() {
      let consults = this.consults.filter((consult) => {
        return consult.answered === true
      })
      return consults
    },
    notAnsweredConsults() {
      let consults = this.consults.filter((consult) => {
        return consult.answered === false
      })
      return consults
    },
  },
  methods: {
    showAnsweredConsults() {
      return (this.showConsults = false)
    },
    showNotAnsweredConsults() {
      return (this.showConsults = true)
    },
  },
  mounted() {
    console.log(this.consults)
  },
}
</script>

<style lang='scss' scoped>
@import '@/assets/main.scss';
h1 {
  font-size: 42px;
  margin: 16px 0;
  text-align: center;
}
.toggleConsults_buttons {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 22px;
  margin-bottom: 22px;
  li button {
    transition: 0.2s;
    color: $white;
    font-size: 20px;
    font-weight: 600;
    border: 1px solid $white;
    border-radius: 4px;
    width: 10em;
    height: 3em;
    span {
      font-family: $textFont;
      font-size: 14px;
      font-weight: 600;
      background-color: rgb(214, 62, 62);
      display: inline-block;
      width: 26px;
      height: 26px;
      border-radius: 100%;
      text-align: center;
      margin-left: 6px;
      padding-top: 4px;
    }
  }

  li figure {
    height: 3em;
    width: 1px;
    background-color: $white;
  }

  li .active {
    color: $white;
    border: 1px solid $green;
    background: $green;
  }
}
.consultCards_container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 22px;
  padding-bottom: 3em;
}

@media (max-width: 730px) {
  h1 {
    font-size: 32px;
  }
  .toggleConsults_buttons {
    gap: 12px;
    margin-bottom: 2em;
    width: 100%;

    li button {
      font-size: 16px;
      padding: 0 12px;
      height: 3.5em;
      width: 10em;
      span {
        font-size: 12px;
        display: inline-block;
        width: 22px;
        height: 22px;
        padding-bottom: 15px;
        margin-left: 6px;
      }
    }

    li figure {
      height: 3.5em;
    }
  }
  .consultCards_container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 22px;
    padding-bottom: 3em;
  }
}
</style>