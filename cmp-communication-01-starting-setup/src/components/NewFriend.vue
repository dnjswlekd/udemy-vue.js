<template>
  <form @submit.prevent="submitData">
    <div>
      <label>Name</label>
      <input type="text" v-model="enteredName"/>
    </div>
    <div>
      <label>Phone</label>
      <input type="tel" v-model="enteredPhone"/>
    </div>
    <div>
      <label>E-mail</label>
      <input type="email" v-model="enteredEmail"/>
    </div>
    <div>
      <button>Add Contact</button>
    </div>
  </form>
</template>

<script>
  export default {
    emits: ['add-contact'],
  data() {
    return {
      enteredName:'',
      enteredPhone:'',
      enteredEmail:''
    }
  },
  methods: {
    submitData(){
      this.$emit('add-contact', this.enteredName, this.enteredPhone, this.enteredEmail)
    }
  }
}
</script>

<style>
 #app form {
  text-align: center;
  box-shadow: 0 2px 8px rgba(0,0,0,0.26);
  border: 1px solid #f2f2f2;
  margin: 1rem auto;
  padding: 1rem;
  width: 90%;
  max-width: 40rem;
  border-radius: 10px;
 }

 #app input {
  padding: 0.15rem;
 }

 #app label{
  display: inline-block;
  width: 5rem;
  font-weight: 700;
 }

 #app form div {
  margin: 1rem 0 
 }

 /* #app input {
  font: inherit;
  padding: 0.15rem;
}
#app label {
  font-weight: bold;
  margin-right: 1rem;
  width: 7rem;
  display: inline-block;
}
#app form div {
  margin: 1rem 0;
} */
</style>