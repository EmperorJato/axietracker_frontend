<template>
  <div id="profile">
    <v-container fluid>
      <v-row>
        <v-col cols="12" md="4">
          <v-card class="text-center">
            <v-img
              src="img/profile_bg.jpg"
              :height="$vuetify.breakpoint.smAndDown ? '110px' : '160px'"
              style="overflow: visible"
            >
              <v-hover>
                <template #default="{ hover }">
                  <v-avatar
                    style="postion: absolute; top: 70%"
                    :style="{ border: themeColor }"
                    width="120px"
                    class="pa-1"
                    height="110px"
                  >
                    <v-img
                      :src="$config.BACKEND_URL + `/img/${user.image}`"
                      max-width="120"
                      max-height="110"
                    />
                    <v-fade-transition>
                      <v-overlay v-if="hover" absolute color="#036358">
                        <v-btn @click="dialogImage = true">
                          Edit
                        </v-btn>
                      </v-overlay>
                    </v-fade-transition>
                  </v-avatar>
                </template>
              </v-hover>
            </v-img>
            <v-card-text class="mt-14">
              <div v-if="$auth.user.id === user.id">
                <v-tooltip bottom>
                  <template #activator="{ on, attrs }">
                    <v-btn
                      v-bind="attrs"
                      color="cyan"
                      dark
                      icon
                      small
                      v-on="on"
                      @click="access()"
                    >
                      <v-icon>mdi-qrcode</v-icon>
                    </v-btn>
                  </template>
                  <span>Generate QR Code</span>
                </v-tooltip>
              </div>
              <h1 class="mb-1">
                {{ user.name }}
              </h1>

              <span class="subtitle-2 mt-1">
                <v-chip class="ma-2" color="error"> SSS-Class Player </v-chip>
              </span>

              <v-tabs v-model="tab" icons-and-text centered>
                <v-tabs-slider />

                <v-tab href="#stats">
                  Stats
                  <v-icon> mdi-chart-pie </v-icon>
                </v-tab>

                <v-tab href="#info">
                  Info
                  <v-icon> mdi-account-settings </v-icon>
                </v-tab>
              </v-tabs>

              <v-tabs-items v-model="tab" class="my-2">
                <v-tab-item value="stats">
                  <div align="center">
                    <apexchart
                      type="pie"
                      :options="pieOptions"
                      :series="pieSeries"
                    />
                  </div>

                  <div class="my-6">
                    <v-row class="my-2">
                      <v-flex md4 sm4 xs4>
                        <div class="caption">
                          Total Win
                        </div>
                        <span>
                          <animated-number :number="userStats.total_win" />
                        </span>
                      </v-flex>
                      <v-flex md4 sm4 xs4>
                        <div class="caption">
                          Total Draw
                        </div>
                        <span>
                          <animated-number :number="userStats.total_draw" />
                        </span>
                      </v-flex>
                      <v-flex md4 sm4 xs4>
                        <div class="caption">
                          Total Lose
                        </div>
                        <span>
                          <animated-number :number="userStats.total_lose" />
                        </span>
                      </v-flex>
                    </v-row>
                    <v-row class="my-4">
                      <v-flex md4 sm4 xs4>
                        <div class="caption">
                          Highest MMR
                        </div>
                        <span>
                          <animated-number :number="userStats.highest_mmr" />
                        </span>
                      </v-flex>
                      <v-flex md4 sm4 xs4>
                        <div class="caption">
                          Average SLP
                        </div>
                        <span>
                          <animated-number :number="userStats.average_slp" />
                        </span>
                      </v-flex>
                      <v-flex md4 sm4 xs4>
                        <div class="caption">
                          Absent
                        </div>
                        <span>
                          <animated-number :number="userStats.total_absent" />
                        </span>
                      </v-flex>
                    </v-row>
                  </div>
                </v-tab-item>
                <v-tab-item value="info" class="mb-2">
                  <v-container class="mt-2">
                    <div class="text-right">
                      <v-menu>
                        <template #activator="{ on: menu, attrs }">
                          <v-tooltip bottom>
                            <template #activator="{ on: tooltip }">
                              <v-btn
                                color="cyan"
                                dark
                                icon
                                v-bind="attrs"
                                v-on="{ ...tooltip, ...menu }"
                              >
                                <v-icon>mdi-pencil</v-icon>
                              </v-btn>
                            </template>
                            <span>Edit Profile</span>
                          </v-tooltip>
                        </template>
                        <v-list>
                          <v-list-item
                            @click="dialog = true"
                          >
                            <v-list-item-title>Change Details</v-list-item-title>
                          </v-list-item>
                          <v-list-item
                            @click="dialogPassword = true"
                          >
                            <v-list-item-title>Change Password</v-list-item-title>
                          </v-list-item>
                        </v-list>
                      </v-menu>
                      <!-- <v-tooltip bottom>
                        <template #activator="{ on, attrs }">
                          <v-btn
                            v-bind="attrs"
                            color="cyan"
                            dark
                            icon
                            v-on="on"
                            @click="editItem(user)"
                          >
                            <v-icon>mdi-pencil</v-icon>
                          </v-btn>
                        </template>
                        <span>Edit Profile</span>
                      </v-tooltip> -->
                    </div>
                    <v-row>
                      <v-col cols="12">
                        <v-text-field
                          hide-details
                          :value="user.metamask_address"
                          label="Metamask Address"
                          readonly
                        />
                      </v-col>
                      <v-col cols="12">
                        <v-text-field
                          hide-details
                          :value="user.ronin_address"
                          label="Ronin Address"
                          readonly
                        />
                      </v-col>
                      <v-col cols="12">
                        <v-text-field
                          :value="user.contact_number"
                          label="Contact Number"
                          readonly
                          hide-details
                        />
                      </v-col>
                      <v-col cols="12">
                        <v-text-field
                          :value="user.email"
                          label="Email"
                          readonly
                          hide-details
                        />
                      </v-col>
                      <v-col cols="12">
                        <v-textarea
                          :value="user.address"
                          label="Address"
                          readonly
                          hide-details
                        />
                      </v-col>
                    </v-row>
                  </v-container>
                </v-tab-item>
              </v-tabs-items>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="8">
          <v-card class="d-none d-sm-flex mb-5">
            <v-card-text>
              <apexchart
                type="line"
                :options="lineOptions"
                :series="lineSeries"
              />
            </v-card-text>
          </v-card>
          <v-card>
            <v-card-title>
              Battle Logs
              <v-spacer />
              <v-select
                :items="lastBattles"
                label="Battles"
                item-text="text"
                item-value="value"
              />
            </v-card-title>
            <v-card-text>
              <v-simple-table>
                <template #default>
                  <thead>
                    <tr>
                      <th class="text-center">
                        You
                      </th>
                      <th class="text-center">
                        Opponent
                      </th>
                      <th class="text-center">
                        Opponent's MMR
                      </th>
                      <th class="text-center">
                        Result
                      </th>
                      <th class="text-center">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="item in battleLogs" :key="item">
                      <td class="text-center">
                        <v-avatar
                          v-for="image in item.you.team"
                          :key="image.id"
                          size="50"
                        >
                          <v-img :src="image" />
                        </v-avatar>
                      </td>
                      <td class="text-center">
                        <v-avatar
                          v-for="image in item.opponent.team"
                          :key="image.id"
                          size="50"
                        >
                          <v-img :src="image" />
                        </v-avatar>
                      </td>
                      <td class="text-center">
                        {{ item.opponent.mmr }}
                      </td>
                      <td class="text-center">
                        {{ item.result }}
                      </td>

                      <td class="text-center">
                        {{ item.result }}
                      </td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-dialog v-model="dialog" max-width="500px" scrollable>
      <v-card>
        <v-card-title>
          <span class="headline">Edit Profile</span>
        </v-card-title>

        <v-card-text class="mt-5">
          <v-form
            id="form"
            ref="form"
            v-model="valid"
            lazy-validation
            @submit.prevent="save"
          >
            <v-row class="mt-3">
              <v-col cols="12">
                <v-text-field v-model="form.name" label="Name" />
              </v-col>
              <v-col cols="12">
                <v-text-field
                  v-model="form.metamask_address"
                  label="Metamask Address"
                />
              </v-col>
              <v-col cols="12">
                <v-text-field
                  v-model="form.ronin_address"
                  label="Ronin Address"
                />
              </v-col>
              <v-col cols="12">
                <v-text-field
                  v-model="form.contact_number"
                  label="Contact Number"
                />
              </v-col>
              <v-col cols="12">
                <v-text-field v-model="form.email" label="Email" />
              </v-col>
              <v-col cols="12">
                <v-textarea v-model="form.address" label="Address" />
              </v-col>
            </v-row>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn color="red" text @click="close">
            Cancel
          </v-btn>
          <v-btn
            color="primary"
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
    <v-dialog v-model="dialogPassword" max-width="500px" scrollable>
      <v-card>
        <v-card-title>
          <span class="headline">Change Password</span>
        </v-card-title>

        <v-card-text class="mt-5">
          <v-form
            id="formPassword"
            ref="formPassword"
            v-model="validPassword"
            lazy-validation
            @submit.prevent="savePassword"
          >
            <v-row class="mt-3">
              <v-col cols="12">
                <v-text-field
                  v-model="password.old_password"
                  label="Old Password"
                  :type="oldPasswordShow ? 'text' : 'password'"
                  :append-icon="oldPasswordShow ? 'mdi-eye' : 'mdi-eye-off'"
                  @click:append="oldPasswordShow = !oldPasswordShow"
                />
              </v-col>
              <v-col cols="12">
                <v-text-field
                  v-model="password.new_password"
                  label="New Password"
                  :type="newPasswordShow ? 'text' : 'password'"
                  :append-icon="newPasswordShow ? 'mdi-eye' : 'mdi-eye-off'"
                  @click:append="newPasswordShow = newPasswordShow"
                />
              </v-col>
              <v-col cols="12">
                <v-text-field
                  v-model="password.new_password_confirmation"
                  label="New Password Confirmation"
                  :type="newPasswordShow ? 'text' : 'password'"
                />
              </v-col>
            </v-row>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn color="red" text @click="closePassword">
            Cancel
          </v-btn>
          <v-btn
            color="primary"
            text
            form="formPassword"
            type="submit"
            :loading="loading"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog v-model="dialogImage" max-width="800px">
      <v-card class="text-center">
        <v-btn class="float-right" icon @click="dialogImage = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
        <v-card-title class="mb-5">
          <span class="headline">Edit Image</span>
        </v-card-title>
        <v-card-text>
          <v-form
            id="imageForm"
            ref="imageForm"
            v-model="imageValid"
            lazy-validation
            class="mx-4 mt-5"
            @submit.prevent="saveImage"
          >
            <v-file-input
              v-model="profileImage"
              accept="image/png, image/jpeg, image/bmp"
              prepend-inner-icon="mdi-camera"
              label="Image"
              :prepend-icon="null"
              :clearable="false"
              @change="previewImage"
            />
            <div v-if="imageUrl">
              <v-img :src="imageUrl" contain height="100px" />
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
            :loading="loadingImage"
            type="submit"
            form="imageForm"
          >
            <v-icon left dark>
              mdi-content-save
            </v-icon>
            Save Image
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog
      v-model="loadingProfile"
      hide-overlay
      persistent
      width="300"
    >
      <v-card
        color="primary"
        dark
      >
        <v-card-text>
          Please wait...
          <v-progress-linear
            indeterminate
            color="white"
            class="mb-0"
          />
        </v-card-text>
      </v-card>
    </v-dialog>
    <v-overlay :value="loadingProfile" />
  </div>
