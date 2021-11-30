<template>
  <v-app>
    <Navigation />
    <v-main>
      <Alert />
      <v-container fluid>
        <Nuxt />
      </v-container>
      <Snackbar />
    </v-main>
  </v-app>
</template>

<script>
export default {
  created () {
    this.$vuetify.theme.dark = localStorage.getItem('theme') === 'true'
  }
}
</script>

<style scoped>
/*
#app {
    background-color: var(--v-background-base);
} */
</style>
