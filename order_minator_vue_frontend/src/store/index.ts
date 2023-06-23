import { createStore } from "vuex";
import userSessionManager from "./modules/user_session_manager";
import restaurantList from "./modules/restaurant_list";

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    userSessionManager: userSessionManager,
    restaurantList: restaurantList
  },
});
