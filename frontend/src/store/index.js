import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    orders: []
  },
  mutations: {
    ordersChange(state, payload) {
      return state.orders = payload;
    }
  },
  actions: {
    commitOrdersChange({ commit }, payload) {
      commit("ordersChange", payload);
    }
  },
  modules: {
  }
})
