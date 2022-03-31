import Vue from 'vue'
import VueRouter from 'vue-router'
import register from '@/views/B-register.vue'
import login from '@/views/B-login.vue'
import userInfo from '@/views/UserInfo.vue'
// 引入外部素材库
import Vant from 'vant'
import 'vant/lib/index.css'
// import http from '../http'// 引入接口，接口坏了。。
// Vue.prototype.$http = http
Vue.use(Vant)
Vue.use(VueRouter)

const routes = [
  {
    path: '/register',
    component: register
  },
  {
    path: '/login',
    component: login
  },
  {
    path: '/info',
    component: userInfo
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
