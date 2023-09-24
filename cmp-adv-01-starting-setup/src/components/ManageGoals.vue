<template>
  <div>
    <h2>ManageGoals</h2>
    <input type="text" ref="goal">
    <button @click="setGoal">setGoal</button>
    <teleport to='body'>
    <error-alert v-if="inputisInvaild">
      <h2>Input is invaild!</h2>
      <p>Please enter at least a few characters...</p>
      <button @click="cofirmError">Okay!</button>
    </error-alert>
  </teleport>
  </div>
</template>

<script>
import ErrorAlert from './ErrorAlert.vue';
  export default {
    components: {
      ErrorAlert
    },
    data(){
      return {
        inputisInvaild: false
      }
    },
    methods: {
      setGoal(){
        const enteredValue = this.$refs.goal.value;
        if (enteredValue === '') {
          // alert('Input must be empty!')
          this.inputisInvaild = true
        }
      },
      cofirmError(){
        this.inputisInvaild = false
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>