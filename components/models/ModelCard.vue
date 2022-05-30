<template>
  <div class="model_card">
    <img src="@/assets/images/house.jpg" alt="" />

    <article>
      <h1>{{ name }}</h1>
      <ul>
        <li><img src="@/assets/images/icons/mts.svg" alt="" />{{ mts }}</li>
        <li>
          <img src="@/assets/images/icons/bed.svg" alt="" />{{ cantDorm }}
        </li>
        <li>
          <img src="@/assets/images/icons/bath.svg" alt="" />{{ cantBath }}
        </li>
        <li>
          <img src="@/assets/images/icons/living.svg" alt="" />{{ cantBath }}
        </li>
        <li>
          <img src="@/assets/images/icons/kitchen.svg" alt="" />{{ cantBath }}
        </li>
        <li v-if="car"><img src="@/assets/images/icons/car.svg" alt="" /></li>
      </ul>
      <button>Conocer Modelo</button>
    </article>
  </div>
</template>

<script>
export default {
  name: 'ModelCard',
  props: {
    name: '',
    cantDorm: '',
    cantBath: '',
    mts: '',
    car: false,
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/main.scss';
.model_card {
  border: 1px solid $lightblue;
  border-radius: 6px 6px 50px 6px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background: $white;
  width: 385px;
  img {
    max-width: 385px;
  }
  article {
    padding: 18px;
    color: $lightblue;
    h1 {
      font-size: 28px;
      font-weight: lighter;
      margin-bottom: 8px;
    }
    ul {
      display: flex;
      gap: 16px;
      font-family: $textFont;
      font-size: 16px;
      font-weight: bold;
      padding-bottom: 32px;
      img {
        margin-right: 8px;
      }
    }
    button {
        font-size: 18px;
        font-weight: bold;
        color: $green;
        padding: 12px 20px;
        border: 1px solid $green;
        border-radius: 4px;
        transition: .2s;
        &:hover {
            color: $white;
            background: $green;
        }
    }
  }
}
</style>
