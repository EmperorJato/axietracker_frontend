import alert from '~/components/Alert.vue'

const Plugin = {
  install (Vue, options = {}) {
    /**
     * Makes sure that plugin can be installed only once
     */
    if (this.installed) {
      return
    }
    this.installed = true

    /**
     * Create event bus
     */

    this.event = new Vue()

    /**
     * Plugin methods
     */
    Vue.prototype.$alert = {
      show (options = {}) {
        Plugin.event.$emit('show', options, true)
      }
    }

    /**
     * Registration of <alert/> component
     */
    Vue.component('Alert', alert)
  }
}

export default Plugin
