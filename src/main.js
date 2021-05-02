import Vue from 'vue'
import BootstapVue from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import App from './App.vue'

Vue.use(BootstapVue)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
