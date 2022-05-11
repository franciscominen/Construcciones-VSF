<template>
  <main class="activity_mainWrapper">
    <h1>A que nos dedicamos?</h1>
    <section class="activity_infoWrapper">
      <lottie-player
        autoplay
        loop
        style="width: 650px"
        src="https://assets4.lottiefiles.com/packages/lf20_griqijxi.json"
        speed="1"
        debug
      ></lottie-player>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In facilisi id
        nisl tincidunt quam mattis ac. In facilisi id nisl tincidunt quam mattis
        ac. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In facilisi
        id nisl tincidunt quam mattis ac. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. In facilisi id nisl tincidunt quam mattis
        ac. In facilisi id nisl tincidunt quam mattis ac. Lorem ipsum dolor sit
        amet, consectetur adipiscing elit. In facilisi id nisl tincidunt quam
        mattis ac.
      </p>
    </section>
    <button class="goToModels_button">
      <p>
        NUESTROS MODELOS MAS VENDIDOS
      </p> 
    </button>
  </main>
</template>

<script>
export default {
  name: 'ActivityContainer',
}
</script>

<style lang='scss'>
@import '@/assets/main.scss';

.activity_mainWrapper {
  min-height: 100vh;
  padding: 8em 6em 4em 6em;
  background: $lightblue url('@/assets/images/lightblue-pattern.svg') no-repeat
    fixed center 20em;
  background-size: contain;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    color: $white;
    font-size: 68px;
    font-weight: 900;
    margin-bottom: 15px;
    text-align: center;
  }

  .activity_infoWrapper {
    display: flex;
    gap: 10px;
    justify-content: center;
    align-items: center;
    padding: 0 1.5em;
    margin-bottom: 4em;

    p {
      color: $white;
      font-size: 24px;
      font-weight: 100;
      line-height: 1.4;
      width: 50%;
    }
  }

  .goToModels_button {
    color: $white;
    font-size: 24px;
    font-weight: 400;
    border: 2px solid $white;
    border-radius: 4px;
    padding: 18px 32px;
  }
}
</style>
