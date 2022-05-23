<template>
  <main>
    <h1>Contact</h1>
    <form @submit.prevent="onSendConsult">
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
        cols="30"
        rows="10"
        required
        minlength="10"
        maxlength="400"
      ></textarea>
      <button type="submit">Enviar Consulta</button>
    </form>
  </main>
</template>

<script>
export default {
  name: 'Contact',
  data() {
    return {
      id: Math.random() * 20,
      name: '',
      email: '',
      location: '',
      phone: '',
      consultText: '',
    }
  },
  methods: {
    onSendConsult() {
      try {
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

        console.log('Document successfully written!')
      } catch (err) {
        console.log(err)
      }
    },
  },
  mounted() {},
}
</script>

<style>
</style>