import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import SignUp from '@/components/users/SignUp.vue'
import SignIn from '@/components/users/SignIn.vue'
import restaurant from './restaurant'
import user from './user'

import store from '@/store';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path:'/sign_up',
    name:'sign_up',
    component:SignUp,
    meta:{
      cannotBeAuthenticated: true
    }
  },
  {
    path:'/sign_in',
    name:'sign_in',
    component:SignIn,
    meta:{
      cannotBeAuthenticated: true
    }
  },
  restaurant,
  user
];
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes:routes
});

router.beforeEach(async (to, from, next) => {

  const isLoggedIn = store.getters['user/sessionManager/isLoggedIn'];
  const isOwner = store.getters['user/sessionManager/isOwner'];
  const auth_token = localStorage.getItem("auth_token");
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (isLoggedIn === true) {
      to; from;
      next();
    } else {
      alert('Please login first');
      next({
        name: 'sign_in'
      });
    }
  }
  if (to.matched.some(record => record.meta.cannotBeAuthenticated)) {
    if (isLoggedIn === false) {
      to; from;
      next();

    } else {
      alert('Please log out first');
      next({
        name:'home'
      });
    }
  }

  if (to.matched.some(record => record.meta.requiresOwnerStatus)) {
    if(isOwner === true) {
      to; from;
      next();
    } else {
      alert('In order to be able to create a restaurant, you need to be registered as an owner')
  //     //Todo: redirect to user edit profile page
  //     // next({
  //     //   path: 'user/:id/edit',
  //     //   query: { redirect: to.fullPath }
  //     // });
      next();
    }
  }
  if (to.matched.some(record => record.meta.verifyUserId)) {
      let user_id = getUserId();
      console.log(user_id);
      let response = await store.dispatch("user/sessionManager/verifyUserId",
        { payload:
          { auth_token:auth_token,
            user_id: user_id
          }
        }
      )
      console.log(response.data)
      if( response.data === true){
        next();
      } else {
        alert('nope');
        next({
          name:'home'
        });
      }
  }
  next();


});
function getUserId(){
  return store.getters['user/sessionManager/getUserId'];
}
export default router
