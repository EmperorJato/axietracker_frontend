<template>
  <v-app id="auth">
    <Toolbar :color="color" :flat="flat" />
    <v-main>
      <Alert />
      <v-container class="fill-height text-center" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" md="8">
            <transition name="fade" mode="out-in">
              <Nuxt />
            </transition>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <v-scale-transition>
      <v-btn
        v-show="fab"
        v-scroll="scroll"
        fab
        dark
        fixed
        bottom
        right
        color="#23262D"
        @click="toTop"
      >
        <v-icon> mdi-arrow-up </v-icon>
      </v-btn>
    </v-scale-transition>
  </v-app>
</template>

<script>
export default {
  name: 'Home',
  data: () => ({
    color: '',
    flat: null,
    fab: null
  }),
  computed: {},
  watch: {
    fab (val) {
      if (val) {
        this.color = '#23262D'
        this.flat = false
      } else {
        this.color = 'transparent'
        this.flat = true
      }
    }
  },
  mounted () {
    const top = window.pageYOffset || 0
    if (top <= 60) {
      this.color = 'transparent'
      this.flat = true
    }
  },
  methods: {
    scroll (e) {
      if (process.client) {
        if (typeof window === 'undefined') {
          return
        }
        const top = window.pageYOffset || e.target.scrollTop || 0
        this.fab = top > 60
      }
    },
    toTop () {
      this.$vuetify.goTo(0)
    }
  }
}
</script>
<style scoped>
.v-main {
  background-image: url("~/static/img/bg_main.png");
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-color: #00bcd4;
  color: #fff;
}
</style>

<style>

.v-main a {
  text-decoration: none !important;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
  transform: translateX(2em);
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}
</style>
