<template>
  <section>
    <h1>{{ myName }}</h1>
    <button @click="change">The name changes when you click the button</button>
    <p>{{ text }}</p>
  </section>
</template>

<script>
export default {
  // props 부모 컴포넌트에서 자식 컴포넌트로 데이터 전달
  props: ['topicTitle', 'text', 'myName'],
  methods: {
    change(){
      this.$emit('clickHandler')
    }
  }
};
</script>