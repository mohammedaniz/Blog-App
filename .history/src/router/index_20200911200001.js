import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import FeedLayout from '../components/Layouts/Feed.Layout.vue'

import HomepageLayout from '../components/Layouts/Homepage.layout.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/blogs',
    component: HomepageLayout,
    children : [{
      path : ':id',
      name : 'Blog',
      component : FeedDetails
    },{
      path :'',
      component : FeedLayout
    }]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
