<template>
  <article class="consult_card">
    <ul class="consult_cardClientInfo">
      <li>
        <h3>Cliente:</h3>
        <p>{{ consult.name }}</p>
      </li>
      <li>
        <h3>Localidad:</h3>
        <p>{{ consult.location }}</p>
      </li>
      <li>
        <h3>Telefono:</h3>
        <p>{{ consult.phone }}</p>
      </li>
      <li>
        <h3>E-mail:</h3>
        <p>{{ consult.email }}</p>
      </li>
    </ul>

    <section class="consult_cardClientConsult">
      <div class="consult">
        <h3>Consulta:</h3>
        <p>{{ consult.consultText }}</p>
      </div>
      <div class="buttons_container">
        <button @click="setAnswered(consult.id)" v-if="showConsults">
          <Spinner v-if="isLoading" />
          Respondida <img src="@/assets/images/icons/check.svg" alt="" />
        </button>
        <button @click="setNotAnswered(consult.id)" v-else>
          <Spinner v-if="isLoading" />
          Marcar como no respondida
        </button>
      </div>
    </section>
  </article>
</template>

<script >
import Spinner from '@/components/Spinner.vue'
export default {
  name: 'ConsultCard',
  props: {
    consult: Object,
    showConsults: Boolean,
  },
  data() {
    return {
      isLoading: false,
    }
  },
  components: { Spinner },
  methods: {
    async setAnswered(id) {
      try {
        this.isLoading = true
        const consultAnswered = await this.$fire.firestore
          .collection('Consults')
          .where('id', '==', id)
          .get()

        consultAnswered.docs[0].ref.update({
          answered: true,
        })

        this.$store.dispatch('setConsults')
        this.isLoading = false
      } catch (error) {
        console.error('There was an error editing the record: ' + error)
      }
    },
    async setNotAnswered(id) {
      try {
        this.isLoading = true
        const consultAnswered = await this.$fire.firestore
          .collection('Consults')
          .where('id', '==', id)
          .get()

        consultAnswered.docs[0].ref.update({
          answered: false,
        })

        this.$store.dispatch('setConsults')
        this.isLoading = false
      } catch (error) {
        console.error('There was an error editing the record: ' + error)
      }
    },
  },
}
</script>

<style lang='scss' scoped>
@import '@/assets/main.scss';

.consult_card {
  background: $white;
  color: $lightblue;
  display: flex;
  padding: 26px;
  border-radius: 16px;
  max-width: 42em;

  .consult_cardClientInfo {
    display: flex;
    flex-direction: column;
    gap: 18px;
    border-right: 1px solid rgb(168, 168, 168);
    padding-right: 16px;
    margin-right: 16px;
    li {
      h3 {
        font-size: 18px;
      }
      p {
        font-size: 16px;
        color: $blue;
        font-weight: 600;
      }
    }
  }

  .consult_cardClientConsult {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .consult {
      h3 {
        font-size: 18px;
      }
      p {
        font-size: 16px;
        color: $blue;
        font-weight: 600;
      }
    }
    .buttons_container {
      display: flex;
      justify-content: flex-end;
      button {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 8px;
        font-size: 16px;
        font-weight: 600;
        background: transparent;
        padding: 10px 16px;
        border: 1px solid $lightblue;
        border-radius: 4px;
        color: $lightblue;
        transition: 0.2s;
        margin-top: 22px;
        &:hover {
          border: 1px solid $green;
          background: $green;
          color: $white;
          transition: 0.2s;
          img {
            transition: 0.2s;
            filter: brightness(10);
          }
        }
      }
    }
  }
}

@media (max-width: 730px) {
  .consult_card {
    padding: 16px;
    width: 95%;
    flex-direction: column;
    .consult_cardClientInfo {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      gap: 18px;
      border-right: none;
      border-bottom: 1px solid rgb(168, 168, 168);
      padding-right: 0;
      margin-right: 0;
      padding-bottom: 12px;
      margin-bottom: 12px;
    }

    .consult_cardClientConsult {
      .buttons_container {
        display: flex;
        justify-content: center;
      }
    }
  }
}
</style>