<template>
  <div>
    <span>{{answer.description}}</span>
  </div>
</template>

<script>
export default {
  name: 'answer',
  //임시 데이터 props로 받아서 다음 페이지(질문, 결과, 검색) 처리
  props: ['answer'],
  methods: {
    setValue() {}
  }
}
</script>
