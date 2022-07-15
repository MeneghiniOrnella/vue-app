import { createStore } from 'vuex';

export default createStore({
  state: {
    counter: 0
  },
  getters: {
  },
  mutations: {
    increaseCounter(state, payload) {
      state.counter = state.counter + payload
    },
    decreaseCounter(state, payload) {
      state.counter = state.counter - payload
    }
  },
  actions: {
    actionIncreaseCounter({ commit }) {
      commit('increaseCounter', 1)
    },
    actionDecreaseCounter({ commit }, num) {
      commit('decreaseCounter', num)
    },
    actionLikeButton({ commit },object){
      if(object.likeDislike) {
        commit('increaseCounter', object.num)
      } else {
        commit('decreaseCounter', object.num)
      }
    }
  },
  modules: {
  }
});
