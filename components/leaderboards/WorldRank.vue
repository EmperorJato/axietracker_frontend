<template>
  <v-card>
    <v-card-title>
      World Rank
      <v-spacer />
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="worldRanks"
      :search="search"
      :sort-by="['rank.elo']"
      :sort-desc="['rank.elo']"
      :loading="loadingTable"
      loading-text="Loading... Please wait"
    >
      <template #[`item.index`]="{ index }">
        {{ index + 1 }}
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
      worldRanks: 'worldRanks'
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
        .dispatch('leaderboards/worldRanks')
        .then(() => { this.loadingTable = false })
        .catch((err) => {
          this.$alert.show({
            type: 'error',
            text: err.response.data.message
          })
          this.loadingTable = false
        })
    }
  }
}
</script>

<style>
</style>
