<template>
  <div class="footer">
    <div class="button prev"
         @click="clickPrev">이전</div>
    <div class="button next"
         @click="clickNext">다음</div>
  </div>
</template>

<script>
export default {
  methods: {
    clickNext() {
      this.$emit('next')
    },
    clickPrev() {
      this.$emit('prev')
    }
  }
}
</script>


<style lang="scss" scoped>
.footer {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  color: white;
  min-height: 60px;
  max-width: 500px;
  .button {
    display: flex;
    justify-content: center;
    align-items: center;
    &.prev {
      background-color: #243327;
    }
    &.next {
      background-color: #62976c;
    }
  }
}
</style>
