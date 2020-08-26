import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: () => import('@/views/Question'),
    },
    {
      path: '/list',
      component: () => import('@/views/List'),
    },
    {
      path: '/home',
      component: () => import('@/views/Home'),
    },
  ]
})
