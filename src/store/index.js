import Vue from 'vue'
import Vuex from 'vuex'
import * as Mutations from './mutationTypes.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    navBarIsActive:false,
    cartIsActive:false
  },
  mutations: {
    [Mutations.TOGGLE_NAVBAR](state){
      state.navBarIsActive = !state.navBarIsActive

    },
    [Mutations.TOGGLE_CART](state){
      state.cartIsActive = !state.cartIsActive

    },
  },
  actions: {
    toggleNavBar({commit}){
      commit(Mutations.TOGGLE_NAVBAR)
    },
    toggleCart({commit}){
      commit(Mutations.TOGGLE_CART)
    },

  },
  getters: {
    getNavBarIsActive: state => state.navBarIsActive,
    getCartIsActive: state => state.cartIsActive,
  },
  modules: {
  }
})
