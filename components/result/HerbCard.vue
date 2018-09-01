<template>
  <div class="card">
    <div>
      <el-tag>1위</el-tag>
    </div>
    <div class="img"></div>
    <div class="title">페퍼민트</div>
    <div class="desc">
      높이 90㎝이다. 줄기는 뿌리에서 나와 곧추서거나 위로 올라가며, 땅에 뿌리를 내리며...
    </div>
  </div>
</template>

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
    background-image: url('/herb1.png');
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
    color: #999999;
  }
}
</style>
