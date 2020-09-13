import Vue from 'vue'
import Vuex from 'vuex'
import blog from './modules/blog.module';
import category from './modules/category.module';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    blog,
    category
  }
})
