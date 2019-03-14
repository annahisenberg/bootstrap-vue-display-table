import Vue from 'vue'
import App from './App.vue'
import store from './store'
import BootstrapVue from 'bootstrap-vue'
import VueTelInput from 'vue-tel-input'


import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'vue-tel-input/dist/vue-tel-input.css';

Vue.use(VueTelInput)

Vue.use(BootstrapVue)

Vue.config.productionTip = false

//filters
Vue.filter('spacing', function (value) {
  return value.replace(/_/g, ' ');
})

Vue.filter('capitalize', function (value) {
  return value.toLowerCase()
    .split(' ')
    .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
    .join(' ');
});


new Vue({
  store,
  render: h => h(App)
}).$mount('#app')