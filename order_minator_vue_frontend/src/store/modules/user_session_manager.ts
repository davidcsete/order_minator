import axios from "axios";

const BASE_URL = "http://localhost:3000/";
import store from "../index"




const state = {
  auth_token: null,
  user: {
    id: null,
    user_name: null,
    email: null,
    is_admin: null,
    type: null,
    company_name: null
  },
};
const getters = {
  getAuthToken(state: { auth_token: any }) {
    return state.auth_token;
  },
  getUserEmail(state: { user: { email: any } }) {
    return state.user?.email;
  },
  getUserID(state: { user: { id: any } }) {
    return state.user?.id;
  },
   isLoggedIn(state: {
     user: any; auth_token: string | null
}) {
    const auth_token = localStorage.getItem("auth_token")
    const isLoggedOut = state.auth_token == null || state.auth_token == JSON.stringify(null) || auth_token == null;
    if( auth_token != null && (state.auth_token == null)) {
       store.dispatch("userSessionManager/loginUserWithToken",
       {payload:{auth_token:auth_token}})
      return state.user != null;
    }

    return !isLoggedOut;
  },
  isAdmin(state: { user: { is_admin: any } }) {
    return state.user?.is_admin;
  },

};
const actions = {
  registerUser({ commit }: any, payload: any) {
    return new Promise((resolve, reject) => {
      axios
        .post(`${BASE_URL}users`, payload)
        .then((response) => {
          commit("setUserInfo", response);
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
  loginUser({ commit }: any, payload: any) {
    new Promise((resolve, reject) => {
      axios
        .post(`${BASE_URL}users/sign_in`, payload)
        .then((response) => {
          commit("setUserInfo", response);
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
  logoutUser({ commit }: any) {
    const config = {
      data: {
        headers: {
          authorization: state.auth_token,
        },
      },
    };
    new Promise<void>((resolve, reject) => {
      axios
        .delete(`${BASE_URL}users/sign_out`, config)
        .then(() => {
          commit("resetUserInfo");
          resolve();
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
  loginUserWithToken({commit}: any, payload: { auth_token: any }) {
    const config = {
      headers: {
        Authorization: payload.payload.auth_token,
      },
    };
    new Promise((resolve, reject) => {
      axios
        .get(`${BASE_URL}member-data`, config)
        .then((response) => {
          commit("setUserInfoFromToken",response);
          // mutations.setUserInfoFromToken(state,{data:{user:{}}})
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
};
const mutations = {
  setUserInfo(
    state: { user: any; auth_token: any },
    data: {
      data: { user: any };
      headers: { authorization: string | number | boolean };
    }
  ) {
    state.user = data.data.user;
    state.auth_token = data.headers.authorization;
    axios.defaults.headers.common["Authorization"] = data.headers.authorization;
    localStorage.setItem("auth_token", data.headers.authorization.toString());
  },
  setUserInfoFromToken(
    state: { user: any; auth_token: any },
    data: {
      data: { user: any }
}
  ) {
    state.user = data.data.user;
    state.auth_token = localStorage.getItem("auth_token");
  },
  resetUserInfo(state: {
    user: { id: null ; user_name: null; email: null; is_admin: null };
    auth_token: null;
  }) {
    state.user = {
      id: null,
      user_name: null,
      email: null,
      is_admin: null,
    };
    state.auth_token = null;
    localStorage.removeItem("auth_token");
    axios.defaults.headers.common["Authorization"] = !null;
  },
};
export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
