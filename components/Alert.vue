<template>
  <v-alert
    border="left"
    dense
    dismissible
    prominent
    :type="alert.type"
    transition="slide-x-reverse-transition"
    :value="alert.visible"
    class="pr-n4"
  >
    <div class="subtitle-1 font-weight-black">
      {{ alert.title }}
    </div>
    <div class="subtitle-2 font-weight-medium mb-1 mr-2">
      {{ alert.text }}
    </div>
  </v-alert>
</template>

<script>
import alert from '~/plugins/alert/alert'
export default {
  data () {
    return {
      alert: {
        type: null,
        text: null,
        title: null,
        visible: false
      }
    }
  },
  watch: {
    alert (newVal) {
      if (newVal) {
        setTimeout(() => { this.alert.visible = false }, 7000)
      }
    }
  },

  beforeMount () {
    alert.event.$on('show', (options) => {
      this.alertShow(options.type, options.text)
    })
  },
  methods: {
    alertShow (type, text) {
      if (!type) { return }
      switch (type) {
        case 'error':
          this.alert = {
            type: 'error',
            title: 'Error',
            text,
            visible: true
          }
          break
        case 'info':
          this.alert = {
            type: 'info',
            title: 'Info',
            text,
            visible: true
          }
          break
        case 'success':
          this.alert = {
            type: 'success',
            title: 'Success',
            text,
            visible: true
          }
          break
        case 'warning':
          this.alert = {
            type: 'warning',
            title: 'Warning',
            text,
            visible: true
          }
          break
      }
    }
  }
}
</script>

<style>

.v-alert {
  position: fixed;
  z-index: 99999;
  right: 0;
  margin-right: 1%;
  margin-top: 1%;
}

</style>
