const app = Vue.createApp({
  data() {
    return {
      currentUserInput: '',
      message: 'Vue is great!',
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      // this.message = this.currentUserInput;
      this.message = this.$refs.userText.value
      // console.dir(this.$refs.userText)
    },
  },
  beforeCreate() {
    console.log('beforeCrete()');
  },
  created() {
    console.log('crete()');
  },
  beforeMount() {
    console.log('beforeMount()')
  },
  mounted(){
    console.log('mount()')
  },
  beforeUpdate() {
    console.log('beforeUpdate()')
  },
  updated() {
    console.log('updated()')
  },
  beforeUnmount() {
    console.log('beforeUnmount()')
  },
  unmounted(){
    console.log('unmounted()')
  }
});

app.mount('#app');

setTimeout(() => {
  app.unmount();
},3000);

const app2 = Vue.createApp({
  template: `<p>{{ favoritMeal }}</p>`,
  data(){
    return {
      favoritMeal: 'chicken'
    }
  }
})
app2.mount('#app2');

//.....
const data = {
  message: 'hello!',
  longMessage: 'hello world!'
}

const handler = {
  set(target, key, value){
    if( key === 'message'){
      target.longMessage = value + 'world!'
      target.message = value;
    }
  }
}

const proxy = new Proxy(data, handler);

proxy.message = 'hello!!!!!'

// console.log(proxy.longMessage)