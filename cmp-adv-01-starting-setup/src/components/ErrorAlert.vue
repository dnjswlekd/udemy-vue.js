<template>
  <dialog open>
    <slot></slot>
  </dialog>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>
  dialog {
    position: absolute;
    margin: 0 auto;
    top: 20vh;
    width: 40%;
    padding: 1rem;
    background: #fff;
    box-shadow: 0 8px 2px 0 rgba(0, 0, 0, 0.26);
  }
</style>