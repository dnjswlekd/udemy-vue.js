<template>
  <button :type="type" :class="mode">
  <!-- <base-button mode="flat"></base-button> -->
   <slot></slot>
  </button>
</template>

<script>
  export default {
    props: ['type', 'mode']
  }
</script>

<style>
button {
  padding: 0.75rem 1.5rem;
  font-family: inherit;
  background-color: #3a0061;
  border: 1px solid #3a0061;
  color: white;
  cursor: pointer;
}

button:hover,
button:active {
  background-color: #270041;
  border-color: #270041;
}

.flat {
  background-color: transparent;
  color: #3a0061;
  border: none;
  cursor: pointer;
}

.flat:hover,
.flat:active {
  background-color: #edd2ff;
}

.customBtn {
  background-color: green;
  color: #fff;
  border: 1px solid #ddd;
  border-radius: 5px;
  cursor: pointer;
}
.customBtn:hover,
.customBtn:active {
  background: rgb(164, 209, 164);
  border: 1px solid rgb(164, 209, 164);
}
</style>