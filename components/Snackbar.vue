<template>
  <v-snackbar
    v-model="snackbar.visible"
    :color="snackbar.color"
    timeout="10000"
    multi-line
    top
  >
    <v-layout align-center pr-4>
      <v-icon class="pr-3" dark large>
        {{ snackbar.icon }}
      </v-icon>
      <v-layout column>
        <div class="subtitle-1 font-weight-black">
          <strong>{{ snackbar.title }}</strong>
        </div>
        <div class="title font-weight-medium">
          {{ snackbar.text }}
        </div>
      </v-layout>
    </v-layout>

    <template #action="{ attrs }">
      <v-btn icon v-bind="attrs" @click="snackbar.visible = false">
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
import snackbar from '~/plugins/snackbar/snackbar'
export default {
  data () {
    return {
      snackbar: {
        color: null,
        icon: null,
        text: null,
        title: null,
        visible: false
      }
    }
  },

  beforeMount () {
    snackbar.event.$on('show', (options) => {
      this.SnackbarShow(options.type, options.text)
    })
  },
  methods: {
    SnackbarShow (type, text) {
      if (!type) { return }
      switch (type) {
        case 'error':
          this.snackbar = {
            color: 'error',
            icon: 'mdi-close-circle',
            title: 'Error',
            text,
            visible: true
          }
          break
        case 'info':
          this.snackbar = {
            color: 'blue',
            icon: 'mdi-chat-alert',
            title: 'From : Steto Javellana',
            text,
            visible: true
          }
          break
        case 'success':
          this.snackbar = {
            color: 'success',
            icon: 'mdi-check-circle',
            title: 'Success',
            text,
            visible: true
          }
          break
        case 'warning':
          this.snackbar = {
            color: 'warning',
            icon: 'mdi-alert-circle',
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
</style>
