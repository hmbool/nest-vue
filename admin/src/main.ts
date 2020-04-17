import Vue from 'vue'
import axios from 'axios'
import App from './App.vue'
import './plugins/element'
import './plugins/avue'
import router from './router'


// import EleForm from 'vue-ele-form'

// // 注册vue-ele-form
// Vue.use(EleForm)
Vue.config.productionTip = false


Vue.prototype.$http = axios.create(
  {
    // baseURL: 'https://some-domain.com/api/',
    baseURL: 'http://localhost:3000'
  }
)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
