<template>
  <div class="model_card">
    <img :src="model.img1" alt="" class="model_img" />

    <article>
      <h1>Modelo {{ model.name }}</h1>
      <ul>
        <li>
          <img src="@/assets/images/icons/mts.svg" alt="" />
        </li>
        <li>
          <img src="@/assets/images/icons/bed.svg" alt="" />
        </li>
        <li>
          <img src="@/assets/images/icons/bath.svg" alt="" />
        </li>
        <li>
          <img src="@/assets/images/icons/kitchen.svg" alt="" />
        </li>
        <li v-if="model.living">
          <img src="@/assets/images/icons/living.svg" alt="" />
        </li>
        <li v-if="model.comedor">
          <img src="@/assets/images/icons/comedor.svg" alt="" />
        </li>

        <li v-if="model.car">
          <img src="@/assets/images/icons/car.svg" alt="" />
        </li>
      </ul>
      <NuxtLink
        :to="{
          name: 'models-model',
          params: { model: this.model.name },
        }"
        >Conocer Modelo</NuxtLink
      >
    </article>
  </div>
</template>

<script>
export default {
  name: 'ModelCard',
  props: {
    model: Object,
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/main.scss';
.model_card {
  box-sizing: border-box;
  border-radius: 6px 6px 6px 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: $lightblue;
  width: auto;
  height: auto;
  .model_img {
    max-width: 390px;
    min-width: 100px;
    max-height: 280px;
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 6px 6px 0 0;
    border-bottom: 1px solid $white;
  }
  article {
    padding: 16px 0 0 0;
    color: $white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    h1 {
      font-size: 28px;
      font-weight: bolder;
      margin-bottom: 16px;
    }
    ul {
      display: flex;
      justify-content: space-between;
      gap: 5px;
      font-family: $textFont;
      font-size: 16px;
      margin-bottom: 2.5em;
      li {
        background: $blue;
        padding: 4px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 4px;
        transition: 0.2s;
        &:hover {
          background: $green;
        }
        img {
          width: 38px;
        }
      }
    }
    a {
      text-align: center;
      border-top: 1px solid $white;
      border-radius: 0 0 6px 60px;
      padding: 20px 0;
      font-size: 18px;
      font-weight: 500;
      color: $white;
      width: 100%;
      transition: 0.2s;
      &:hover {
        background: $green;
      }
    }
  }
}

@media (max-width: 900px) {
  .model_card {
    article {
      ul {
        flex-wrap: wrap;
        padding: 0 12px;
      }
    }
  }
}
</style>
