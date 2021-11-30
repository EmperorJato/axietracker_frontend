<template>
  <div>
    <v-navigation-drawer v-model="drawer" app temporary dark color="primary">
      <v-list>
        <NuxtLink to="/">
          <v-list-item>
            <v-list-item-avatar>
              <v-icon>
                mdi-bookshelf
              </v-icon>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title class="title">
                Library System
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </NuxtLink>
      </v-list>

      <v-divider />

      <v-list>
        <v-list-item
          v-for="([icon, text, link], i) in items"
          :key="i"
          nuxt
          :to="link"
        >
          <v-list-item-icon>
            <v-icon>{{ icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="subtitle-1">
              {{ text }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      class="px-8"
      :color="color"
      :flat="flat"
      :class="{ expand: flat }"
      app
    >
      <v-toolbar-title>
        <NuxtLink to="/">
          <v-img max-width="150" src="logo.png" />
        </NuxtLink>
      </v-toolbar-title>
      <!-- <v-btn
        v-if="$route.name != 'index'"
        text
        dark

        nuxt
        class="white--text d-flex"
      >
        home
      </v-btn> -->
      <v-spacer />
      <v-btn
        v-show="$route.name!=='login' && $route.name !=='register'"
        rounded
        dark
        to="/login"
        nuxt
        class="white--text"
      >
        <v-icon left dark>
          mdi-login
        </v-icon>
        sign-in
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  props: {
    color: {
      type: String,
      default: ''
    },
    flat: Boolean
  },
  data: () => ({
    drawer: null,
    isXs: false,
    items: [
      ['mdi-login', 'Sign-in', '/login']
    ]
  }),
  watch: {
    isXs (val) {
      if (!val) {
        if (this.drawer) {
          this.drawer = false
        }
      }
    }
  },
  mounted () {
    this.onResize()
    window.addEventListener('resize', this.onResize, { passive: true })
  },
  methods: {
    onResize () {
      if (process.client) {
        this.isXs = window.innerWidth < 850
      }
    }
  }
}
</script>

<style scoped>
.v-toolbar {
  transition: 0.6s;
}

.expand {
  height: 80px !important;
  padding-top: 10px;
}
</style>
