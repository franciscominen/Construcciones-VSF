<template>
  <!-- USE FIREBASE -->
  <main class="testimonials_mainWrapper" id="testimonials">
    <h1 data-aos="zoom-in" data-aos-duration="800">Clientes Felices</h1>
    <hooper
      :settings="hooperSettings"
      data-aos="fade-in"
      data-aos-duration="800"
    >
      <slide>
        <div class="testimonials_familyCard">
          <img src="@/assets/images/family.svg" alt="" />
          <h3>Familia Uno</h3>
          <p>
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
            facilisi id nisl tincidunt quam mattis ac.”
          </p>
        </div>
      </slide>
      <slide>
        <div class="testimonials_familyCard">
          <img src="@/assets/images/family.svg" alt="" />
          <h3>Familia Dos</h3>
          <p>
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
            facilisi id nisl tincidunt quam mattis ac.”
          </p>
        </div>
      </slide>
      <slide>
        <div class="testimonials_familyCard">
          <img src="@/assets/images/family.svg" alt="" />
          <h3>Familia Tres</h3>
          <p>
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
            facilisi id nisl tincidunt quam mattis ac.”
          </p>
        </div>
      </slide>
      <slide>
        <div class="testimonials_familyCard">
          <img src="@/assets/images/family.svg" alt="" />
          <h3>Familia Cuatro</h3>
          <p>
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
            facilisi id nisl tincidunt quam mattis ac.”
          </p>
        </div>
      </slide>
      <hooper-navigation slot="hooper-addons"></hooper-navigation>
    </hooper>
  </main>
</template>

<script>
import { Hooper, Slide, Navigation as HooperNavigation } from 'hooper'
import 'hooper/dist/hooper.css'
import aosMixin from '@/mixins/aos'

export default {
  name: 'TestimonialsContainer',
  mixins: [aosMixin],
  data() {
    return {
      hooperSettings: {
        itemsToShow: 1,
        centerMode: true,
        wheelControl: false,
        infiniteScroll: true,
        autoPlay: true,
        breakpoints: {
          1024: {
            centerMode: false,
            itemsToShow: 2,
          },
          1460: {
            itemsToShow: 3,
          },
        },
      },
    }
  },
  components: {
    Hooper,
    Slide,
    HooperNavigation,
  },
}
</script>

<style lang='scss' scoped>
@import '@/assets/main.scss';

.testimonials_mainWrapper {
  overflow-x: hidden;
  background: $blue url('@/assets/images/blue-pattern.svg') no-repeat fixed
    center 20em;
  background-size: contain;
  padding: 4em 0;
  h1 {
    text-align: center;
    color: $green;
    font-size: 42px;
    padding-bottom: 28px;
  }
  .hooper {
    height: auto;
    text-align: center;
    width: 100%;
    margin: 0 auto;
  }
  .hooper-slide {
    .testimonials_familyCard {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      h3 {
        color: $green;
        margin: 16px 0 8px 0;
        font-size: 22px;
      }
      p {
        color: $white;
        font-size: 18px;
        width: 300px;
      }
    }
  }

  .hooper-navigation {
    filter: invert(1);
    transform: translateY(-15em);
  }
}
@media (max-width: 1024px) {
  .testimonials_mainWrapper {
    background-size: 250%;
  }
}
</style>