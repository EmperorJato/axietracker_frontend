<template>
  <div id="investment">
    <v-container fluid>
      <v-row>
        <v-col cols="12" md="6">
          <v-hover v-slot="{ hover }" open-delay="200">
            <v-card :elevation="hover ? 16 : 2" outlined>
              <v-row justify="center" align="center">
                <v-col>
                  <v-list-item two-line class="mx-2">
                    <v-list-item-content>
                      <v-list-item-title
                        class="mb-2 font-weight-medium"
                        :class="[
                          $vuetify.breakpoint.smAndUp
                            ? 'headline'
                            : 'subtitle-1',
                        ]"
                      >
                        &#8369; 123,000.000
                      </v-list-item-title>
                      <v-list-item-subtitle class="font-weight-medium">
                        Total Investment
                      </v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                </v-col>
                <v-col class="d-flex justify-end">
                  <v-avatar size="100" class="ma-3" width="100">
                    <v-img src="img/TOTAL_INVESTMENT.png" />
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
                  <div class="d-flex flex-row">
                    <v-list-item two-line class="mx-2">
                      <v-list-item-content>
                        <v-list-item-title
                          class="mb-2 font-weight-medium"
                          :class="[
                            $vuetify.breakpoint.smAndUp
                              ? 'headline'
                              : 'subtitle-1',
                          ]"
                        >
                          &#8369; 86,100.00
                        </v-list-item-title>
                        <v-list-item-subtitle class="font-weight-medium">
                          Investment Income
                        </v-list-item-subtitle>
                      </v-list-item-content>
                    </v-list-item>
                    <v-list-item two-line>
                      <v-list-item-content>
                        <v-list-item-title
                          class="grey--text mb-2 font-weight-medium"
                          :class="[
                            $vuetify.breakpoint.smAndUp
                              ? 'subtitle-1'
                              : 'subtitle-2',
                          ]"
                        >
                          &#8369; 36,900.00
                        </v-list-item-title>

                        <v-list-item-subtitle
                          class="grey--text font-weight-medium"
                        >
                          Balance Remaining for ROI
                        </v-list-item-subtitle>
                      </v-list-item-content>
                    </v-list-item>
                  </div>
                </v-col>
                <v-col
                  class="d-flex"
                  :class="[
                    $vuetify.breakpoint.smAndUp
                      ? 'justify-end'
                      : 'justify-center',
                  ]"
                >
                  <v-progress-circular
                    class="ma-3"
                    rotate="360"
                    size="100"
                    width="15"
                    value="70"
                    color="cyan"
                  >
                    70%
                  </v-progress-circular>
                </v-col>
              </v-row>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="8">
          <v-card
            flat
            class="mx-auto mb-1"
          >
            <v-card-title class="title mb-1">
              Recent Activity
            </v-card-title>
            <div
              v-for="activity in activities"
              :key="activity.title"
            >
              <v-layout row wrap :class="`d-flex justify-space-between pa-3 activity ${activity.status}`">
                <v-flex x12 md2>
                  <div class="caption grey--text mb-1">
                    Name
                  </div>
                  <div>{{ activity.name }}</div>
                </v-flex>
                <v-flex x12 md2>
                  <div class="caption grey--text mb-1">
                    Axie
                  </div>
                  <v-avatar size="42" class="mt-n2">
                    <v-img :src="activity.axie_img" />
                  </v-avatar>
                </v-flex>
                <v-flex x12 md2>
                  <div class="caption grey--text mb-1">
                    Price
                  </div>
                  <div>&#8369; {{ activity.price }}</div>
                </v-flex>
                <v-flex x12 md2>
                  <div class="caption grey--text mb-1">
                    Date
                  </div>
                  <div>{{ activity.date }}</div>
                </v-flex>
                <v-flex x12 md2>
                  <div class="caption mb-1">
                    Status
                  </div>
                  <div>
                    <v-chip :color="getColor(activity.status)">
                      {{ activity.status }}
                    </v-chip>
                  </div>
                </v-flex>
              </v-layout>
            </div>
          </v-card>
        </v-col>
        <v-col cols="12" md="4">
          <v-card class="mx-auto text-center" color="cyan" dark max-width="600">
            <v-card-text>
              <v-sheet color="rgba(0, 0, 0, .12)">
                <v-sparkline
                  :value="value"
                  color="rgba(255, 255, 255, .7)"
                  height="100"
                  padding="24"
                  stroke-linecap="round"
                  smooth
                >
                  <template #label="item">
                    &#8369;{{ item.value }}
                  </template>
                </v-sparkline>
              </v-sheet>
            </v-card-text>

            <v-card-text>
              <div class="subtitle-1 font-weight-medium white--text">
                Purchase and Sale Weekly Activity
              </div>
            </v-card-text>
          </v-card>
          <v-card>
            <v-app-bar flat>
              <v-btn x-small fab color="green lighten-4" elevation="1">
                <v-icon color="green">
                  mdi-currency-php
                </v-icon>
              </v-btn>
              <v-toolbar-title class="subtitle-1 ml-2">
                Sale
              </v-toolbar-title>
              <v-spacer />
              <v-toolbar-title class="caption ml-2">
                &#8369; 39,420
              </v-toolbar-title>
              <v-icon color="green" class="ml-2">
                mdi-arrow-up
              </v-icon>
            </v-app-bar>
            <v-app-bar flat>
              <v-btn x-small fab color="red lighten-4" elevation="1">
                <v-icon color="red">
                  mdi-currency-php
                </v-icon>
              </v-btn>
              <v-toolbar-title class="subtitle-1 ml-2">
                Purchase
              </v-toolbar-title>
              <v-spacer />
              <v-toolbar-title class="caption ml-2">
                &#8369; 23,780
              </v-toolbar-title>
              <v-icon color="red" class="ml-2">
                mdi-arrow-down
              </v-icon>
            </v-app-bar>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="8" class="mb-6">
          <v-card max-width="250">
            <v-img
              src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
              height="150px"
            />

            <v-card-title> Top western road trips </v-card-title>

            <v-card-subtitle> 1,000 miles of wonder </v-card-subtitle>

            <v-card-actions>
              <v-btn color="orange lighten-2" text>
                Explore
              </v-btn>

              <v-spacer />

              <v-btn icon @click="show = !show">
                <v-icon>
                  {{
                    show ? "mdi-chevron-up" : "mdi-chevron-down"
                  }}
                </v-icon>
              </v-btn>
            </v-card-actions>

            <v-expand-transition>
              <div v-show="show">
                <v-divider />
                <v-card-text>
                  I'm a thing. But, like most politicians, he promised more than
                  he could deliver. You won't have time for sleeping, soldier,
                  not with all the bed making you'll be doing. Then we'll go
                  with that data file! Hey, you add a one and two zeros to that
                  or we walk! You're going to do his laundry? I've got to find a
                  way to escape.
                </v-card-text>
              </div>
            </v-expand-transition>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  layout: 'user',
  middleware: ['permissions'],
  data: () => ({
    show: false,
    value: [423, 446, 675, 510, 590, 610, 760],
    activities: [
      {
        name: 'Luffy',
        to: 'Emperor Jato',
        date: '08/12/2021',
        axie_id: '',
        axie_img:
          'https://storage.googleapis.com/assets.axieinfinity.com/axies/3224/axie/axie-full-transparent.png',
        price: 12900,
        status: 'Sold'
      },
      {
        name: 'Li Qiye',
        to: 'Emperor Jato',
        date: '08/12/2021',
        axie_id: '',
        axie_img:
          'https://storage.googleapis.com/assets.axieinfinity.com/axies/1235712/axie/axie-full-transparent.png',
        price: 19800,
        status: 'Pending'
      },
      {
        name: 'Asura',
        to: 'Steto Javellana',
        date: '08/12/2021',
        axie_id: '',
        axie_img:
          'https://storage.googleapis.com/assets.axieinfinity.com/axies/1226/axie/axie-full-transparent.png',
        price: 23760,
        status: 'Purchased'
      },
      {
        name: 'Ye Futian',
        to: 'Steto Javellana',
        date: '08/12/2021',
        axie_id: '',
        axie_img:
          'https://storage.googleapis.com/assets.axieinfinity.com/axies/5384/axie/axie-full-transparent.png',
        price: 39200,
        status: 'Canceled'
      }
    ]
  }),
  meta: {
    permissions: ['view-investment', 'create-investment', 'edit-investment', 'delete-investment']
  },
  methods: {
    getColor (status) {
      if (status === 'Sold') { return 'success' } else if (status === 'Purchased') { return 'error' } else if (status === 'Canceled') { return 'warning' } else { return 'primary' }
    }
  }
}
</script>

<style scoped>
.activity.Sold {
  border-left: 4px solid green;
}
.activity.Pending {
  border-left: 4px solid cyan;
}
.activity.Purchased {
  border-left: 4px solid red;
}
.activity.Canceled {
  border-left: 4px solid orange;
}
</style>
