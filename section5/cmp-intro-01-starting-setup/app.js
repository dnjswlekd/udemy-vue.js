const app = Vue.createApp({
  data() {
    return {
      friend: [
        {
          id: 'menuel',
          name: 'Menuel Lorenz',
          phone: '010 5275 2671',
          email: 'wj8014@gmail.com',
        },
        {
          id: 'julie',
          name: 'julie Jhons',
          phone: '010 5276 2671',
          email: 'ksahun0910@localhost.com',
        },
      ],
    };
  },
});

// Vue > Component는 미니앱이라고 보면 됨.
app.component('friend-contact', {
  template: `
  <li>
  <h2>{{friend.name}}</h2>
  <button @click="toggleDetails">{{detailsAreVisible ? 'Show' : 'Hide'}} Details</button>
  <ul v-if="detailsAreVisible">
    <li><strong>Phone:</strong>{{friend.phone}}</li>
    <li><strong>Email:</strong>{{friend.email}}</li>
  </ul>
</li>
  `,
  data() {
    return {
      detailsAreVisible: false,
      friend: {
        id: 'menuel',
        name: 'Menuel Lorenz',
        phone: '010 5275 2671',
        email: 'wj8014@gmail.com',
      },
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
  },
});
app.mount('#app');
