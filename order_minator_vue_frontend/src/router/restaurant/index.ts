import Restaurant from '@/components/restaurant/Restaurant.vue'
import Create from '@/components/restaurant/Create.vue'
import Edit from '@/components/restaurant/Edit.vue'
import Show from '@/components/restaurant/Show.vue'
import RestaurantView from '@/views/restaurant/RestaurantView.vue'
const notFinished = true;
const restaurant = {
    path: '/restaurant',
    name: 'restaurant',
    component: RestaurantView,
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    children:[
      {
        path: '',
        name:'restaurant-index',
        component: Restaurant
      },
      {
        path: ':id',
        name:'restaurant-show',
        component: () => Show
      },
      {
        path: 'new',
        name:'restaurant-new',
        component: () => Create,
        meta: {
          requiresAuth: true,
          requiresOwnerStatus: true
        }
      },
      {
        //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        //TODO
        //security notes on the edit page,
        //ownership should be verified inside a controller using the authToken
        path: ':id/edit',
        name:'restaurant-edit',
        component: () => Edit,
        meta: {
          requiresAuth: true,
          requiresOwnerShip: notFinished
        }
      }
    ]
  }


export default restaurant;
