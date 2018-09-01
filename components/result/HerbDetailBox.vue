<template>
  <div class="box">
    <div class="desc">{{ desc }}</div>
    <div class="value">
      {{ value }}
      <span class="unit">{{ unit }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    desc: {
      default: '성장 기간'
    },
    value: {
      default: '10'
    },
    unit: {
      default: '원'
    }
  }
}
</script>


<style lang="scss" scoped>
$base: 92px;

.box {
  width: $base;
  height: $base;
  .desc {
    margin: 6px;
    text-align: center;
    font-size: 14px;
    font-weight: 300;
    line-height: 8px;
    color: #999999;
  }
  .value {
    text-align: center;
    color: #82aa12;
    font-size: 36px;
  }
  .unit {
    color: black;
    font-size: 14px;
  }
}
</style>
