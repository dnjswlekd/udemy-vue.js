const app = Vue.createApp({
  data() {
    return { 
      enteredGoalValue: '',
      goals: [] 
    };
  },
  methods: {
    resetInput(){
      this.enteredGoalValue ='';
    },
    addGoal(){
      this.goals.push(this.enteredGoalValue),
      this.enteredGoalValue ='';
    },
    removeGoal(idx){
      this.goals.splice(idx, 1)
    }
  }
});

app.mount('#user-goals');
