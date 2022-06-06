<template>
  <div class="main_container">
    <section>
      <div class="info_container" data-aos="fade-right" data-aos-duration="500">
        <h1>Construccion Hibrida</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In facilisi
          id nisl tincidunt quam mattis ac. In facilisi id nisl tincidunt quam
          mattis ac. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
          facilisi id nisl tincidunt quam mattis ac. In facilisi id nisl
          tincidunt quam mattis ac. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. In facilisi id nisl tincidunt.
        </p>
      </div>
      <img
        src="@/assets/images/steel2.png"
        alt=""
        data-aos="fade-left"
        data-aos-duration="500"
        data-aos-delay="200"
      />
    </section>
    <section>
      <img
        src="@/assets/images/steel2.png"
        alt=""
        data-aos="fade-right"
        data-aos-delay="400"
        data-aos-duration="500"
      />
      <p data-aos="fade-left" data-aos-duration="500" data-aos-delay="600">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In facilisi id
        nisl tincidunt quam mattis ac. In facilisi id nisl tincidunt quam mattis
        ac. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In facilisi
        id nisl tincidunt quam mattis ac. In facilisi id nisl tincidunt quam
        mattis ac. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
        facilisi id nisl tincidunt. In facilisi id nisl tincidunt quam mattis
        ac. In facilisi id nisl tincidunt quam mattis ac. Lorem ipsum dolor sit
        amet, consectetur adipiscing elit. In facilisi id nisl.
      </p>
    </section>
    <button class="go-back" @click="onGoBackHibrido">
      <img src="@/assets/images/icons/go-back.svg" alt="" />
    </button>
  </div>
</template>

<script lang='ts'>
import aosMixin from '@/mixins/aos'

export default {
  name: 'HibridoInfo',
  mixins: [aosMixin],
  props: {
    onGoBackHibrido: { type: Function },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/main.scss';

.main_container {
  width: 65%;
  margin: 0 auto;
  padding: 8em 0 4em 0;
  display: flex;
  flex-direction: column;
  gap: 22px;

  .go-back {
    position: absolute;
    left: 3%;
    top: 11.5em;
    transition: 0.2s;
    img {
      width: 32px;
    }
    &:hover {
      transform: scale(1.1);
    }
  }
  section {
    display: flex;
    justify-content: flex-start;
    gap: 22px;
    .info_container {
      color: $white;
      text-align: left;
      h1 {
        font-size: 58px;
        margin-bottom: 22px;
        color: $blue;
      }
      p {
        font-size: 18px;
        line-height: 1.6;
      }
    }
    img {
      max-width: 480px;
      width: 100%;
      object-fit: cover;
    }
    p {
      font-size: 18px;
      line-height: 1.6;
      color: $white;
    }
  }
}

@media (max-width: 1044px) {
  .main_container {
    width: auto;
    padding: 6em 18px 4em 19px;

    .go-back {
      position: inherit;
      margin-right: auto;
    }
    section {
      flex-direction: column;
      .info_container {
        h1 {
          font-size: 48px;
          margin-bottom: 16px;
        }
      }
      img {
        border: 2px solid $white;
        border-radius: 60px 6px 60px 6px;
        order: 3;
      }
    }
  }
}
</style>
