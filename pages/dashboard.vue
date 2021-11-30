<template>
  <div id="dashboard">
    <v-container fluid>
      <v-row class="mb-1">
        <v-col cols="12" md="4">
          <v-hover v-slot="{ hover }" open-delay="200">
            <v-card :elevation="hover ? 16 : 2" outlined>
              <v-row justify="center" align="center">
                <v-col>
                  <v-list-item three-line class="mx-2">
                    <v-list-item-content>
                      <div class="mb-4">
                        <v-btn fab color="error" elevation="1">
                          <v-icon color="white">
                            mdi-close-circle
                          </v-icon>
                        </v-btn>
                      </div>
                      <v-list-item-title
                        class="headline mb-2 font-weight-medium"
                      >
                        <animated-number :number="earningStats.slp_inventory" />
                      </v-list-item-title>
                      <v-list-item-subtitle class="font-weight-medium">
                        Unclaimed SLP
                      </v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                </v-col>
                <v-col class="d-flex justify-end">
                  <v-avatar size="100" class="ma-3" tile>
                    <v-img src="img/UNCLAIMED_SLP.png" />
                  </v-avatar>
                </v-col>
              </v-row>
            </v-card>
          </v-hover>
        </v-col>
        <v-col cols="12" md="4">
          <v-hover v-slot="{ hover }" open-delay="200">
            <v-card :elevation="hover ? 16 : 2" outlined>
              <v-row justify="center" align="center">
                <v-col>
                  <v-list-item three-line class="mx-2">
                    <v-list-item-content>
                      <div class="mb-4">
                        <v-btn fab color="success" elevation="1">
                          <v-icon color="white">
                            mdi-check-circle
                          </v-icon>
                        </v-btn>
                      </div>
                      <v-list-item-title
                        class="headline mb-2 font-weight-medium"
                      >
                        <animated-number :number="earningStats.slp_ronin" />
                      </v-list-item-title>
                      <v-list-item-subtitle class="font-weight-medium">
                        Claimed SLP
                      </v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                </v-col>
                <v-col class="d-flex justify-end">
                  <v-avatar size="100" class="ma-3" tile>
                    <v-img src="img/CLAIMED_SLP.png" />
                  </v-avatar>
                </v-col>
              </v-row>
            </v-card>
          </v-hover>
        </v-col>
        <v-col cols="12" md="4">
          <v-hover v-slot="{ hover }" open-delay="200">
            <v-card :elevation="hover ? 16 : 2" outlined>
              <v-row justify="center" align="center">
                <v-col>
                  <v-list-item three-line class="mx-2">
                    <v-list-item-content>
                      <div class="mb-4">
                        <v-btn fab color="cyan" elevation="1">
                          <v-icon color="white">
                            mdi-circle-slice-8
                          </v-icon>
                        </v-btn>
                      </div>
                      <v-list-item-title
                        class="headline mb-2 font-weight-medium"
                      >
                        <animated-number :number="earningStats.slp_total" />
                      </v-list-item-title>
                      <v-list-item-subtitle class="font-weight-medium">
                        Total SLP
                      </v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                </v-col>
                <v-col class="d-flex justify-end">
                  <v-avatar size="100" class="ma-3" tile>
                    <v-img src="img/SLP.png" />
                  </v-avatar>
                </v-col>
              </v-row>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
      <v-row class="mb-1">
        <v-col cols="12" md="8">
          <v-card class="mt-4">
            <v-sheet
              class="v-sheet--offset mx-auto"
              color="cyan"
              elevation="12"
              max-width="calc(100% - 32px)"
            >
              <v-sparkline
                :labels="labels"
                :value="value"
                color="white"
                line-width="2"
                padding="16"
                auto-draw
                show-labels
              />
            </v-sheet>

            <v-card-text class="pt-0">
              <div class="text-h6 font-weight-medium mb-2">
                Impression of gained SLP this week
              </div>
              <v-divider class="my-2" />
              <v-icon class="mr-2" small>
                mdi-clock
              </v-icon>
              <span
                class="text-caption grey--text font-weight-light"
              >last update 26 minutes ago</span>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="4" class="mt-n2">
          <v-card>
            <v-card-title class="justify-center">
              Your Investment
            </v-card-title>
            <v-card-text>
              <v-row class="text-center">
                <v-list-item two-line>
                  <v-list-item-content>
                    <v-list-item-title class="headline">
                      &#8369; 23,000
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-row>
            </v-card-text>
            <v-divider class="mt-3 mb-5" />
            <v-row justify="center" align="center">
              <v-col class="border">
                <v-list-item three-line>
                  <v-list-item-content>
                    <div class="mb-4 text-center">
                      Return of Investment
                    </div>
                    <v-row justify="center" align="center">
                      <v-col>
                        <v-progress-circular
                          rotate="360"
                          size="100"
                          width="15"
                          value="70"
                          color="cyan"
                        >
                          70%
                        </v-progress-circular>
                      </v-col>
                      <v-col class="text-center">
                        <v-list-item-title class="headline mb-1">
                          &#8369; 16,100
                        </v-list-item-title>
                        <v-list-item-subtitle class="ml-2">
                          Remaining Balance
                        </v-list-item-subtitle>
                      </v-col>
                    </v-row>
                  </v-list-item-content>
                </v-list-item>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-container fluid>
      <v-data-table
        item-key="name"
        :headers="headers"
        :items="dailyStats"
        class="elevation-1 mt-n4"
        loading-text="Loading... Please wait"
        :loading="loadingTable"
        :items-per-page="10"
        :footer-props="{
          itemsPerPageOptions: [5, 10, 15, 20, -1],
          'show-current-page': true,
          'show-first-last-page': true,
        }"
      >
        <template #top>
          <v-toolbar flat>
            <v-toolbar-title>Daily Stats</v-toolbar-title>
            <v-divider class="mx-4" inset vertical />
            <v-spacer />
            <v-tooltip bottom>
              <template #activator="{ on, attrs }">
                <v-btn
                  v-bind="attrs"
                  fab
                  color="cyan"
                  dark
                  :loading="loading"
                  small
                  v-on="on"
                  @click="resultStats()"
                >
                  <v-icon small>
                    mdi-card-account-details-star
                  </v-icon>
                </v-btn>
              </template>
              <span>Show Stats Today</span>
            </v-tooltip>
          </v-toolbar>
        </template>
        <template #[`item.axies`]="{ item }">
          <v-avatar
            v-for="(axie, i) in item.axies"
            :key="i"
            class="mt-2"
            size="42"
          >
            <v-img :src="axie" />
          </v-avatar>
        </template>
        <template #[`item.datetime`]="{ item }">
          {{ formatDate(item.datetime) }}
        </template>
        <template #[`item.energy`]="{ item }">
          {{ energy(item) }}
        </template>
        <template #[`item.reward`]="{ item }">
          {{ daily(item.reward) }}
        </template>
        <template #[`item.pvp_total`]="{ item }">
          {{ lose(item) }}
        </template>
      </v-data-table>
      <v-dialog v-model="dialog" persistent max-width="800px">
        <v-card>
          <v-btn class="float-right" icon @click="dialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-card-title>
            <span class="text-h5">Daily Stats</span>
          </v-card-title>
          <v-card-text align="center" justify="center">
            <v-container>
              <v-chip
                class="px-8 mb-3 font-weight-bold overline"
                color="primary"
                large
              >
                DIVINE
              </v-chip>
              <span><p>You got a perfect score for today.</p>
                <p>
                  Maybe your hidden ability that could dominate the arena has
                  been awakened.
                </p></span>
              <v-row class="mt-6">
                <v-col cols="12" sm="12" md="8">
                  <v-row class="mb-6">
                    <v-flex md6 class="mb-2">
                      <div class="font-weight-medium">
                        SLP Today
                      </div>
                      <span>
                        {{ statsResult.slp }}
                      </span>
                      <v-icon
                        :color="increaseColor(increaseSlp(statsResult.slp))"
                      >
                        {{ increaseIcon(increaseSlp(statsResult.slp)) }}
                      </v-icon>
                      <div class="caption">
                        ( Yesterday: {{ yesterdayStats.slp }} )
                      </div>
                    </v-flex>
                    <v-flex md6>
                      <div class="font-weight-medium">
                        Date Today
                      </div>
                      <span>
                        {{ formatDate(statsResult.datetime) }}
                      </span>
                    </v-flex>
                  </v-row>
                  <v-row class="mb-6">
                    <v-flex md4 sm6 xs6 class="mb-2">
                      <div class="font-weight-medium">
                        Win
                      </div>
                      <span>
                        {{ statsResult.pvp }}
                      </span>
                      <v-icon
                        :color="increaseColor(increaseWin(statsResult.pvp))"
                      >
                        {{ increaseIcon(increaseWin(statsResult.pvp)) }}
                      </v-icon>
                      <div class="caption">
                        ( Yesterday: {{ yesterdayStats.pvp }} )
                      </div>
                    </v-flex>
                    <v-flex md4 sm6 xs6>
                      <div class="font-weight-medium">
                        Lose
                      </div>
                      <span>
                        {{ lose(statsResult) }}
                      </span>
                      <v-icon :color="increaseColor(increaseLose(statsResult))">
                        {{ increaseIcon(increaseLose(statsResult)) }}
                      </v-icon>
                      <div class="caption">
                        ( Yesterday: {{ lose(yesterdayStats) }} )
                      </div>
                    </v-flex>
                    <v-flex md4 sm6 xs6>
                      <div class="font-weight-medium">
                        Draw
                      </div>
                      <span>
                        {{ statsResult.draw }}
                      </span>
                      <v-icon
                        :color="increaseColor(increaseDraw(statsResult.draw))"
                      >
                        {{ increaseIcon(increaseDraw(statsResult.draw)) }}
                      </v-icon>
                      <div class="caption">
                        ( Yesterday: {{ yesterdayStats.draw }} )
                      </div>
                    </v-flex>
                  </v-row>
                  <v-row>
                    <v-flex md4 sm6 xs6 class="mb-4">
                      <div class="font-weight-medium">
                        Daily Quest
                      </div>
                      <span>
                        <v-chip
                          :color="statsResult.reward === 1 ? 'success' : 'error' "
                        >
                          {{ daily(statsResult.reward) }}
                        </v-chip>

                      </span>
                    </v-flex>
                    <v-flex md4 sm6 xs6 class="mb-4">
                      <div class="font-weight-medium">
                        Remaining Energy
                      </div>
                      <span>
                        {{ energy(statsResult) }}
                      </span>
                    </v-flex>
                    <v-flex md4 sm6 xs6 class="mb-4">
                      <div class="font-weight-medium">
                        Current MMR
                      </div>
                      <span>
                        {{ statsResult.mmr }}
                      </span>
                      <v-icon
                        :color="increaseColor(increaseMmr(statsResult.mmr))"
                      >
                        {{ increaseIcon(increaseMmr(statsResult.mmr)) }}
                      </v-icon>
                      <div class="caption">
                        ( Yesterday: {{ yesterdayStats.mmr }} )
                      </div>
                    </v-flex>
                  </v-row>
                </v-col>
                <v-col cols="12" sm="12" md="4" class="d-none d-md-flex">
                  <div class="wrapper">
                    <v-img src="img/RESULT_TODAY.png" />
                  </div>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
        </v-card>
      </v-dialog>
      <v-dialog v-model="dialogToken" persistent max-width="800px">
        <v-card class="text-center">
          <v-btn class="float-right" icon @click="dialogToken = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-card-title class="mb-5">
            <span class="headline">Access Token</span>
          </v-card-title>
          <v-card-text>
            <v-form
              id="tokenForm"
              ref="tokenForm"
              v-model="tokenValid"
              lazy-validation
              class="mx-4 mt-5"
              @submit.prevent="saveToken"
            >
              <v-text-field
                v-model="token"
                class="my-4"
                label="Token"
                prepend-inner-icon="mdi-access-point"
                :rules="[...rules.requiredRules]"
              />
              <div>
                <QrcodeCapture
                  class="mb-6 v-btn v-btn--rounded theme--dark cyan black--text"
                  @decode="onDecode"
                />
              </div>
            </v-form>
          </v-card-text>
          <v-card-actions class="justify-center">
            <v-btn
              rounded
              color="cyan"
              dark
              min-width="100"
              width="100%"
              max-width="280"
              class="mb-6"
              :loading="loadingToken"
              type="submit"
              form="tokenForm"
            >
              <v-icon left dark>
                mdi-access-point-plus
              </v-icon>
              Save Token
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-container>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { QrcodeCapture } from 'vue-qrcode-reader'
export default {
  name: 'Dashboard',
  components: {
    QrcodeCapture
  },
  layout: 'user',
  middleware: ['permissions'],
  data: () => ({
    token: '',
    dialogToken: false,
    loadingToken: false,
    tokenValid: true,
    labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    value: [2200, 1675, 1410, 1390, 1310, 1460, 1250],
    loading: false,
    loadingTable: false,
    dialog: false,
    headers: [
      { text: 'Date', value: 'datetime' },
      { text: 'Daily', value: 'reward' },
      { text: 'Energy', value: 'energy' },
      { text: 'MMR', value: 'mmr' },
      { text: 'SLP', value: 'slp' },
      { text: 'Win', value: 'pvp' },
      { text: 'Draw', value: 'draw' },
      { text: 'Lose', value: 'pvp_total' }
    ],
    statsResult: {},
    rules: {
      requiredRules: [v => !!v || 'This field is required']
    }
  }),
  head () {
    return {
      title: 'Dashboard'
    }
  },
  meta: {
    permissions: [
      'view-dashboard',
      'create-dashboard',
      'edit-dashboard',
      'delete-dashboard'
    ]
  },
  computed: {
    ...mapGetters('dashboard', {
      dailyStats: 'dailyStats',
      yesterdayStats: 'yesterdayStats',
      earningStats: 'earningStats'
    })
  },

  created () {
    this.getDailyStats()
  },
  methods: {
    async getDailyStats () {
      this.loadingTable = true
      await this.$store.dispatch('dashboard/stats')
        .then(() => {
          this.loadingTable = false
        })
        .catch(err =>
          this.$alert.show({
            type: 'error',
            text: err.response.data.message
          })
        )
      this.loadingTable = false
    },
    async resultStats () {
      this.loading = true
      await this.$axios
        .get('result-stats')
        .then((res) => {
          this.statsResult = res.data
          this.dialog = true
          this.getDailyStats()
        })
        .catch((err) => {
          this.$alert.show({
            type: 'error',
            text: err.response.data.message
          })

          if (err.response.status === 403) {
            this.dialogToken = true
          }
        })
      this.loading = false
    },
    daily (reward) {
      if (reward === 0) {
        return 'Not Completed'
      } else if (reward === 1) {
        return 'Completed'
      } else {
        return 'No Token Found'
      }
    },
    energy (item) {
      if (item.energy === 99) {
        return 'No Token Found'
      }

      return item.reward === 0 && item.energy === 0 && item.slp === 0
        ? 'Full'
        : item.energy
    },
    lose (item) {
      return item.pvp_total - (item.pvp + item.draw)
    },
    formatDate (date) {
      const newDate = new Date(date)
      const year = newDate.getFullYear()
      const month = newDate.getMonth() + 1
      const day = newDate.getDate()
      let hours = newDate.getHours()
      let minutes = newDate.getMinutes()
      const ampm = hours >= 12 ? 'PM' : 'AM'
      hours = hours % 12
      hours = hours || 12 // the hour '0' should be '12'
      hours = hours < 10 ? '0' + hours : hours
      // appending zero in the start if hours less than 10
      minutes = minutes < 10 ? '0' + minutes : minutes
      return (
        month +
        '/' +
        day +
        '/' +
        year +
        ' ' +
        hours +
        ':' +
        minutes +
        ' ' +
        ampm
      )
    },
    increaseSlp (val) {
      if (val > this.yesterdayStats.slp) {
        return 1
      } else if (val < this.yesterdayStats.slp) {
        return 0
      } else {
        return -1
      }
    },
    increaseWin (val) {
      if (val > this.yesterdayStats.pvp) {
        return 1
      } else if (val < this.yesterdayStats.pvp) {
        return 0
      } else {
        return -1
      }
    },
    increaseDraw (val) {
      if (val > this.yesterdayStats.draw) {
        return 1
      } else if (val < this.yesterdayStats.draw) {
        return 0
      } else {
        return -1
      }
    },
    increaseLose (val) {
      const yesterdayLose =
        this.yesterdayStats.pvp_total -
        (this.yesterdayStats.pvp + this.yesterdayStats.draw)
      if (val.pvp_total - (val.pvp + val.draw) > yesterdayLose) {
        return 1
      } else if (val.pvp_total - (val.pvp + val.draw) < yesterdayLose) {
        return 0
      } else {
        return -1
      }
    },
    increaseMmr (val) {
      if (val > this.yesterdayStats.mmr) {
        return 1
      } else if (val < this.yesterdayStats.mmr) {
        return 0
      } else {
        return -1
      }
    },
    increaseIcon (val) {
      if (val === 1) {
        return 'mdi-chevron-double-up'
      } else if (val === 0) {
        return 'mdi-chevron-double-down'
      } else {
        return 'mdi-unfold-less-horizontal'
      }
    },
    increaseColor (val) {
      if (val === 1) {
        return 'success'
      } else if (val === 0) {
        return 'error'
      } else {
        return ''
      }
    },
    saveToken () {
      if (this.$refs.tokenForm.validate()) {
        this.loadingToken = true
        this.$axios
          .post('update-token', { token: this.token })
          .then((res) => {
            this.$alert.show({
              type: 'success',
              text: res.data.message
            })
            this.loadingToken = false
            this.dialogToken = false
          })
          .catch((err) => {
            this.$alert.show({
              type: 'error',
              text: err.response.data.message
            })
            this.loadingToken = false
          })
      }
    },
    onDecode (result) {
      this.token = result
    }
  }
}
</script>

<style scoped>
.v-sheet--offset {
  top: -24px;
  position: relative;
}

.wrapper {
  display: inline-block;
  height: 150px;
  width: 250px;
}

.wrapper img {
  height: 100%;
  width: 100%;
  object-fit: contain;
}
</style>
