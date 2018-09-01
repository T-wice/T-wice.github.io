<template>
  <div class="container">
    <div class="icon bounce"></div>
  </div>
</template>

<script>
import api from '../api/api.js'

export default {
  mounted() {
    setTimeout(() => {
      this.$router.push('question')
    }, 2000)
  }
}
</script>

<style lang="scss" scoped>
.container {
  overflow: hidden;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 500px;
  background-image: url('/background.jpeg');
  background-size: cover;
  &::after {
    content: '';
    background: rgba(0, 0, 0, 0.65);
    width: 100%;
    height: 100%;
  }
  .icon {
    position: absolute;
    background-image: url('/icon-white.png');
    width: 56px;
    height: 68px;
    background-size: cover;
    animation-duration: 1s;
    animation-iteration-count: infinite;
  }
}
</style>
