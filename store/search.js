export const state = () => ({
  word: ''
})

export const getters = {
  word (state) {
    return state.word
  }
}

export const mutations = {
  SET_WORD (state, payload) {
    state.word = payload
  }
}

export const actions = {
  setWord ({ commit }, payload) {
    commit('SET_WORD', payload)
  }
}
