<template>
  <section id="forgot_password">
    <v-card class="elevation-12" color="#23262D">
      <v-row class="justify-center">
        <v-col :cols="$vuetify.breakpoint.mdAndUp ? 10 : 12">
          <v-card-text class="mt-8">
            <h1 class="text-center white--text mb-5" :class="[$vuetify.breakpoint.mdAndUp ? 'display-1' : 'title']">
              AXIE TRACKER
            </h1>
            <v-form
              id="forgotForm"
              ref="forgotForm"
              v-model="forgotValid"
              lazy-validation
              class="mx-4 mt-5"
              @submit.prevent="forgot"
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
              form="forgotForm"
            >
              <v-icon left dark>
                mdi-email-send
              </v-icon>
              Send Email
            </v-btn>
          </v-card-text>
        </v-col>
      </v-row>
    </v-card>
  </section>
</template>

<script>
export default {
  name: 'Forgot',
  layout: 'auth',
  auth: false,
  middleware: ['guest'],
  data: () => ({
    forgotValid: true,
    loading: false,
    form: {
      email: ''
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
      title: 'Forgot Password'
    }
  },
  methods: {
    async forgot () {
      if (this.$refs.forgotForm.validate()) {
        this.loading = true
        try {
          await this.$axios.post('forgot', this.form)
            .then((res) => {
              this.$refs.forgotForm.reset()
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
          this.errors.email = err.response.data.errors.email
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
