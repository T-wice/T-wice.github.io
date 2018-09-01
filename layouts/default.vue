<template>
  <nuxt/>
</template>

<script>
import api from '../api/api.js'

export default {
  created() {
    api.init()
  }
}
</script>

<style lang="scss">
html {
  font-family: 'Noto Sans CJK KR', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
*,
*:before,
*:after {
  -webkit-overflow-scrolling: touch;
  box-sizing: border-box;
  margin: 0;
  letter-spacing: -0.3px;
  overflow: hidden;
}
#__layout {
  display: flex;
  justify-content: center;
}
.page-enter-active,
.page-leave-active {
  transition: all 0.3s ease-out;
}
.page-enter,
.page-leave-active {
  opacity: 0;
  transform-origin: 50% 50%;
}
.page-enter-active {
  animation: acrossIn 0.3s ease-out both;
}
.page-leave-active {
  animation: acrossOut 0.3s ease-in both;
}
@keyframes acrossIn {
  0% {
    transform: translate3d(100%, 0, 0);
  }
  100% {
    transform: translate3d(0, 0, 0);
  }
}
@keyframes acrossOut {
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(-100%, 0, 0);
  }
}
</style>
