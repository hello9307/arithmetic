import Vue from 'vue'
import VueRouter from 'vue-router'
import Wrapper from '@/views/common/Wrapper'
import Sort from '@/views/sort/Sort'
import Brains from '@/views/brains/Brains'

Vue.use(VueRouter)

  const routes = [
    {
      path: '/',
      redirect: '/arithmetic'
    },
    {
      path: '/arithmetic',
      name: 'arithmetic',
      component: Wrapper,
      children: [
        {
          path: '/arithmetic',
          redirect: '/sort'
        },
        {
          path: '/sort',
          name: 'sort',
          component: Sort
        },
        {
          path: '/brains',
          name: 'brains',
          component: Brains
        }
      ]
    },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
