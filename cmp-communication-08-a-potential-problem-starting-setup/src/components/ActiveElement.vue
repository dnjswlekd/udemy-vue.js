<template>
  <section>
    <h2>{{ topicTitle }}</h2>
    <p>{{ text }}</p>
  </section>
</template>

<script>
export default {
  // props 부모 컴포넌트에서 자식 컴포넌트로 데이터 전달
  props: ['topicTitle', 'text'],
};
</script>