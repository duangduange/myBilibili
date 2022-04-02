import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueLazyload from 'vue-lazyload'
import store from './store'
// 引入外部素材库
import Vant, { Lazyload } from 'vant'
// import { Toast } from 'vant'
import 'vant/lib/index.css'
// import http from '../http'// 引入接口，接口坏了。。
// Vue.prototype.$http = http
Vue.use(Vant)
Vue.use(VueLazyload)
Vue.use(Lazyload)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
