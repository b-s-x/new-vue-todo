import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import List from '@/views/List'
import Question from '@/views/Question'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Question,
    },
    {
      path: '/list',
      component: List
    },
    {
      path: '/home',
      component: Home,
    },
  ]
})
