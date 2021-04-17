import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';


Vue.config.productionTip = false;

new Vue({
  router,
  data: {
    transferSumma: 0
  },
  store,
  render: h => h(App),
}).$mount('#app');
