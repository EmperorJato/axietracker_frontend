export const state = () => ({
  dailyStats: [],
  yesterdayStats: [],
  earningStats: {
    slp_inventory: 0,
    slp_ronin: 0,
    slp_total: 0
  }
})

export const getters = {
  dailyStats (state) {
    return state.dailyStats
  },
  yesterdayStats (state) {
    return state.yesterdayStats
  },
  earningStats (state) {
    return state.earningStats
  }
}

export const mutations = {
  DAILY_STATS (state, payload) {
    state.dailyStats = payload
  },
  YESTERDAY_STATS (state, payload) {
    state.yesterdayStats = payload
  },
  EARNING_STATS (state, payload) {
    state.earningStats = payload
  }
}

export const actions = {
  async stats ({ commit }) {
    const stats = await this.$axios.get('daily-stats')
    commit('DAILY_STATS', stats.data.daily_stats)
    commit('YESTERDAY_STATS', stats.data.yesterday_stats)
    commit('EARNING_STATS', stats.data.earning_stats)
    return stats
  }
}
