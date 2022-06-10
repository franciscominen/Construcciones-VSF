<template>
  <div class="spinner"></div>
</template>

<script>
export default {
  name: 'Spinner',
}
</script>

<style lang="scss" scoped>
@import '@/assets/main.scss';
.spinner {
  width: 1rem;
  height: 1rem;
  border-top: 3px solid $lightblue;
  border-right: 3px solid transparent;
  border-radius: 50%;
  animation: rotation 0.8s linear infinite;
}
@keyframes rotation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
