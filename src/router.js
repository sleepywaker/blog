import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/keyword',
      name: 'keyword',
      component: () => import('./views/Keyword.vue')
    },
    {
      path: '/tag',
      name: 'tag',
      component: () => import('./views/Tag.vue')
    },
    {
      path: '/archive',
      name: 'archive',
      component: () => import('./views/Archive.vue')
    }
  ]
})
