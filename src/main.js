import Vue from 'vue';
import App from './App.vue';
import Vuesax from 'vuesax'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'vuesax/dist/vuesax.css'

Vue.use(Vuesax)

Vue.use(BootstrapVue)

new Vue(App).$mount('#app');