<template>
  <hooper :settings="hooperSettings">
    <slide><img :src="model.img1" alt="" /></slide>
    <slide><img :src="model.img2" alt="" /></slide>
    <hooper-pagination slot="hooper-addons"></hooper-pagination>
  </hooper>
</template>

<script>
import { Hooper, Slide, Pagination as HooperPagination } from 'hooper'
import 'hooper/dist/hooper.css'

import { Glide, GlideSlide } from 'vue-glide-js'

export default {
  name: 'ModelImagesCarousel',
  components: {
    Hooper,
    Slide,
    HooperPagination,
  },
  props: {
    model: Object,
  },
  data() {
    return {
      hooperSettings: {
        itemsToShow: 1,
        centerMode: false,
        wheelControl: false,
        infiniteScroll: true,
        autoPlay: true,
        transition: 600,
      },
    }
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/main.scss';
.hooper {
  height: 100%;
  width: 100%;
  max-height: 400px;
  min-height: 50px;
  max-width: 600px;
  min-width: 300px;
  object-fit: cover;
  position: inherit;
  .hooper-list {
    .hooper-track {
      .hooper-slide {
        img {
          height: 100% !important;
          width: 100% !important;
          max-height: 400px;
          min-height: 50px;
          max-width: 600px;
          min-width: 300px;
          object-fit: cover;
          border-radius: 60px 6px 6px 6px;
        }
      }
    }
    .hooper-pagination {
      position: relative;
      right: 0;
      bottom: 2.2em;
    }
  }
}
@media (max-width: 900px) {
  .hooper {
  .hooper-list {
    .hooper-pagination {
      position: relative;
      right: 0;
      bottom: 3em;
    }
  }
}
}
</style>
