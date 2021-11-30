<template>
  <nav>
    <v-app-bar app class="line" height="90px">
      <v-app-bar-nav-icon
        class="hidden-lg-and-up"
        @click.stop="drawer = !drawer"
      />
      <v-spacer />
      <v-text-field
        v-model="search"
        solo
        rounded
        clearable
        label="Search"
        prepend-inner-icon="mdi-magnify"
        class="mt-8 mr-2"
        sm="2"
      />
      <v-tooltip bottom>
        <template #activator="{ on, attrs }">
          <v-btn
            v-model="theme"
            v-bind="attrs"
            icon
            v-on="on"
            @click="theme = !theme"
          >
            <v-icon>mdi-theme-light-dark</v-icon>
          </v-btn>
        </template>
        <span>{{ themeMode }}</span>
      </v-tooltip>
      <v-tooltip bottom>
        <template #activator="{ on, attrs }">
          <v-btn
            v-bind="attrs"
            icon
            v-on="on"
            @click.prevent="dialogLogout = true"
          >
            <v-icon>mdi-logout</v-icon>
          </v-btn>
        </template>
        <span>Logout</span>
      </v-tooltip>
      <v-dialog v-model="dialogLogout" max-width="500px">
        <v-card>
          <v-card-title class="text-h5 justify-center">
            Are you sure you want to logout?
          </v-card-title>
          <v-card-actions>
            <v-spacer />
            <v-btn color="red darken-1" text @click="dialogLogout = falses">
              Cancel
            </v-btn>
            <v-btn
              color="cyan darken-1"
              text
              :loading="loading"
              @click="logout"
            >
              CONFIRM
            </v-btn>
            <v-spacer />
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      app
      mini-variant
      mini-variant-width="122"
    >
      <v-list>
        <v-list-item color="cyan" class="mb-1">
          <v-list-item-content align="center" class="mt-n2">
            <v-list-item-avatar align="center" class="mb-2 px-4" size="50">
              <v-img
                :src="$config.BACKEND_URL + `/img/${$auth.user.image}`"
              />
            </v-list-item-avatar>

            <v-list-item-title class="caption text-wrap" align="center">
              <NuxtLink
                :to="{ name: 'profile', query: { id: $auth.user.id, name: $auth.user.name}}"
                style="text-decoration: none; color: inherit"
              >
                {{ $auth.user.name }}
              </NuxtLink>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item-group color="cyan">
          <div v-for="(item, i) in items" :key="i">
            <v-list-item v-if="$can(item.can)" :to="item.route" nuxt>
              <v-list-item-content align="center">
                <v-icon class="mb-3" align="center" v-text="item.icon" />
                <v-list-item-subtitle
                  align="center"
                  class="caption"
                  v-text="item.text"
                />
              </v-list-item-content>
            </v-list-item>
          </div>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  data () {
    return {
      loading: false,
      theme: false,
      dialogLogout: false,
      settings: [{ title: 'Logout', icon: 'mdi-logout' }],
      search: '',
      drawer: null,
      items: [
        {
          text: 'Dashboard',
          icon: 'mdi-tablet-dashboard',
          route: '/dashboard',
          can: 'view-dashboard'
        },
        {
          text: 'Scholarship',
          icon: 'mdi-account-group',
          route: '/scholarship',
          can: 'view-scholarship'
        },
        {
          text: 'Investment',
          icon: 'mdi-finance',
          route: '/investment',
          can: 'view-investment'
        },
        {
          text: 'Simulator',
          icon: 'mdi-barn',
          route: '/simulator',
          can: 'view-simulator'
        },
        {
          text: 'Leaderboards',
          icon: 'mdi-bulletin-board',
          route: '/leaderboards',
          can: 'view-leaderboards'
        },
        {
          text: 'Accounts',
          icon: 'mdi-account-box-multiple',
          route: '/accounts',
          can: 'view-accounts'
        }
      ]
    }
  },

  computed: {
    themeMode () {
      return this.$vuetify.theme.dark === true ? 'Light Mode' : 'Dark Mode'
    }
  },

  watch: {
    theme (val) {
      this.getTheme()
    }
  },

  methods: {
    async logout () {
      try {
        this.loading = true
        await this.$auth.logout().then(() => {
          this.$router.go()
        })
      } catch (err) {
        this.$alert.show({
          type: 'error',
          text: err.response.data.message
        })
      } finally {
        this.loading = false
      }
    },
    getTheme () {
      this.$vuetify.theme.dark = this.theme
      localStorage.setItem('theme', this.theme)
    }

  }
}
</script>

<style>
</style>
