import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    orders: [], 
    showAddOrder: false
  },
  mutations: {
    ordersChange(state, payload) {
      return state.orders = payload;
    },
    showAddOrderChange(state, payload) {
      return state.showAddOrder = payload;
    }
  },
  actions: {
    commitOrdersChange({ commit }, payload) {
      commit("ordersChange", payload);
    },
    commitShowAddOrder({ commit }, payload) {
      commit("showAddOrderChange", payload);
    }
  },
  modules: {
  }
})
