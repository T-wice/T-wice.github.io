<template>
  <div class="container">
    <header-bar></header-bar>
    <div class="title">
      <div class="small">당신에게 꼭 맞는</div>
      <div class="big">허브 추천</div>
    </div>
    <herb-card></herb-card>
    <div class="herb-detail">
      <herb-detail-box v-for="n in 3"
                       :key="n"></herb-detail-box>
    </div>
  </div>
</template>

<script>
import HeaderBar from '~/components/result/HeaderBar.vue'
import HerbCard from '~/components/result/HerbCard.vue'
import HerbDetailBox from '~/components/result/HerbDetailBox.vue'
import api from '../api/api.js'

export default {
  components: {
    HeaderBar,
    HerbCard,
    HerbDetailBox
  },
  computed: {
    result() {
      console.log(this.$store.state.results[0])
      return this.$store.state.results[0]
    }
  },

  mounted() {}
}
</script>

<style lang="scss" scoped>
.container {
  display: grid;
  grid-template-rows: 88px auto 1fr auto;
  grid-template-areas:
    'hd'
    'title'
    'herb-card'
    'herb-detail';
  max-width: 500px;
  width: 100vw;
  height: 100vh;
  background: #f8f8f7;
  .title {
    grid-area: title;
    margin-left: 22px;
    font-size: 32px;
    .small {
      font-size: 15px;
      color: #999999;
      font-weight: 300;
    }
    .big {
      line-height: 40px;
    }
  }
  .herb-detail {
    display: grid;
    grid-auto-flow: column;
    justify-content: space-between;
    // grid-template-columns: 1fr 1fr 1fr;
    margin-left: 30px;
    margin-right: 30px;
    margin-bottom: 30px;
  }
}
</style>
