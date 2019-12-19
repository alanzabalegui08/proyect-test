import Vue from 'vue'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/index.scss';
import './assets/scripts/index.js';
import { store } from './store';
import { router } from './router';
import App from './App.vue';
import * as VueGoogleMaps from "vue2-google-maps";
import * as rules from 'vee-validate/dist/rules';
import { ValidationObserver, ValidationProvider, extend, localize } from 'vee-validate';
import es from 'vee-validate/dist/locale/es.json';

Object.keys(rules).forEach(rule => {
  extend(rule, rules[rule]);
});
localize('es', es);
Vue.component('ValidationObserver', ValidationObserver);
Vue.component('ValidationProvider', ValidationProvider);

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyDW8td30_gj6sGXjiMU0ALeMu1SDEwUnEA",
    libraries: "places",
  }
});

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App),
});
