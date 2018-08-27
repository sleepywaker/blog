import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      redirect: '/1',
      children:[
        {path:'/1',component:() => import('./views/homeChild/page1.vue')},
        {path:'/2',component:() => import('./views/homeChild/page2.vue')},
        {path:'/3',component:() => import('./views/homeChild/page3.vue')}
      ]
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
    },
    {
      path: '/art1',
      name: 'Art1',
      component: () => import('./views/articles/art1.vue')
    },
    {
      path: '/art2',
      name: 'Art2',
      component: () => import('./views/articles/art2.vue')
    },
    {
      path: '/art3',
      name: 'Art3',
      component: () => import('./views/articles/art3.vue')
    },
    {
      path: '/art4',
      name: 'Art4',
      component: () => import('./views/articles/art4.vue')
    },
    {
      path: '/art5',
      name: 'Art5',
      component: () => import('./views/articles/art5.vue')
    },
    {
      path: '/art6',
      name: 'Art6',
      component: () => import('./views/articles/art6.vue')
    },
    {
      path: '/art7',
      name: 'Art7',
      component: () => import('./views/articles/art7.vue')
    },
    {
      path: '/art8',
      name: 'Art8',
      component: () => import('./views/articles/art8.vue')
    },
    {
      path: '/art9',
      name: 'Art9',
      component: () => import('./views/articles/art9.vue')
    },
    {
      path: '/art10',
      name: 'Art10',
      component: () => import('./views/articles/art10.vue')
    },
    {
      path: '/page2',
      name: 'homepage2',
      component: () => import('./views/HomePage2.vue'),
      redirect: '/4',
      children:[
        {path:'/4',component:() => import('./views/homeChild/page4.vue')},
        {path:'/5',component:() => import('./views/homeChild/page5.vue')},
        {path:'/6',component:() => import('./views/homeChild/page6.vue')}
      ]
    }
  ]
})
