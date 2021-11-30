export const state = () => ({
  notifications: []
})

export const getters = {
  notifications (state) {
    return state.notifications
  }
}

export const mutations = {
  ADD_NOTIFICATION (state, payload) {
    state.notifications.push(payload)
  }
}

export const actions = {
  async addNotification (context, payload) {
    await context.commit('ADD_NOTIFICATION', payload)
  }
}