</template>

<script>
import Web3 from 'web3'
export default {
  layout: 'user',
  data: () => ({
    loadingProfile: false,
    tab: null,
    lineSeries: [
      {
        name: 'SLP Earned',
        type: 'column',
        data: []
      },
      {
        name: 'Wins',
        type: 'line',
        data: []
      }
    ],
    lineOptions: {
      chart: {
        height: 100,
        type: 'line',
        foreColor: '',
        toolbar: {
          show: true,
          tools: {
            download: false,
            selection: false,
            zoom: false,
            zoomin: false,
            zoomout: false,
            pan: false,
            reset: false,
            customIcons: []
          }
        }
      },
      title: {
        text: 'Stats'
      },
      responsive: [
        {
          breakpoint: 320,
          options: {
            chart: {
              height: 80
            }
          }
        }
      ],
      stroke: {
        width: [0, 4]
      },
      dataLabels: {
        enabled: true,
        enabledOnSeries: [1]
      },
      labels: [],
      xaxis: {
        type: 'text'
      },
      yaxis: [
        {
          title: {
            text: 'SLP Earned'
          }
        },
        {
          opposite: true,
          title: {
            text: 'Winning Record'
          }
        }
      ],

      tooltip: {
        theme: ''
      },
      colors: ['#00BCD4', '#4CAF50']
    },
    profileImage: null,
    imageUrl: null,
    loadingImage: false,
    dialogImage: false,
    dialogPassword: false,
    imageValid: true,
    oldPasswordShow: false,
    newPasswordShow: false,
    pieSeries: [],
    pieOptions: {
      chart: {
        type: 'pie',
        foreColor: '',
        width: '200px'
      },

      labels: ['Total Win', 'Total Draw', 'Total Lose'],
      legend: {
        show: true,
        position: 'bottom',
        horizontalAlign: 'center'
      },

      colors: ['#00BCD4', '#4CAF50', '#F44336'],
      responsive: [
        {
          breakpoint: 320,
          options: {
            chart: {
              width: 130
            },
            legend: {
              show: true,
              position: 'right',
              horizontalAlign: 'center'
            }
          }
        }
      ]
    },
    dialog: false,
    valid: true,
    validPassword: true,
    image: null,
    loading: false,
    form: {
      name: '',
      metamask_address: '',
      ronin_address: '',
      email: '',
      contact_number: '',
      address: ''
    },
    password: {
      old_password: '',
      new_password: '',
      new_password_confirmation: ''
    },
    user: {
      image: '',
      name: '',
      metamask_address: '',
      ronin_address: '',
      email: '',
      contact_number: '',
      address: ''
    },
    userStats: {
      average_slp: 0,
      highest_mmr: 0,
      total_draw: 0,
      total_lose: 0,
      total_pvp: 0,
      total_win: 0,
      winrate: 0,
      total_absent: 0
    },
    lastBattles: [
      { text: 'Last 5 Battles', value: 5 },
      { text: 'Last 10 Battles', value: 10 },
      { text: 'Last 15 Battles', value: 15 },
      { text: 'Last 20 Battles', value: 20 },
      { text: 'All Battles', value: 100 }
    ],
    battleLogs: [
      {
        you: {
          team: [
            'https://storage.googleapis.com/assets.axieinfinity.com/axies/1798984/axie/axie-full-transparent.png',
            'https://storage.googleapis.com/assets.axieinfinity.com/axies/1685619/axie/axie-full-transparent.png',
            'https://storage.googleapis.com/assets.axieinfinity.com/axies/1685719/axie/axie-full-transparent.png'
          ]
        },
        opponent: {
          team: [
            'https://storage.googleapis.com/assets.axieinfinity.com/axies/1798984/axie/axie-full-transparent.png',
            'https://storage.googleapis.com/assets.axieinfinity.com/axies/1685619/axie/axie-full-transparent.png',
            'https://storage.googleapis.com/assets.axieinfinity.com/axies/1685719/axie/axie-full-transparent.png'
          ],
          mmr: 1206
        },
        result: 1,
        battle_uuid: 'asdjlasdj9i09123s'
      },
      {
        you: {
          team: [
            'https://storage.googleapis.com/assets.axieinfinity.com/axies/1798984/axie/axie-full-transparent.png',
            'https://storage.googleapis.com/assets.axieinfinity.com/axies/1685619/axie/axie-full-transparent.png',
            'https://storage.googleapis.com/assets.axieinfinity.com/axies/1685719/axie/axie-full-transparent.png'
          ]
        },
        opponent: {
          team: [
            'https://storage.googleapis.com/assets.axieinfinity.com/axies/1798984/axie/axie-full-transparent.png',
            'https://storage.googleapis.com/assets.axieinfinity.com/axies/1685619/axie/axie-full-transparent.png',
            'https://storage.googleapis.com/assets.axieinfinity.com/axies/1685719/axie/axie-full-transparent.png'
          ],
          mmr: 1206
        },
        result: 0
      },
      {
        you: {
          team: [
            'https://storage.googleapis.com/assets.axieinfinity.com/axies/1798984/axie/axie-full-transparent.png',
            'https://storage.googleapis.com/assets.axieinfinity.com/axies/1685619/axie/axie-full-transparent.png',
            'https://storage.googleapis.com/assets.axieinfinity.com/axies/1685719/axie/axie-full-transparent.png'
          ]
        },
        opponent: {
          team: [
            'https://storage.googleapis.com/assets.axieinfinity.com/axies/1798984/axie/axie-full-transparent.png',
            'https://storage.googleapis.com/assets.axieinfinity.com/axies/1685619/axie/axie-full-transparent.png',
            'https://storage.googleapis.com/assets.axieinfinity.com/axies/1685719/axie/axie-full-transparent.png'
          ],
          mmr: 1206
        },
        result: 0
      }
    ]
  }),

  computed: {
    themeColor () {
      return this.$vuetify.theme.dark === true
        ? '5px solid #1E1E1E'
        : '5px solid #FFFFFF'
    }
  },
  watch: {
    '$vuetify.theme.dark' (newVal, oldVal) {
      if (newVal === true) {
        this.lineOptions = {
          chart: {
            foreColor: 'rgba(250,250,250, 0.7)'
          },
          tooltip: {
            theme: 'dark'
          }
        }
        this.pieOptions = {
          chart: {
            foreColor: 'rgba(250,250,250, 0.7)'
          }
        }
      } else {
        this.lineOptions = {
          chart: {
            foreColor: 'rgba(0,0,0, 0.7)'
          },
          tooltip: {
            theme: 'light'
          }
        }

        this.pieOptions = {
          chart: {
            foreColor: 'rgba(0,0,0, 0.7)'
          }
        }
      }
    },
    '$route.query.id': {
      handler () {
        this.initialize()
      },
      deep: true
    }
  },
  created () {
    this.initialize()
  },
  mounted () {
    if (this.$vuetify.theme.dark === true) {
      this.lineOptions = {
        chart: {
          foreColor: 'rgba(250,250,250, 0.7)'
        },
        tooltip: {
          theme: 'dark'
        }
      }
    } else {
      this.lineOptions = {
        chart: {
          foreColor: 'rgba(0,0,0, 0.7)'
        },
        tooltip: {
          theme: 'light'
        }
      }
    }
  },
  methods: {
    async initialize () {
      this.loadingProfile = true
      if (this.$route.query.id) {
        await this.$store
          .dispatch('user/setProfile', this.$route.query.id)
          .then((res) => {
            this.user = this.$store.state.user.profile
          })
          .catch((err) => {
            console.log(err)
          })
        this.userProfileStats()
      } else {
        this.user = this.$auth.user
      }
    },

    async userProfileStats () {
      this.pieSeries.length = 0
      await this.$axios
        .post('user-stats', { id: this.$route.query.id })
        .then((res) => {
          this.loadingProfile = false
          this.userStats = res.data.user_stats
          this.pieSeries.push(res.data.user_stats.total_win,
            res.data.user_stats.total_draw,
            res.data.user_stats.total_lose)

          this.lineOptions = {
            labels: res.data.user_chart.dates
          }
          this.lineSeries[0].data = res.data.user_chart.slps
          this.lineSeries[1].data = res.data.user_chart.wins
        })
        .catch(err => console.log(err))
    },

    close () {
      this.dialog = false
      this.loading = false
      this.$refs.form.reset()
    },

    closePassword () {
      this.dialogPassword = false
      this.loading = false
      this.$refs.formPassword.reset()
    },

    editItem (user) {
      this.form = Object.assign({}, user)
      this.dialog = true
    },
    async save () {
      this.loading = true
      await this.$axios
        .put(`user/${this.user.id}`, this.form)
        .then((res) => {
          console.log(res)
          const updatedUser = res.data.user
          this.user = updatedUser
          this.$auth.fetchUser()
          this.$alert.show({
            type: 'success',
            text: res.data.message
          })
        })
        .catch((err) => {
          this.$alert.show({
            type: 'error',
            text: err
          })
        })
      this.close()
    },
    async savePassword () {
      this.loading = true
      await this.$axios
        .put(`change-password/${this.user.id}`, this.password)
        .then((res) => {
          console.log(res)
          this.$alert.show({
            type: 'success',
            text: res.data.message
          })
          this.closePassword()
        })
        .catch((err) => {
          console.log(err)
          this.$alert.show({
            type: 'error',
            text: err.response.data.message
          })
        })
    },
    async saveImage () {
      this.loadingImage = true
      const data = new FormData()
      data.append('_method', 'PUT')
      data.append('image', this.profileImage)
      await this.$axios
        .post(`saveImage/${this.user.id}`, data)
        .then((res) => {
          console.log(res)
          const updatedUser = { ...this.$auth.user }
          updatedUser.image = res.data.image
          this.$auth.setUser(updatedUser)
          this.$alert.show({
            type: 'success',
            text: res.data.message
          })
          this.dialogImage = false
          this.loadingImage = false
        })
        .catch((err) => {
          console.log(err)
          this.loadingImage = false
        })
    },
    previewImage () {
      if (!this.profileImage) {
        return
      }
      this.imageUrl = URL.createObjectURL(this.profileImage)
    },
    async access () {
      const web3 = new Web3()

      await this.$axios
        .post('random-message', { scholar_id: this.$auth.user.id })
        .then((res) => {
          console.log(res)
          const web = web3.eth.accounts.sign(
            res.data.random_message,
            res.data.key
          )

          this.accessToken = {
            roninAddress: res.data.ronin,
            message: web.message,
            signature: web.signature
          }

          this.generateToken()
        })
        .catch((err) => {
          if (err.response.status === 405) {
            this.$alert.show({
              type: 'error',
              text: err.response.data.message
            })
          }
        })
    },

    async generateToken () {
      await this.$axios
        .post('signature', this.accessToken)
        .then((res) => {
          console.log(res)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }
}
</script>

<style scoped>
</style>
