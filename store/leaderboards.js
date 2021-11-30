export const state = () => ({
  localRanks: [],
  worldRanks: []
})

export const getters = {
  localRanks (state) {
    return state.localRanks
  },

  worldRanks (state) {
    return state.worldRanks
  }
}

export const mutations = {
  LOCAL_RANKS (state, payload) {
    state.localRanks = payload
  },

  WORLD_RANKS (state, payload) {
    state.worldRanks = payload
  }
}

export const actions = {
  async localRanks ({ commit }) {
    const localRanks = await this.$axios.get('local-rank')
    commit('LOCAL_RANKS', localRanks.data)
    return localRanks
  },

  async worldRanks ({ commit }) {
    const worldRanks = await this.$axios.get('world-rank')
    commit('WORLD_RANKS', worldRanks.data)
    return worldRanks
  }

}
