<template>
  <div class="card">
    <div>
      <el-tag>1위</el-tag>
    </div>
    <div class="img"
         :style="{backgroundImage: `url('${imgUrl}')`}">
    </div>
    <div class="title">{{name}}</div>
    <div class="desc"
         v-html="description">
    </div>
  </div>
</template>

<script>
export default {
  props: ['imgUrl', 'name', 'description']
  // data() {
  //   return {
  //     data: {
  //       imgUrl: '',
  //       name: '',
  //       description: ''
  //     }
  //   }
  // }
  // computed: {
  //   data() {
  //     const result = this.$store.state.results[0]
  //     return result !== undefined ? result : {}
  //   }
  // }
}
</script>


<style lang="scss" scoped>
$margin: 27px;

.card {
  grid-area: herb-card;
  display: grid;
  grid-template-rows: 58px auto auto auto;
  width: calc(100% - #{$margin * 2});
  height: calc(100% - 10 * 2);
  margin: 10px $margin;
  box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.12);
  border-radius: 8px;
  background-color: white;
  .el-tag {
    margin: 20px;
    padding: 0 14px;
    font-weight: 300;
    background-color: #82aa12;
    border-radius: 100px;
  }
  .img {
    margin: 0px 16px;
    border: 0px;
    width: calc(100% - 32px);
    min-height: 173px;
    background-size: 100%;
    background-repeat: no-repeat;
  }
  .title {
    font-size: 28px;
    margin: 25px;
    margin-bottom: 0px;
  }
  .desc {
    font-size: 16px;
    font-weight: 300;
    margin: 25px;
    margin-top: 0px;
    max-height: 80px;
    color: #999999;
    text-overflow: ellipsis;
    line-height: 0.9rem;
    overflow: scroll;
  }
}
</style>
