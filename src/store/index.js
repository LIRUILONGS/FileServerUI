import Vue from 'vue'
import Vuex from 'vuex'
import rootState from './state'
import rootMutations from './mutations'
import rootActions from './actions'
import rootGetters from './getters'
import modules from './modules'

Vue.use(Vuex)
export default new Vuex.Store({
  modules,
  state: rootState,
  mutations: rootMutations,
  actions: rootActions,
  getters: rootGetters
})