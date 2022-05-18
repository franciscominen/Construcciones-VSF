<template>
  <ul :class="classColor">
    <li>
      <a href=""><img src="@/assets/images/icons/fb-icon.svg" alt="" /></a>
    </li>
    <li>
      <a href=""
        ><img src="@/assets/images/icons/instagram-icon.svg" alt=""
      /></a>
    </li>
    <li>
      <a href=""
        ><img src="@/assets/images/icons/telegram-icon.svg" alt=""
      /></a>
    </li>
    <li>
      <a href=""><img src="@/assets/images/icons/wsp-icon.svg" alt="" /></a>
    </li>
  </ul>
</template>

<script lang='ts'>
export default {
  name: 'SocialMediaLinks',
  props: {
    classColor: [String, Array],
  },
}
</script>

<style lang='scss' scoped>
@import '@/assets/main.scss';

.socialMedia_blue {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  li {
    a {
      border: 1px solid $blue;
      border-radius: 3px;
      width: 38px;
      height: 38px;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        max-width: 32px;
      }
    }
  }
}

.socialMedia_lightblue {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  li {
    a {
      border: 1px solid $lightblue;
      border-radius: 3px;
      width: 45px;
      height: 45px;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        filter: brightness(2.2);
      }
    }
  }
}

.socialMedia_white {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  li {
    a {
      border: 1px solid $white;
      border-radius: 3px;
      width: 45px;
      height: 45px;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        filter: brightness(10);
      }
    }
  }
}

.socialMedia_lightblue-mobile {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 16px;
  order: 5;
  margin: 32px 0;
  li {
    a {
      border: 1px solid $lightblue;
      border-radius: 3px;
      width: 45px;
      height: 45px;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        filter: brightness(2.2);
      }
    }
  }
}
</style>