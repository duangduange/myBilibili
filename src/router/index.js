import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/HomePage.vue'
import Register from '@/views/B-register.vue'
import login from '@/views/B-login.vue'
import userInfo from '@/views/UserInfo.vue'
import Edit from '@/views/EditProfile.vue'
import Article from '@/views/ArticlePage.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/article',
    component: Article
  },
  {
    path: '/register',
    component: Register
  },
  {
    path: '/login',
    component: login
  },
  {
    path: '/info',
    component: userInfo
  },
  {
    path: '/edit',
    component: Edit
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
