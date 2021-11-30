<template>
  <section id="login">
    <v-card class="elevation-12" color="#23262D">
      <v-row>
        <v-col cols="12" md="8">
          <v-card-text class="mt-8">
            <h1 class="text-center white--text mb-5" :class="[$vuetify.breakpoint.mdAndUp ? 'display-1' : 'title']">
              AXIE TRACKER
            </h1>
            <v-form
              id="loginForm"
              ref="loginForm"
              v-model="loginValid"
              lazy-validation
              class="mx-4 mt-5"
              @submit.prevent="login"
            >
              <v-text-field
                v-model="form.email"
                dark
                color="primary"
                class="my-4"
                label="Email"
                prepend-inner-icon="mdi-email"
                :rules="[...rules.requiredRules, ...rules.emailRules]"
                type="email"
                :error-messages="errors.email"
              />

              <v-text-field
                v-model="form.password"
                dark
                color="primary"
                class="my-4 white--text"
                label="Password"
                prepend-inner-icon="mdi-lock"
                :rules="rules.requiredRules"
                :type="show1 ? 'text' : 'password'"
                :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append="show1 = !show1"
              />
            </v-form>

            <v-row class="justify-center mx-6">
              <h4>
                <NuxtLink to="/forgot" class="white--text">
                  Forgot Password
                </NuxtLink>
              </h4>
            </v-row>

            <v-btn
              rounded
              color="cyan"
              dark
              min-width="100"
              width="100%"
              max-width="280"
              class="mt-10 mb-6"
              :loading="loading"
              type="submit"
              form="loginForm"
            >
              <v-icon left dark>
                mdi-login
              </v-icon>
              Login
            </v-btn>
            <h4 class="hidden-md-and-up">
              <NuxtLink to="/register">
                Register
              </NuxtLink>
            </h4>
          </v-card-text>
        </v-col>
        <v-col cols="12" md="4" class="cyan d-none d-md-block ma-0 pa-0">
          <v-card-text class="white--text mt-12 text-center">
            <v-btn
              rounded
              outlined
              dark
              to="/register"
              nuxt
              class="mb-2"
            >
              <v-icon left dark>
                mdi-account-plus
              </v-icon>
              Register
            </v-btn>
            <h4>
              Don't have an account?
            </h4>
          </v-card-text>
          <v-spacer />
          <v-img src="img/LOGIN.png" />
        </v-col>
      </v-row>
    </v-card>
  </section>
</template>

<script>
export default {
  name: 'Login',
  layout: 'auth',
  data () {
    return {
      show1: false,
      loginValid: true,
      loading: false,
      form: {
        email: '',
        password: ''
      },
      rules: {
        requiredRules: [v => !!v || 'This field is required'],
        emailRules: [v => /.+@.+\..+/.test(v) || 'E-mail must be valid']
      },
      errors: {
        email: ''
      }
    }
  },
  head () {
    return {
      title: 'Login'
    }
  },

  methods: {
    async login () {
      if (this.$refs.loginForm.validate()) {
        try {
          this.loading = true
          await this.$auth.loginWith('laravelSanctum', { data: this.form }).then(() => {
            this.$router.push({ path: '/dashboard' })
          })
        } catch (err) {
          this.errors.email = err.response.data.errors.email
        } finally {
          this.loading = false
        }
      }
    }
  }

}
</script>
