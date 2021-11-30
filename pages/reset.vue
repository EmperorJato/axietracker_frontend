<template>
  <section id="forgot_password">
    <v-card class="elevation-12" color="#23262D">
      <v-row class="justify-center">
        <v-col :cols="$vuetify.breakpoint.mdAndUp ? 10 : 12">
          <v-card-text class="mt-8">
            <h1 class="text-center white--text mb-5" :class="[$vuetify.breakpoint.mdAndUp ? 'display-1' : 'title']">
              AXIE TRACKER
            </h1>
            <div class="text-center white--text mb-5" :class="[$vuetify.breakpoint.mdAndUp ? 'title' : 'subtitle-1']">
              Reset Password
            </div>
            <v-form
              id="resetForm"
              ref="resetForm"
              v-model="resetValid"
              lazy-validation
              class="mx-4 mt-5"
              @submit.prevent="reset"
            >
              <v-text-field
                v-model="form.email"
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
                class="my-2"
                label="Password"
                prepend-inner-icon="mdi-lock"
                :rules="[...rules.requiredRules]"
                :error-messages="errors.password"
                :type="show1 ? 'text' : 'password'"
                :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                color="primary"
                @click:append="show1 = !show1"
              />
              <v-text-field
                v-model="form.password_confirmation"
                class="my-2"
                label="Password Confirmation"
                prepend-inner-icon="mdi-lock"
                :rules="[...rules.requiredRules]"
                :type="show2 ? 'text' : 'password'"
                :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
                color="primary"
                @click:append="show2 = !show2"
              />
            </v-form>

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
              form="resetForm"
            >
              <v-icon left dark>
                mdi-email-check
              </v-icon>
              Save Email
            </v-btn>
          </v-card-text>
        </v-col>
      </v-row>
    </v-card>
  </section>
</template>

<script>
export default {
  name: 'Reset',
  layout: 'auth',
  middleware: ['reset'],
  data: () => ({
    show1: false,
    show2: false,
    resetValid: true,
    loading: false,
    form: {
      token: '',
      email: '',
      password: '',
      password_confirmation: ''
    },
    rules: {
      requiredRules: [v => !!v || 'This field is required'],
      emailRules: [v => /.+@.+\..+/.test(v) || 'E-mail must be valid']
    },
    errors: {
      email: ''
    }
  }),
  head () {
    return {
      title: 'Reset Password'
    }
  },
  beforeMount () {
    this.form.token = this.$route.query.token
  },
  methods: {
    async reset () {
      if (this.$refs.resetForm.validate()) {
        this.loading = true
        try {
          await this.$axios.post('reset', this.form)
            .then((res) => {
              this.$router.push({ path: '/login' })
              this.$alert.show({
                type: 'success',
                text: res.data.message
              })
            })
        } catch (err) {
          this.$alert.show({
            type: 'error',
            text: err.response.data.message
          })
        } finally {
          this.loading = false
        }
      }
    }
  }

}
</script>

<style>

</style>
