export const state = () => ({
  isDark: localStorage.getItem('theme'),
  mode: null
})

export const actions = {
  changeTheme ({ commit }, payload) {
    commit('CHANGE_THEME', payload)
  }
}

export const mutations = {
  CHANGE_THEME (state, payload) {
    state.mode = payload
  }
}
