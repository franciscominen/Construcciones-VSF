<template>
  <!-- USE FIREBASE -->
  <main class="testimonials_mainWrapper" id='testimonials'>
    <article class="testimonials_familyCard">
      <img src="@/assets/images/family.svg" alt="" />
      <h3>Familia Uno</h3>
      <p>
        “Lorem ipsum dolor sit amet, consectetur adipiscing elit. In facilisi id
        nisl tincidunt quam mattis ac.”
      </p>
    </article>
    <article class="testimonials_familyCard">
      <img src="@/assets/images/family.svg" alt="" />
      <h3>Familia Uno</h3>
      <p>
        “Lorem ipsum dolor sit amet, consectetur adipiscing elit. In facilisi id
        nisl tincidunt quam mattis ac.”
      </p>
    </article>
    <article class="testimonials_familyCard">
      <img src="@/assets/images/family.svg" alt="" />
      <h3>Familia Uno</h3>
      <p>
        “Lorem ipsum dolor sit amet, consectetur adipiscing elit. In facilisi id
        nisl tincidunt quam mattis ac.”
      </p>
    </article>
    <article class="testimonials_familyCard">
      <img src="@/assets/images/family.svg" alt="" />
      <h3>Familia Uno</h3>
      <p>
        “Lorem ipsum dolor sit amet, consectetur adipiscing elit. In facilisi id
        nisl tincidunt quam mattis ac.”
      </p>
    </article>
  </main>
</template>

<script>
export default {
  name: 'TestimonialsContainer',
}
</script>

<style lang='scss'>
@import '@/assets/main.scss';

.testimonials_mainWrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5em;
  padding: 6em 5% 4em 5%;
  background: $blue url('@/assets/images/blue-pattern.svg') no-repeat fixed center
    20em;
  background-size: contain;

  .testimonials_familyCard {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    h3 {
      color: $green;
      margin: 16px 0 8px 0;
    }
    p {
      color: $white;
      text-align: center;
    }
  }
}
</style>