import Vue from 'vue';
import App from './App.vue';
import VTruncate from '../src';
import './styles/index.scss';
import Prism from 'vue-prismjs'
import 'prismjs/themes/prism.css'

Vue.component('prism', Prism);
Vue.component('v-truncate', VTruncate);

new Vue({
  render: (h) => h(App),
}).$mount('#app');
