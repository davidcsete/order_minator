import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SignUp from '@/components/users/SignUp.vue'
import SignIn from '@/components/users/SignIn.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/restaurant',
      name: 'restaurant',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      children:[
        {
          path: '/new',
          name:'restaurant-new',
          component: () => import('../views/restaurant/Create.vue')
        }
      ]
    },
    {
      path:'/sign_up',
      name:'sign_up',
      component:SignUp
    },
    {
      path:'/sign_in',
      name:'sign_in',
      component:SignIn
    }
  ]
})

export default router
