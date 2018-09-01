<template>
  <div class="container">
    <h1 class="title">{{question}}</h1>
    <h2 class="sub-title">아래 항목을 선택해 주세요.</h2>
    <section class="answer-wrap"
             :class="{two: answers.length === 2}">
      <button class="answer"
              :class="{selected: answer === selected}"
              v-for="answer in answers"
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
import api from '../api/api.js'

export default {
  name: '',
  data() {
    return {
      question: '',
      answers: [],
      next_id: 0,
      selected: false,
      answer_list: [],
      answers_list: []
    }
  },
  computed: {
    setHalf() {
      return this.answers.length >= 3
    }
  },
  mounted() {
    api.get('questions/next').then(res => {
      const data = res.data
      this.question = data.question
      this.answers = data.answers
      this.answers_list.push(data.answers)
    })
  },
  methods: {
    setNextId(answer) {
      this.selected = answer
    },
    clickNext() {
      const answer = this.selected
      this.answer_list.push(answer.id)
      if (!answer.isLeaf) {
        this.getQuestion(answer.nextQuestionId)
      } else {
        if (/search/.test(answer.targetUrl)) {
          this.$router.push('/search')
        } else if (answer.targetUrl) {
          this.$store.dispatch('setResult', answer.targetUrl)
          this.$router.push({
            path: '/result'
          })
        } else {
          const answer_ids = this.answer_list.join(',')
          this.$store.dispatch('setResults', answer_ids)
          this.$router.push({
            path: '/result'
          })
        }
      }
    },
    clickPrev() {
      this.answer_list.pop()
      if (this.answers_list.pop() && this.answers_list.length > 0) {
        this.answers = this.answers_list[this.answers_list.length - 1]
      }
    },
    getQuestion(id) {
      api.get(`questions/next?parent_id=${id}`).then(res => {
        const data = res.data
        this.question = data.question
        this.answers = data.answers
        this.answers_list.push(data.answers)
      })
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
    display: grid;
    grid-template-columns: repeat(2, 50%);
    grid-template-rows: repeat(2, 50%);
    grid-gap: 1vw;
    .answer {
      width: 100%;
      text-align: center;
      background-color: #fff;
      border: 0;
      font-size: 1rem;
    }
    .answer:focus {
      outline: 0;
    }
    .answer.selected {
      background-color: #82aa12;
    }
  }
  .answer-wrap.two {
    grid-template-columns: 100%;
  }
  .footer {
    position: absolute;
    bottom: 0;
  }
}
</style>
