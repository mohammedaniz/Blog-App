import Vue from 'vue'
import VueRouter from 'vue-router'
import FeedLayout from '../components/Layouts/Feed.Layout.vue'
import FeedDetails from '../components/Components/Feed.Details.vue';

import HomepageLayout from '../components/Layouts/Homepage.layout.vue';
import FeedCategoryComponent from '../components/Components/Feed.Category.component.vue';

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
    },{
      path :'categories/:category',
      component :FeedCategoryComponent
    }]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
