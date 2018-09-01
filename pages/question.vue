<template>
  <div class="container">
    <h1 class="title">{{question}}</h1>
    <h2 class="sub-title">아래 항목을 선택해 주세요.</h2>
    <section class="answer-wrap">
      <button class="answer"
              :class="{half: setHalf, selected: selected === answer, left: index % 2 === 0}"
              v-for="(answer, index) in answers"
              :key="answer.id"
              @click="setNextId(answer)">
        {{answer.description}}
      </button>
    </section>
    <footer-button v-on:next="clickNext"
                   v-on:prev="clickPrev" />
  </div>
</template>

<script>
import FooterButton from '~/components/question/FooterButton.vue'
export default {
  name: '',
  data() {
    return {
      question: '차에 대해 얼마나 아시나요?',
      answers: [
        {
          id: 1,
          isLeaf: true,
          description: '차를 키워서 마셔봤어요.',
          targetUrl: 'http://www.naver.com',
          next_id: 11
        },
        {
          id: 2,
          isLeaf: false,
          description: '차는 마셔보기만 했어요.',
          next_id: 12
        },
        {
          id: 3,
          isLeaf: false,
          description: '차는 마셔보기만 했어요.',
          next_id: 12
        },
        {
          id: 4,
          isLeaf: false,
          description: '차는 마셔보기만 했어요.',
          next_id: 12
        }
      ],
      next_id: 0,
      selected: false
    }
  },
  created() {},
  computed: {
    setHalf() {
      return this.answers.length >= 3
    }
  },
  methods: {
    setNextId(answer) {
      this.selected = answer
    },
    clickNext() {
      if (this.selected) console.log(this.selected.id)
      else console.log('not selected')

      //sample
      this.$router.push('/search')
    },
    clickPrev() {
      this.$router.back()
    }
  },
  components: {
    FooterButton
  }
}
</script>

<style lang="scss" scoped>
$width: 80%;
.container {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 500px;
  flex-direction: column;
  background-color: #f8f8f7;
  .title {
    width: 85%;
    text-align: center;
    word-break: keep-all;
  }
  .sub-title {
    margin: 4vh 0;
    font-size: 1rem;
  }
  .answer-wrap {
    width: 80%;
    height: 52vh;
    .answer {
      display: inline-block;
      width: 100%;
      text-align: center;
      height: 49%;
      background-color: #fff;
      border: 0;
      font-size: 1rem;
    }
    .answer:focus {
      outline: 0;
    }
    .answer:nth-child(odd) {
      margin-bottom: 2%;
    }
    .answer.selected {
      background-color: #82aa12;
    }
    .answer.half {
      width: 49%;
    }
    .answer.half.left {
      margin-right: 2%;
    }
  }
  .footer {
    position: absolute;
    bottom: 0;
  }
}
</style>
