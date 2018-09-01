<template>
  <div class="card">
    <div>
      <el-tag>1위</el-tag>
    </div>
    <div class="img">
      <img :src="data.imgUrl">
    </div>
    <div class="title">{{data.name}}</div>
    <div class="desc"
         v-html="data.description">
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    data() {
      const result = this.$store.state.results[0]
      return result !== undefined ? result : {}
    }
  }
}
</script>


<style lang="scss" scoped>
$margin: 27px;

.card {
  display: grid;
  grid-template-rows: 80px auto auto auto;
  width: calc(100% - #{$margin * 2});
  height: calc(100% - #{$margin * 2});
  margin: 16px auto;
  box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.12);
  border-radius: 8px;
  background-color: white;
  .el-tag {
    margin: 25px;
    padding: 0 14px;
    font-weight: 300;
    background-color: #82aa12;
    border-radius: 100px;
  }
  .img {
    margin: 16px;
    width: calc(100% - 32px);
    min-height: 173px;
    // background-image: url('/herb1.png');
    // background-size: 100%;
    // background-repeat: no-repeat;
    img {
      width: 100%;
      height: 100%;
    }
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
    color: #999999;
    height: 9vh;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    line-height: 0.9rem;
  }
}
</style>
