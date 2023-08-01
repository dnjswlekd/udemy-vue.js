const app = Vue.createApp({
  data() {
    return { 
      enteredGoalValue: '',
      goals: ['1'] };
  },
  methods: {
    addGoal(){
      this.goals.push(this.enteredGoalValue)
    },
    removeGoal(goal){
      this.goals.splice(goal, 3)
    }
  }
});

app.mount('#user-goals');
