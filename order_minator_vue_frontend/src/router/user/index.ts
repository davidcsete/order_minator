
import Edit from '@/components/users/Edit.vue'
const notFinished = true;
const user = {
    path: '/user',
    name: 'user',
    component: Edit,
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    children:[
      {
        path: ':id/edit',
        name:'user-edit',
        component: Edit,
        meta: {
            requiresAuth: true,
            verifyUserId: true
          }
      }
    ]
  }


export default user;
