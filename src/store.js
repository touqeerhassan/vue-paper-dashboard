import Vuex from "vuex";
import Vue from "vue";

Vue.use(Vuex);


const state = {
  authenticated: false
};

const mutations = {
  UPDATE_AUTH(state, payload) {
    state.authenticated = payload;
  }
};

const actions = {
  updateAuth(context, isLoggedIn) {
    context.commit("UPDATE_AUTH", isLoggedIn);
  }
};

const getters = {
  getAuth(state) {
    return state.authenticated;
  }
};

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters
});

export default store;