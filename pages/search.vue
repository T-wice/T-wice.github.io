<template>
  <div class="container">
    <div class="logo"></div>
    <el-input class="search"
              placeholder="차를 입력해주세요."
              v-model="keyword"
              clearable
              @keypress.enter="search">
      <el-button slot="append"
                 icon="el-icon-search"
                 @click="search">Search</el-button>
    </el-input>
  </div>
</template>

<script>
import api from '../api/api.js'

export default {
  data() {
    return {
      keyword: ''
    }
  },
  methods: {
    search() {
      this.$store.dispatch('search', this.keyword)
      this.$router.push({
        path: '/result'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 500px;
  width: 100vw;
  height: 100vh;
  background-color: #dddfd2;
}
.search {
  width: 80vw;
  max-width: 450px;
}
.logo {
  margin: 15vh 0 10vh;
  background-image: url('/icon-white.png');
  width: 56px;
  height: 68px;
  background-size: cover;
  animation-duration: 1s;
  animation-iteration-count: infinite;
}
</style>
