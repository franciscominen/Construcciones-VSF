<template>
  <div>
    <img
      src="@/assets/images/icons/msg-modal-icon.svg"
      @click="onToggleModal"
      :class="[!toggleModal ? 'img-consult' : 'img-consult-hidden']"
    />
    <section :class="[toggleModal ? 'modal_wrapper' : 'modal_wrapper-hidden']">
      <img
        src="@/assets/images/close-nav-button.svg"
        alt="nav_closeBtn"
        @click="onToggleModal"
      />
      <h1>Dejanos tu <span>consulta</span>.</h1>
      <form @submit.prevent="onSendConsult" v-if="!isSendSuccess">
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
  </div>
</template>

<script>
export default {
  name: 'ConsultModal',
  data() {
    return {
      toggleModal: false,
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
    onToggleModal() {
      return (this.toggleModal = !this.toggleModal)
    },
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

.img-consult {
  width: 50px;
  position: fixed;
  z-index: 10;
  right: 5%;
  bottom: 5%;
  cursor: pointer;
  transition: 0.2s;
  -webkit-animation: scale-in-br 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  animation: scale-in-br 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  &:hover {
    transform: scale(1.05);
  }
}
.img-consult-hidden {
  display: none;
}

.modal_wrapper {
  height: 32.5em;
  display: flex;
  flex-direction: column;
  background: $white;
  border: 2px solid $lightblue;
  border-radius: 4px 4px 32px 4px;
  padding: 24px;
  width: 22em;
  position: fixed;
  right: 5%;
  bottom: 5%;
  z-index: 10;
  transition: .5s ease;
  -webkit-transform: scale(1);
  transform: scale(1);
  -webkit-transform-origin: 100% 100%;
  transform-origin: 100% 100%;
  &-hidden {
    @extend .modal_wrapper;
    transition: .5s ease;
    -webkit-transform: scale(0);
    transform: scale(0);
    -webkit-transform-origin: 100% 100%;
    transform-origin: 100% 100%;
  }

  img {
    width: 22px;
    filter: brightness(0) saturate(100%) invert(51%) sepia(28%) saturate(3101%)
      hue-rotate(203deg) brightness(97%) contrast(93%);
    align-self: flex-end;
    cursor: pointer;
  }
  h1 {
    margin-bottom: 18px;
    font-size: 24px;
    color: $lightblue;
    span {
      color: $green;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 18px;

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
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-top: 72px;
    gap: 8px;
    img {
      width: 62px;
      margin: 0 auto;
      filter: brightness(0) saturate(100%) invert(74%) sepia(11%)
        saturate(1948%) hue-rotate(65deg) brightness(101%) contrast(97%);
    }
    h3 {
      color: $green;
      margin-bottom: 8px;
    }
    p {
      color: $lightblue;
      width: 16em;
    }
  }
}

@media (max-width: 700px) {
  .img-consult {
    right: 3%;
    width: 42px;
  }
  .modal_wrapper {
    left: 0;
    right: 0;
    margin: 0 auto;
  }
}
</style>
