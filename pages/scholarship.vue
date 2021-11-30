<template>
  <div id="sholarship">
    <v-container fluid>
      <v-row>
        <v-col cols="12" md="4">
          <v-hover v-slot="{ hover }" open-delay="200">
            <v-card :elevation="hover ? 16 : 2" outlined>
              <v-row justify="center" align="center">
                <v-col>
                  <v-list-item two-line>
                    <v-list-item-content>
                      <v-list-item-title
                        class="headline mb-2 font-weight-medium"
                      >
                        <animated-number :number="scholars.total_scholar" />
                      </v-list-item-title>
                      <v-list-item-subtitle class="font-weight-medium">
                        Total Scholar
                      </v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                </v-col>
                <v-col class="d-flex justify-end">
                  <v-avatar size="100" class="ma-3" width="100">
                    <v-img src="img/SCHOLAR_AXIE.png" />
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
                  <v-list-item two-line>
                    <v-list-item-content>
                      <v-list-item-title
                        class="headline mb-2 font-weight-medium"
                      >
                        <animated-number :number="scholars.total_axies" />
                      </v-list-item-title>
                      <v-list-item-subtitle class="font-weight-medium">
                        Total Axies
                      </v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                </v-col>
                <v-col class="d-flex justify-end">
                  <v-avatar size="100" class="ma-3" width="100">
                    <v-img src="img/TOTAL_AXIE.png" />
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
                  <v-list-item two-line>
                    <v-list-item-content>
                      <v-list-item-title
                        class="headline mb-2 font-weight-medium"
                      >
                        <animated-number :number="scholars.total_unclaimed" />
                      </v-list-item-title>
                      <v-list-item-subtitle class="font-weight-medium">
                        Total Unclaimed SLP
                      </v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                </v-col>
                <v-col class="d-flex justify-end">
                  <v-avatar size="100" class="ma-3" width="100">
                    <v-img src="img/TOTAL_UNCLAIMED_SLP.png" />
                  </v-avatar>
                </v-col>
              </v-row>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="6">
          <v-hover v-slot="{ hover }" open-delay="200">
            <v-card :elevation="hover ? 16 : 2" outlined>
              <v-row justify="center" align="center">
                <v-col>
                  <div
                    class="d-flex"
                    :class="
                      $vuetify.breakpoint.smAndDown
                        ? 'flex-column'
                        : ' flex-row'
                    "
                  >
                    <v-list-item two-line>
                      <v-list-item-content>
                        <v-list-item-title
                          class="mb-2 font-weight-medium"
                          :class="[
                            $vuetify.breakpoint.smAndUp
                              ? 'headline'
                              : 'subtitle-1',
                          ]"
                        >
                          {{ scholars.today_top_scholar.user }}
                        </v-list-item-title>
                        <v-list-item-subtitle class="font-weight-medium">
                          Top Scholar Today
                        </v-list-item-subtitle>
                      </v-list-item-content>
                    </v-list-item>
                    <v-list-item two-line>
                      <v-list-item-content>
                        <v-list-item-title class="subtitle-1 grey--text">
                          ({{
                            scholars.today_top_scholar.win +
                              "/" +
                              scholars.today_top_scholar.lose +
                              "/" +
                              scholars.today_top_scholar.draw
                          }})
                        </v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </div>
                </v-col>
                <v-col class="d-flex justify-end">
                  <v-avatar size="100" class="ma-3" width="100">
                    <v-img src="img/TOP_SCHOLAR.png" />
                  </v-avatar>
                </v-col>
              </v-row>
            </v-card>
          </v-hover>
        </v-col>
        <v-col cols="12" md="6">
          <v-hover v-slot="{ hover }" open-delay="200">
            <v-card :elevation="hover ? 16 : 2" outlined>
              <v-row justify="center" align="center">
                <v-col>
                  <div
                    class="d-flex"
                    :class="
                      $vuetify.breakpoint.smAndDown
                        ? 'flex-column'
                        : ' flex-row'
                    "
                  >
                    <v-list-item two-line>
                      <v-list-item-content>
                        <v-list-item-title
                          class="mb-2 font-weight-medium"
                          :class="[
                            $vuetify.breakpoint.smAndUp
                              ? 'headline'
                              : 'subtitle-1',
                          ]"
                        >
                          <animated-number :number="scholars.total_slp_today" />
                          <v-icon
                            :color="
                              changeIconColor(
                                scholars.total_slp_today,
                                scholars.total_slp_yesterday
                              )
                            "
                          >
                            {{
                              changeIcon(
                                scholars.total_slp_today,
                                scholars.total_slp_yesterday
                              )
                            }}
                          </v-icon>
                        </v-list-item-title>
                        <v-list-item-subtitle class="font-weight-medium">
                          SLP Earned Today
                        </v-list-item-subtitle>
                      </v-list-item-content>
                    </v-list-item>
                    <v-list-item two-line>
                      <v-list-item-content>
                        <v-list-item-title
                          class="subtitle-1 grey--text mb-2 font-weight-medium"
                        >
                          <animated-number
                            :number="scholars.total_slp_yesterday"
                          />
                        </v-list-item-title>

                        <v-list-item-subtitle
                          class="grey--text font-weight-medium"
                        >
                          Yesterday
                        </v-list-item-subtitle>
                      </v-list-item-content>
                    </v-list-item>
                  </div>
                </v-col>
                <v-col class="d-flex justify-end">
                  <v-avatar size="100" class="ma-3" width="100">
                    <v-img src="img/TOTAL_SLP_EARNED_TODAY.png" />
                  </v-avatar>
                </v-col>
              </v-row>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
      <v-data-table
        item-key="id"
        :headers="headers"
        :items="setScholarship"
        class="elevation-1 mt-6"
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
            <v-toolbar-title>Scholars</v-toolbar-title>
            <v-divider class="mx-4" inset vertical />
            <v-spacer />
            <v-tooltip bottom>
              <template #activator="{ on, attrs }">
                <v-btn v-bind="attrs" icon v-on="on" @click="dataToday()">
                  <v-icon>mdi-database-arrow-up</v-icon>
                </v-btn>
              </template>
              <span>Get all the data today</span>
            </v-tooltip>
            <v-tooltip bottom>
              <template #activator="{ on, attrs }">
                <v-btn
                  v-bind="attrs"
                  fab
                  color="cyan"
                  dark
                  small
                  v-on="on"
                  @click="dialog = true"
                >
                  <v-icon small>
                    mdi-account-plus
                  </v-icon>
                </v-btn>
              </template>
              <span>New Scholar</span>
            </v-tooltip>

            <v-dialog v-model="dialog" max-width="500px">
              <v-card>
                <v-card-title class="mb-5">
                  <span class="headline">{{ formTitle }}</span>
                </v-card-title>

                <v-card-text>
                  <v-container>
                    <v-form
                      id="form"
                      ref="form"
                      v-model="valid"
                      @submit.prevent="save"
                    >
                      <v-row>
                        <v-col v-if="editedIndex === -1" cols="12">
                          <v-select
                            v-model="editedItem.scholar_id"
                            :items="applyingScholarship"
                            label="Select Scholar"
                            dense
                            prepend-icon="mdi-account-group"
                            item-text="name"
                            item-value="id"
                          />
                        </v-col>
                        <v-col cols="12">
                          <v-text-field
                            v-model="editedItem.name"
                            label="Name"
                            prepend-icon="mdi-account"
                            :rules="[...rules.requiredRules]"
                            :error-messages="errors.name"
                          />
                        </v-col>
                        <v-col cols="12">
                          <v-text-field
                            v-model="editedItem.key"
                            label="Private Key"
                            prepend-icon="mdi-key-star"
                          />
                        </v-col>
                        <v-col v-if="editedIndex === -1" cols="12">
                          <v-text-field
                            v-model="editedItem.manager_ronin"
                            label="Ronin Address"
                            prepend-icon="mdi-all-inclusive"
                            :rules="[...rules.requiredRules]"
                            :error-messages="errors.ronin_address"
                          />
                        </v-col>
                        <v-col cols="12">
                          <span class="subtitle-1">Scholar's Rate</span>
                          <v-slider
                            v-model="editedItem.rate"
                            prepend-icon="mdi-sack-percent"
                            :max="slider.max"
                            :min="slider.min"
                            step="10"
                          >
                            <template #thumb-label="{ value }">
                              {{
                                slider.satisfactionEmojis[
                                  Math.min(value / 10, 10)
                                ]
                              }}
                            </template>
                          </v-slider>
                        </v-col>
                      </v-row>
                      <v-container class="text-center">
                        <v-row>
                          <v-flex md6>
                            <v-list-item two-line>
                              <v-list-item-content>
                                <v-list-item-title>
                                  {{ editedItem.rate }}%
                                </v-list-item-title>
                                <v-list-item-subtitle>
                                  Scholar Share
                                </v-list-item-subtitle>
                              </v-list-item-content>
                            </v-list-item>
                          </v-flex>
                          <v-divider vertical inset />
                          <v-flex md6>
                            <v-list-item two-line>
                              <v-list-item-content>
                                <v-list-item-title>
                                  {{ managerShare }}%
                                </v-list-item-title>
                                <v-list-item-subtitle>
                                  Manager Share
                                </v-list-item-subtitle>
                              </v-list-item-content>
                            </v-list-item>
                          </v-flex>
                        </v-row>
                      </v-container>
                    </v-form>
                  </v-container>
                </v-card-text>

                <v-card-actions>
                  <v-spacer />
                  <v-btn color="red" text @click="close">
                    Cancel
                  </v-btn>
                  <v-btn
                    color="cyan"
                    text
                    form="form"
                    type="submit"
                    :loading="loading"
                  >
                    Save
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>

            <v-dialog v-model="dialogDelete" max-width="500px">
              <v-card>
                <v-card-title class="headline">
                  Are you sure you want to delete this item?
                </v-card-title>
                <v-card-actions>
                  <v-spacer />
                  <v-btn color="blue darken-1" text @click="closeDelete">
                    Cancel
                  </v-btn>
                  <v-btn
                    color="red"
                    text
                    :loading="loading"
                    @click="deleteItemConfirm"
                  >
                    Confirm
                  </v-btn>
                  <v-spacer />
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-toolbar>
        </template>
        <template #[`item.energy`]="{ item }">
          {{ energy(item) }}
        </template>
        <template #[`item.daily`]="{ item }">
          <v-chip :color="getColor(item.daily)">
            {{ daily(item.daily) }}
          </v-chip>
        </template>
        <template #[`item.rate`]="{ item }">
          {{ item.rate + "%" }}
        </template>

        <template #[`item.actions`]="{ item }">
          <NuxtLink :to="{ name: 'profile', query: { id: item.scholar_id, name: item.name}}">
            <v-icon small class="mr-2">
              mdi-eye
            </v-icon>
          </NuxtLink>

          <v-icon small class="mr-2" @click="editItem(item)">
            mdi-pencil
          </v-icon>
          <v-icon small @click="deleteItem(item)">
            mdi-delete
          </v-icon>
        </template>
      </v-data-table>
    </v-container>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Sholarship',
  layout: 'user',
  middleware: ['permissions'],
  data: () => ({
    loadingTable: false,
    slider: {
      min: 0,
      max: 100,
      satisfactionEmojis: [
        '😭',
        '😭',
        '😢',
        '☹️',
        '🙁',
        '😐',
        '🙂',
        '😊',
        '😁',
        '😄',
        '😍'
      ]
    },
    dialog: false,
    dialogDelete: false,
    loading: false,
    valid: true,
    headers: [
      { text: 'Name', value: 'name' },
      { text: 'Daily', value: 'daily' },
      { text: 'Energy', value: 'energy' },
      { text: 'MMR', value: 'mmr' },
      { text: 'Yesterday SLP', value: 'yesterday_slp' },
      { text: 'Today SLP', value: 'today_slp' },
      { text: 'Average SLP', value: 'average_slp' },
      { text: 'Rate', value: 'rate' },
      { text: 'Inventory', value: 'inventory' },
      { text: 'Actions', value: 'actions', sortable: false }
    ],
    editedIndex: -1,
    editedItem: {
      scholar_id: '',
      name: '',
      manager_ronin: '',
      rate: 0,
      key: ''
    },
    defaultItem: {
      name: ''
    },
    rules: {
      requiredRules: [v => !!v || 'This field is required']
    },
    errors: {
      name: ''
    },
    accessToken: {
      roninAddress: '',
      message: '',
      signature: ''
    }
  }),
  head () {
    return {
      title: 'Scholarship'
    }
  },
  meta: {
    permissions: [
      'view-scholarship',
      'create-scholarship',
      'edit-scholarship',
      'delete-scholarship'
    ]
  },

  computed: {
    ...mapGetters('scholarship', {
      applyingScholarship: 'applyingScholarship',
      setScholarship: 'scholarship',
      scholars: 'scholars'
    }),
    formTitle () {
      return this.editedIndex === -1 ? 'New Scholar' : 'Edit Scholar'
    },
    managerShare () {
      return 100 - this.editedItem.rate
    }
  },

  watch: {
    dialog (val) {
      val || this.close()
    },
    dialogDelete (val) {
      val || this.closeDelete()
    },
    options: {
      handler () {
        this.initialize()
      },
      deep: true
    }
  },

  created () {
    this.initialize()
  },

  methods: {
    async initialize () {
      this.loadingTable = true
      await this.$store
        .dispatch('scholarship/scholars')
        .then(() => {})
        .catch((err) => {
          this.$alert.show({
            type: 'error',
            text: err.response.data.message
          })
        })
      await this.$store.dispatch('scholarship/applyingScholarship')
      await this.$store
        .dispatch('scholarship/setScholarship')
        .then(() => {
          this.loadingTable = false
        })
        .catch((err) => {
          this.$alert.show({
            type: 'error',
            text: err.response.data.message
          })
          this.loadingTable = false
        })
    },

    editItem (item) {
      this.editedIndex = this.setScholarship.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },

    deleteItem (item) {
      this.editedIndex = this.categories.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialogDelete = true
    },

    async deleteItemConfirm () {
      try {
        this.loading = true

        const remove = await this.$axios.delete(
          `category/${this.editedItem.id}`,
          this.editedItem
        )
        if (remove.status === 200) {
          this.categories.splice(this.editedIndex, 1)
          this.closeDelete()
        }
      } catch (err) {
        console.log(err)
      } finally {
        this.loading = false
      }
    },

    close () {
      this.dialog = false
      this.loading = false
      this.$refs.form.reset()
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

    closeDelete () {
      this.dialogDelete = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

    async save () {
      this.loading = true

      if (this.editedIndex > -1) {
        await this.$store
          .dispatch('scholarship/updateScholarship', this.editedItem)
          .then((res) => {
            console.log(res)
            this.close()
            this.loadingTable = true

            this.$alert.show({
              type: 'success',
              text: res.data.message
            })
          })
          .catch((err) => {
            console.log(err)

            this.$alert.show({
              type: 'success',
              text: err.response.data.message
            })
          })
      } else {
        await this.$store
          .dispatch('scholarship/addScholarship', this.editedItem)
          .then((res) => {
            console.log(res)
            this.$store.dispatch(
              'scholarship/removeApplyingScholarship',
              res.data.scholar.scholar_id
            )
            this.close()
            this.loadingTable = true
            this.$store.dispatch('scholarship/setScholarship').then(() => {
              this.loadingTable = false
            })
            this.$alert.show({
              type: 'success',
              text: res.data.message
            })
          })
          .catch((err) => {
            this.$snackbar.show({
              type: 'error',
              text: err.response.data.message
            })
            this.loading = false
          })
      }
    },
    getColor (daily) {
      return daily === 1 ? 'success' : 'error'
    },
    timestamp () {
      const today = new Date()
      const date =
        today.getMonth() + '/' + today.getDate() + '/' + today.getFullYear()
      const time =
        today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds()
      const timestamp = date + ' ' + time
      return timestamp
    },

    dateColor (date) {
      return new Date(date).toLocaleString() >=
        new Date(this.timestamp()).toLocaleString()
        ? 'success'
        : ''
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
    changeIcon ($today, $yesterday) {
      if ($today === $yesterday) {
        return 'mdi-unfold-less-horizontal'
      } else if ($today < $yesterday) {
        return 'mdi-chevron-double-down'
      } else {
        return 'mdi-chevron-double-up'
      }
    },

    changeIconColor ($today, $yesterday) {
      if ($today === $yesterday) {
        return ''
      } else if ($today < $yesterday) {
        return 'error'
      } else {
        return 'success'
      }
    },
    async dataToday () {
      await this.$axios
        .get('data-today')
        .then((res) => {
          console.log(res)
        })
        .catch(err => console.log(err))
    }
  }
}
</script>

<style>
</style>
