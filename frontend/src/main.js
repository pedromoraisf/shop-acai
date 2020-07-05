// core
import Vue from 'vue';
import Vuesax from 'vuesax';
import { BootstrapVue } from 'bootstrap-vue';
import App from './App.vue';
import router from './router';
import store from './store';

// styles
import 'animate.css/animate.css';
import './scss/orchestrator.scss';
import 'vuesax/dist/vuesax.css';

// use`s
Vue.use(Vuesax, {});
Vue.use(BootstrapVue);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
