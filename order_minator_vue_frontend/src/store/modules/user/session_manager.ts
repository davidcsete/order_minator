import axios from "axios";

const BASE_URL = "http://localhost:3000/";
import store from "../../index"
import router from '../../../router'




const state = {
  auth_token: null,
  user: {
    id: null,
    email: null,
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
  getUserName(state: { user: { first_name: any, last_name: any } }) {
    return state.user?.first_name + " " + state.user?.last_name;
  },
  getUserId(state: { user: { id: any } }) {
    return state.user?.id;
  },
  getUserType(state: { user: { type: any } }) {
    return state.user?.type;
  },
  isOwner(state: { user: { type: any } }) {
    return state.user?.type === 'Owner';
  },
  isLoggedIn(state: {
     user: any; auth_token: string | null
}) {

    if (state.user == null)
      return false;
    const auth_token = localStorage.getItem("auth_token")
    const isLoggedOut = state.auth_token == null || state.auth_token == JSON.stringify(null) || auth_token == null;
    if( auth_token != null && (state.auth_token == null)) {
       store.dispatch("user/sessionManager/loginUserWithToken",
       {payload:{auth_token:auth_token}})

      return state.user != null;
    }

    return !isLoggedOut;
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
    router.push({name:'home'})

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
  loginUserWithToken({commit}: any, payload: {
    payload: {auth_token: any}
}) {
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
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
  async verifyUserId({commit}: any, payload: {
    payload: {auth_token: any, user_id: any}
}) {
    const config = {
      headers: {
        Authorization: payload.payload.auth_token
      },
      params: {
        id: payload.payload.user_id
      }
    };

    let response = await new Promise((resolve, reject) => {
      axios
        .get(`${BASE_URL}member-verify-id`, config)
        .then((response) => {

          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
    return response;
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
    user: { id: null ; user_name: null; email: null; type: null };
    auth_token: null;
  }) {
    state.user = {
      id: null,
      user_name: null,
      email: null,
      type: null,
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
