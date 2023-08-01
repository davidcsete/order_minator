import { createStore } from "vuex";
import sessionManager from "./modules/user/session_manager";
import restaurantList from "./modules/restaurant_list";

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    user: {
      namespaced: true,
      modules:{
        sessionManager: sessionManager
      }
    },
    restaurantList: restaurantList
  },
});
