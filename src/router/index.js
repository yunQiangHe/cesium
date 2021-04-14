import Vue from 'vue'
import VueRouter from 'vue-router'
import CesiumScene from '../views/CesiumScene.vue'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'scene',
    component: CesiumScene
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  }
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
