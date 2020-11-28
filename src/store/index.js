import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    appName: "ViewApp!"
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    welcome(state){
      return state.appName
    }
  }
})
