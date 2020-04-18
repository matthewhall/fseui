import Vue from 'vue';
import Vuex from 'vuex';

import App from './App.vue';

import store from './store';

import './styles/main.scss';

Vue.config.productionTip = false;
Vue.use(Vuex);

const s = new Vuex.Store(store);

new Vue({
  store: s,
  render: h => h(App),
}).$mount('#app');
