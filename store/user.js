export const state = () => ({
  profile: {},
  pieSeries: [],
})

export const getters = {

}

export const mutations = {
  SET_PROFILE (state, payload) {
    state.profile = payload
  },

  SET_PIE_STATS (state, payload) {
    state.pieSeries = payload
  }
}

export const actions = {
  async setProfile ({ commit }, payload) {
    const setProfile = await this.$axios.post('user-profile', { id: payload })
    commit('SET_PROFILE', setProfile.data)
    return setProfile
  }
}
