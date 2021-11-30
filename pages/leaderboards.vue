<template>
  <div id="leaderboards">
    <v-container fluid>
      <v-card>
        <v-tabs v-model="tab" right>
          <v-tab href="#local-rank">
            Local Rank
          </v-tab>
          <v-tab href="#world-rank">
            World Rank
          </v-tab>

          <v-tabs-items v-model="tab">
            <v-tab-item value="local-rank">
              <LocalRank />
            </v-tab-item>
            <v-tab-item value="world-rank">
              <WorldRank />
            </v-tab-item>
          </v-tabs-items>
        </v-tabs>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import LocalRank from '~/components/leaderboards/LocalRank.vue'
import WorldRank from '~/components/leaderboards/WorldRank.vue'
export default {
  components: {
    LocalRank,
    WorldRank
  },
  layout: 'user',
  middleware: ['permissions'],
  data: () => ({
    tab: null
  }),
  meta: {
    permissions: ['view-leaderboards', 'create-leaderboards', 'edit-leaderboards', 'delete-leaderboards']
  }
}
</script>

<style>
</style>
