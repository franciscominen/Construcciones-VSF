<template>
  <section class="contact-form">
    <form @submit.prevent="onSendConsult" v-if="!isSendSuccess">
      <article>
        <input
          type="text"
          v-model="name"
          placeholder="Nombre y Apellido"
          required
          minlength="3"
        />
        <input
          type="email"
          v-model="email"
          placeholder="E-mail"
          required
          minlength="3"
        />
      </article>
      <article>
        <input
          type="text"
          v-model="location"
          placeholder="Localidad"
          required
          minlength="3"
        />
        <input
          type="number"
          v-model="phone"
          placeholder="Telefono"
          required
          minlength="3"
        />
      </article>
      <textarea
        placeholder="Su consulta"
        v-model="consultText"
        required
        minlength="10"
        maxlength="400"
      ></textarea>
      <Spinner v-if="isLoading" />
      <button type="submit" :disabled="!isDisabled" v-else>
        Enviar Consulta
      </button>
    </form>

    <section v-else class="consultSuccess_wrapper">
      <img src="@/assets/images/icons/check.svg" alt="" />
      <div>
        <h3>Su consulta ha sido enviada</h3>
        <p>Nos contactaremos con usted durante las proximas 48hs.</p>
      </div>
    </section>
  </section>
</template>

<script>
import Spinner from '@/components/Spinner.vue'

export default {
  name: 'ContactForm',
  data() {
    return {
      isSendSuccess: false,
      isLoading: false,
      id: Math.random() * 20,
      name: '',
      email: '',
      location: '',
      phone: '',
      consultText: '',
    }
  },
  components: { Spinner },
  computed: {
    isDisabled() {
      return (
        !!this.name &&
        !!this.email &&
        !!this.location &&
        !!this.phone &&
        !!this.consultText
      )
    },
  },
  methods: {
    onSendConsult() {
      try {
        this.isLoading = true
        this.$fire.firestore
          .collection('Consults')
          .doc()
          .set({
            id: Math.round(this.id),
            name: this.name,
            email: this.email,
            location: this.location,
            phone: this.phone,
            consultText: this.consultText,
            answered: false,
            date: new Date().toString(),
          })
        this.isSendSuccess = true
        this.isLoading = false
      } catch (err) {
        console.log(err)
      }
    },
  },
}
</script>

<style lang='scss' scoped>
@import '@/assets/main.scss';
.contact-form {
  margin: 18px 0;
  height: 18em;
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 22px;
    article {
      display: flex;
      width: 100%;
      gap: 32px;
      input {
        width: 100%;
        background: transparent;
        border: none;
        border-bottom: 1px solid $lightblue;
        border-radius: 0;
        font-family: $textFont;
        font-size: 18px;
        padding: 8px 0;
        transition: 0.2s;
        &::placeholder {
          font-size: 16px;
          font-weight: 300;
        }
        &:focus {
          transition: 0.2s;
          outline: none;
          border-bottom: 1px solid $green;
          color: $blue;
        }
      }
    }
    textarea {
      resize: none;
      width: 100%;
      background: transparent;
      border: none;
      border-bottom: 1px solid $lightblue;
      border-radius: 0;
      font-family: $textFont;
      font-size: 18px;
      padding: 8px 0;
      margin-bottom: 18px;
      transition: 0.2s;
      &::placeholder {
        font-size: 16px;
        font-weight: 300;
      }
      &:focus {
        transition: 0.2s;
        outline: none;
        border-bottom: 1px solid $green;
        color: $blue;
      }
    }
    button {
      width: 10em;
      color: $white;
      background: $green;
      font-size: 18px;
      font-weight: 400;
      padding: 16px;
      border: 1px solid $green;
      border-radius: 4px;
      transition: 0.2s;
      &:hover {
        background-color: rgb(116, 213, 116);
      }
      &:disabled {
        color: $lightblue;
        background: transparent;
        border: 1px solid $lightblue;
        pointer-events: none;
      }
    }
  }

  .consultSuccess_wrapper {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-top: 42px;
    img {
      width: 58px;
    }
    div {
      h3 {
        color: $lightblue;
        font-size: 28px;
      }
      p {
        color: $green;
        font-size: 18px;
      }
    }
  }
}

@media (max-width: 1024px) {
  .contact-form {
    height: auto;
    form {
      article {
        flex-direction: column;
      }
      button {
        margin: 0 auto;
      }
    }
  }
}
</style>
