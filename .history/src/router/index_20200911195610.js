import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Homepage from '../components/Layouts/Homepage.layout.vue'

import HomepageLayout from '../components/Layouts/Homepage.layout.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/blogs',
    name: 'Home',
    component: HomepageLayout
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
