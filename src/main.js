import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import store from './store/store'
import VueResource from 'vue-resource'
import {
  routes
} from './routes'

Vue.use(VueRouter);
Vue.use(VueResource);

Vue.http.options.root = ''

Vue.filter('currency', (value) => {
  return '$' + value.toLocaleString();
});

const router = new VueRouter({
  mode: 'history',
  routes
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})