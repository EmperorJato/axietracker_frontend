import snackbar from '~/components/Snackbar.vue'

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
    Vue.prototype.$snackbar = {
      show (options = {}) {
        Plugin.event.$emit('show', options, true)
      }
    }

    /**
     * Registration of <snackbar/> component
     */
    Vue.component('Snackbar', snackbar)
  }
}

export default Plugin
