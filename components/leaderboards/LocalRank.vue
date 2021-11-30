<template>
  <v-card>
    <v-card-title>
      Local Rank
      <v-spacer />
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="localRanks"
      :search="search"
      :sort-by="['rank.elo']"
      :loading="loadingTable"
      loading-text="Loading... Please wait"
      @click:row="handleClick"
    >
      <template #[`item.index`]="{ item }">
        {{ localRanks.indexOf(item) + 1 }}
      </template>
      <template #[`item.user.image`]="{ item }">
        <v-avatar class="my-2" size="42">
          <v-img :src="$config.BACKEND_URL + `/img/${item.user.image}`" />
        </v-avatar>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data: () => ({
    loadingTable: false,
    headers: [
      { text: '#', value: 'index' },
      { text: 'Image', value: 'user.image' },
      { text: 'Name', value: 'user.name' },
      { text: 'IGN', value: 'name' },
      { text: 'MMR', value: 'elo' },
      { text: 'Rank', value: 'rank' }
    ]
  }),
  computed: {
    ...mapGetters('search', {
      search: 'word'
    }),
    ...mapGetters('leaderboards', {
      localRanks: 'localRanks'
    })
  },
  created () {
    this.$store.dispatch('search/word', '')
    this.initialize()
  },

  methods: {
    async initialize () {
      this.loadingTable = true
      await this.$store
        .dispatch('leaderboards/localRanks')
        .then(() => { this.loadingTable = false })
        .catch((err) => {
          this.$alert.show({
            type: 'error',
            text: err.response.data.message
          })
          this.loadingTable = false
        })
    },
    handleClick (item) {
      this.$router.push({ name: 'profile', query: { id: item.user.id, name: item.user.name } })
    }
  }
}
</script>

<style>
</style>
