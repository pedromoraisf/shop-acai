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
    pushOrdersChange(state, payload) {
      return state.orders.push(payload);
    },
    showAddOrderChange(state, payload) {
      return state.showAddOrder = payload;
    }
  },
  actions: {
    commitOrdersChange({ commit }, payload) {
      commit("ordersChange", payload);
    },
    commitPushOrdersChange({ commit }, payload) {
      commit("pushOrdersChange", payload);
    },
    commitShowAddOrder({ commit }, payload) {
      commit("showAddOrderChange", payload);
    }
  },
  modules: {
  }
})
