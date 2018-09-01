<template>
  <div class="container">
    <header-bar></header-bar>
    <div class="title">
      <div class="small">당신에게 꼭 맞는</div>
      <div class="big">허브 추천</div>
    </div>
    <herb-card v-bind="herb"></herb-card>
    <div class="herb-detail">
      <herb-detail-box v-for="detail in details"
                       :key="detail.text"
                       v-bind="detail"></herb-detail-box>
    </div>
  </div>
</template>

<script>
import HeaderBar from '~/components/result/HeaderBar.vue'
import HerbCard from '~/components/result/HerbCard.vue'
import HerbDetailBox from '~/components/result/HerbDetailBox.vue'
import api from '../api/api.js'

export default {
  data() {
    return {
      herb: {},
      details: [
        {
          desc: '성장 기간',
          // value: 10,
          unit: '일'
        },
        {
          desc: '물주기(하루)',
          // value: 3,
          unit: '회'
        },
        {
          desc: '난이도',
          // value: '상',
          unit: ''
        }
      ]
    }
  },
  async mounted() {
    const { data } = await api.get('teas')
    console.log(data[0])
    this.details[0].value = data[0].duration
    this.details[1].value = data[0].waterPerDay
    this.details[2].value = data[0].level
    if (this.details[2].value === 0) {
      this.details[2].value = '하'
    }
    if (this.details[2].value === 1) {
      this.details[2].value = '중'
    }
    if (this.details[2].value === 2) {
      this.details[2].value = '상'
    }
    this.herb = data[0]
  },
  components: {
    HeaderBar,
    HerbCard,
    HerbDetailBox
  }
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
    grid-area: herb-detail;
    display: grid;
    grid-auto-flow: column;
    justify-content: space-between;
    // grid-template-columns: 1fr 1fr 1fr;
    margin-top: 15px;
    margin-left: 30px;
    margin-right: 30px;
    margin-bottom: 15px;
  }
}
</style>
