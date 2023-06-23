
import axios, { type AxiosRequestConfig } from "axios";
import type { Restaurant } from "@/types/restaurant/restaurant";

const BASE_URL = "http://localhost:3000";
const API = `${BASE_URL}/restaurants.json`;
const state = {
  restaurants: <Restaurant[]>[]
};
const getters = {
  getRestaurants(state: { restaurants: any }) {
    return state.restaurants;
  },
};
const actions = {
    async fetchRestaurants({ commit }: any) {
      try {
        const response = await axios.get<Restaurant[]>(API);
        commit('setRestaurants', response.data);
      } catch (error) {
        // handle error
      }
    },
}
const mutations = {
  setRestaurants(
    state: { restaurants: any; auth_token: any },
    data: {
      data: { restaurants: any };
    }
  ) {
    state.restaurants = data;
  },
}
export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
