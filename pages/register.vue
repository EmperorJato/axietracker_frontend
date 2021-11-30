<template>
  <section id="register">
    <v-card class="elevation-12" color="#23262D" dark>
      <v-row>
        <v-col cols="12" md="4" class="cyan d-none d-md-block ma-0 pa-0">
          <v-img src="img/REGISTER.png" />
          <v-spacer />
          <v-card-text class="white--text mt-16">
            <div class="text-center mb-2">
              <v-btn rounded outlined dark to="/login" nuxt>
                <v-icon left dark>
                  mdi-login
                </v-icon>
                Login
              </v-btn>
            </div>
            <h4 class="text-center">
              Already have an account?
            </h4>
          </v-card-text>
        </v-col>
        <v-col cols="12" md="8">
          <v-card-text class="mt-8">
            <h1
              class="text-center white--text mb-3"
              :class="[$vuetify.breakpoint.mdAndUp ? 'display-1' : 'title']"
            >
              AXIE TRACKER
            </h1>

            <v-stepper v-model="e1" style="background-color: #23262D;" tile flat>
              <v-stepper-header>
                <v-stepper-step :complete="e1 > 1" step="1" editable :rules="[() => errors.contact_number ? false : true]">
                  Personal Information
                </v-stepper-step>

                <v-divider />

                <v-stepper-step :complete="e1 > 2" step="2">
                  Setup Account
                </v-stepper-step>
              </v-stepper-header>

              <v-stepper-items class="mt-n2">
                <v-form
                  id="registerForm"
                  ref="registerForm"
                  v-model="registerValid"
                  class="mx-n3"
                  lazy-validation
                  @submit.prevent="register"
                >
                  <v-stepper-content step="1">
                    <v-text-field
                      v-model="form.name"
                      class="my-2"
                      label="Name"
                      prepend-inner-icon="mdi-account"
                      :rules="[...rules.requiredRules]"
                      :error-messages="errors.name"
                      color="primary"
                    />
                    <v-text-field
                      v-model="form.contact_number"
                      class="my-2"
                      label="Contact Number"
                      prepend-inner-icon="mdi-phone"
                      :rules="[...rules.requiredRules]"
                      :error-messages="errors.contact_number"
                      color="primary"
                    />
                    <v-text-field
                      v-model="form.address"
                      class="my-2"
                      label="Address"
                      prepend-inner-icon="mdi-map-marker"
                      :rules="[...rules.requiredRules]"
                      :error-messages="errors.address"
                      color="primary"
                    />
                    <v-btn color="primary" class="mt-2" :disabled="nextStep()" @click="e1 = 2">
                      Continue
                    </v-btn>
                  </v-stepper-content>

                  <v-stepper-content step="2">
                    <v-text-field
                      v-model="form.email"
                      class="my-2"
                      label="Email"
                      prepend-inner-icon="mdi-email"
                      :rules="[...rules.requiredRules, ...rules.emailRules]"
                      type="email"
                      :error-messages="errors.email"
                      color="primary"
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

                    <v-btn
                      rounded
                      color="cyan"
                      dark
                      min-width="100"
                      width="100%"
                      max-width="280"
                      class="mt-2"
                      :loading="loading"
                      type="submit"
                      form="registerForm"
                    >
                      <v-icon left dark>
                        mdi-account-plus
                      </v-icon>
                      Register
                    </v-btn>
                  </v-stepper-content>
                </v-form>
              </v-stepper-items>
            </v-stepper>

            <h4 class="hidden-md-and-up">
              <NuxtLink to="/login">
                Login
              </NuxtLink>
            </h4>
          </v-card-text>
        </v-col>
      </v-row>
    </v-card>
  </section>
</template>

<script>
export default {
  name: 'Register',
  layout: 'auth',
  auth: false,
  middleware: ['guest'],
  data () {
    return {
      e1: 1,
      disableStep: true,
      show1: false,
      show2: false,
      registerValid: true,
      loading: false,
      form: {
        name: '',
        contact_number: '',
        address: '',
        email: '',
        password: '',
        password_confirmation: ''
      },
      rules: {
        requiredRules: [v => !!v || 'This field is required'],
        emailRules: [v => /.+@.+\..+/.test(v) || 'E-mail must be valid']
      },
      errors: {
        name: '',
        contact_number: '',
        address: '',
        email: '',
        password: '',
        password_confirmation: ''
      }
    }
  },
  head () {
    return {
      title: 'Register'
    }
  },
  computed: {
  },
  methods: {
    async register () {
      if (this.$refs.registerForm.validate()) {
        try {
          this.loading = true
          await this.$axios.get('sanctum/csrf-cookie')
          await this.$axios.post('register', this.form).then((res) => {
            this.$router.push({ name: 'login' })
            this.$alert.show({
              type: 'success',
              text: res.data.message
            })
          })
        } catch (err) {
          this.errors.name = err.response.data.errors.name
          this.errors.contact_number = err.response.data.errors.contact_number
          this.errors.address = err.response.data.errors.address
          this.errors.email = err.response.data.errors.email
          this.errors.password = err.response.data.errors.password
        } finally {
          this.loading = false
        }
      }
    },

    nextStep () {
      if ((this.form.name.length && this.form.contact_number.length && this.form.address.length) > 0) {
        return false
      }
      return true
    }
  }
}
</script>

<style  scoped>
</style>
