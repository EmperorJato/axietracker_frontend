export const state = () => ({
  applyingScholarship: [],
  scholarship: [],
  scholars: {
    total_scholar: 0,
    total_axies: 0,
    total_unclaimed: 0,
    total_slp_today: 0,
    total_slp_yesterday: 0,
    today_top_scholar: {
      user: '',
      win: 0,
      lose: 0,
      draw: 0,
      slp: 0
    }
  }
})

export const getters = {

  applyingScholarship (state) {
    return state.applyingScholarship
  },

  scholarship (state) {
    return state.scholarship
  },

  scholars (state) {
    return state.scholars
  }

}

export const mutations = {
  APPLYING_SCHOLARSHIP (state, payload) {
    state.applyingScholarship = payload
  },

  SCHOLARS (state, payload) {
    state.scholars = payload
  },

  SET_SCHOLARSHIP (state, payload) {
    state.scholarship = payload
  },

  ADD_SCHOLARSHIP (state, payload) {
    state.scholarship.push(payload)
  },

  UPDATE_SCHOLARSHIP (state, payload) {
    state.scholarship.push(payload)
  },

  REMOVE_APPLYING_SCHOLARSHIP (state, payload) {
    const i = state.applyingScholarship.map(item => item.id).indexOf(payload)
    state.applyingScholarship.splice(i, 1)
  }

}

export const actions = {
  async applyingScholarship ({ commit }) {
    const applyingScholarship = await this.$axios.get('applying-scholarship')
    commit('APPLYING_SCHOLARSHIP', applyingScholarship.data)
    return applyingScholarship
  },

  async setScholarship ({ commit }) {
    const setScholarship = await this.$axios.get('scholarship')
    commit('SET_SCHOLARSHIP', setScholarship.data)
    return setScholarship
  },

  async addScholarship ({ commit }, payload) {
    const addScholarship = await this.$axios.post('scholarship', payload)
    commit('ADD_SCHOLARSHIP', addScholarship.data)
    return addScholarship
  },

  async updateScholarship ({ commit }, payload) {
    const updateScholarship = await this.$axios.put('scholarship/' + payload.scholar_id, payload)
    commit('UPDATE_SCHOLARSHIP', updateScholarship.data)
    return updateScholarship
  },

  async scholars ({ commit }) {
    const scholars = await this.$axios.get('scholars')
    console.log(scholars)
    commit('SCHOLARS', scholars.data)
    return scholars
  },

  removeApplyingScholarship ({ commit }, payload) {
    commit('REMOVE_APPLYING_SCHOLARSHIP', payload)
  }
}
