<template>
  <div id="breeding">
    <v-container fluid>
      <v-row>
        <v-col cols="12" md="6">
          <v-row class="justify-center">
            <v-col
              cols="12"
              md="8"
              sm="8"
            >
              <v-text-field
                v-model="first"
                label="Sire Axie's ID"
                prepend-inner-icon="mdi-gender-male"
                outlined
                clearable
              />
            </v-col>
          </v-row>
          <v-row>
            <v-card
              class="mx-auto mt-n5"
              max-width="500"
              tile
            >
              <span class="float-right mr-4 mt-4">
                <v-img
                  max-height="20"
                  max-width="20"
                  src="/img/class/aquatic.svg"
                />
              </span>
              <v-list-item three-line>
                <v-list-item-content>
                  <div class="text-overline mb-4">
                    #3051680
                  </div>
                  <v-list-item-title class="text-h5 mb-1">
                    M - 1
                  </v-list-item-title>
                  <v-list-item-subtitle>
                    <v-icon x-small>
                      mdi-dna
                    </v-icon> Breed Count: 2
                  </v-list-item-subtitle>

                  <v-list-item-subtitle class="mt-1">
                    <v-icon x-small>
                      mdi-heart
                    </v-icon> Purity: 5/6 (81.25%)
                  </v-list-item-subtitle>
                </v-list-item-content>

                <v-list-item-avatar
                  tile
                  size="150"
                >
                  <v-img src="https://storage.googleapis.com/assets.axieinfinity.com/axies/3051680/axie/axie-full-transparent.png" />
                </v-list-item-avatar>
              </v-list-item>

              <v-card-text>
                <v-container fluid class="text-center">
                  <v-row>
                    <v-flex md3 sm6 xs6 class="mb-4">
                      <div>Health</div>
                      <v-icon color="#3ac279">
                        mdi-cards-heart
                      </v-icon>
                      <span>
                        {{ 47 }}
                      </span>
                    </v-flex>
                    <v-flex md3 sm6 xs6 class="mb-4">
                      <div>Speed</div>
                      <v-icon color="#f7ac0a">
                        mdi-flash
                      </v-icon>
                      <span class="ml-n1">
                        {{ 55 }}
                      </span>
                    </v-flex>
                    <v-flex md3 sm6 xs6>
                      <div>Skill</div>
                      <v-icon color="#6a3ac2">
                        mdi-star
                      </v-icon>
                      <span>
                        {{ 35 }}
                      </span>
                    </v-flex>
                    <v-flex md3 sm6 xs6>
                      <div>Morale</div>
                      <v-icon color="#c23a3a">
                        mdi-fire
                      </v-icon>
                      <span>
                        {{ 27 }}
                      </span>
                    </v-flex>
                  </v-row>
                </v-container>
              </v-card-text>

              <v-card-actions>
                <v-spacer />

                <v-btn
                  text
                  x-small
                  @click="show = !show"
                >
                  {{ show ? 'Hide' : 'Show' }} Genes
                  <v-icon right>
                    {{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}
                  </v-icon>
                </v-btn>
              </v-card-actions>
              <v-expand-transition>
                <div v-show="show">
                  <v-divider />

                  <v-card-title class="mb-n2">
                    Genes <v-spacer /> <span class="subtitle-1">Purity: <span class="aquatic">81.25%</span></span>
                  </v-card-title>
                  <v-data-table
                    :headers="genesHeaders"
                    :items="axieGenes"
                    hide-default-footer
                  >
                    <template #[`item.parts`]="{ item }">
                      <v-avatar class="my-2" size="42">
                        <v-img :src="item.parts" />
                      </v-avatar>
                    </template>
                    <template #[`item.dominant`]="{ item }">
                      <span :class="genesDominantColor(item.dominantClass)">
                        {{ item.dominant }}
                      </span>
                    </template>
                    <template #[`item.r1`]="{ item }">
                      <span :class="genesR1Color(item.r1Class)">
                        {{ item.r1 }}
                      </span>
                    </template>
                    <template #[`item.r2`]="{ item }">
                      <span :class="genesR2Color(item.r2Class)">
                        {{ item.r2 }}
                      </span>
                    </template>
                  </v-data-table>
                </div>
              </v-expand-transition>
            </v-card>
          </v-row>
        </v-col>

        <v-divider v-if="$vuetify.breakpoint.mdAndUp" vertical inset />

        <v-col cols="12" md="6">
          <v-divider v-if="$vuetify.breakpoint.sm" class="mb-3" />
          <v-row class="justify-center">
            <v-col
              cols="12"
              md="8"
              sm="8"
            >
              <v-text-field
                v-model="second"
                label="Matron Axie's ID"
                outlined
                clearable
                prepend-inner-icon="mdi-gender-female"
              />
            </v-col>
          </v-row>
          <v-row>
            <v-card
              class="mx-auto mt-n5"
              max-width="500"
              tile
            >
              <span class="float-right mr-4 mt-4">
                <v-img
                  max-height="20"
                  max-width="20"
                  src="/img/class/plant.svg"
                />
              </span>
              <v-list-item three-line>
                <v-list-item-content>
                  <div class="text-overline mb-4">
                    #5230609
                  </div>
                  <v-list-item-title class="text-h5 mb-1">
                    Axie #5230609
                  </v-list-item-title>
                  <v-list-item-subtitle>
                    <v-icon x-small>
                      mdi-dna
                    </v-icon> Breed Count: 3
                  </v-list-item-subtitle>

                  <v-list-item-subtitle class="mt-1">
                    <v-icon x-small>
                      mdi-heart
                    </v-icon> Purity: 6/6 (86.46%)
                  </v-list-item-subtitle>
                </v-list-item-content>

                <v-list-item-avatar
                  tile
                  size="150"
                >
                  <v-img src="https://storage.googleapis.com/assets.axieinfinity.com/axies/5230609/axie/axie-full-transparent.png" />
                </v-list-item-avatar>
              </v-list-item>

              <v-card-text>
                <v-container fluid class="text-center">
                  <v-row>
                    <v-flex md3 sm6 xs6 class="mb-4">
                      <div>Health</div>
                      <v-icon color="#3ac279">
                        mdi-cards-heart
                      </v-icon>
                      <span>
                        {{ 61 }}
                      </span>
                    </v-flex>
                    <v-flex md3 sm6 xs6 class="mb-4">
                      <div>Speed</div>
                      <v-icon color="#f7ac0a">
                        mdi-flash
                      </v-icon>
                      <span class="ml-n1">
                        {{ 31 }}
                      </span>
                    </v-flex>
                    <v-flex md3 sm6 xs6>
                      <div>Skill</div>
                      <v-icon color="#6a3ac2">
                        mdi-star
                      </v-icon>
                      <span>
                        {{ 31 }}
                      </span>
                    </v-flex>
                    <v-flex md3 sm6 xs6>
                      <div>Morale</div>
                      <v-icon color="#c23a3a">
                        mdi-fire
                      </v-icon>
                      <span>
                        {{ 41 }}
                      </span>
                    </v-flex>
                  </v-row>
                </v-container>
              </v-card-text>

              <v-card-actions>
                <v-spacer />

                <v-btn
                  text
                  x-small
                  @click="show = !show"
                >
                  {{ show ? 'Hide' : 'Show' }} Genes
                  <v-icon right>
                    {{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}
                  </v-icon>
                </v-btn>
              </v-card-actions>
              <v-expand-transition>
                <div v-show="show">
                  <v-divider />

                  <v-card-title class="mb-n2">
                    Genes <v-spacer /> <span class="subtitle-1">Purity: <span class="plant">86.46%</span></span>
                  </v-card-title>
                  <v-data-table
                    :headers="genesHeaders2"
                    :items="axieGenes2"
                    hide-default-footer
                  >
                    <template #[`item.parts`]="{ item }">
                      <v-avatar class="my-2" size="42">
                        <v-img :src="item.parts" />
                      </v-avatar>
                    </template>
                    <template #[`item.dominant`]="{ item }">
                      <span :class="genesDominantColor(item.dominantClass)">
                        {{ item.dominant }}
                      </span>
                    </template>
                    <template #[`item.r1`]="{ item }">
                      <span :class="genesR1Color(item.r1Class)">
                        {{ item.r1 }}
                      </span>
                    </template>
                    <template #[`item.r2`]="{ item }">
                      <span :class="genesR2Color(item.r2Class)">
                        {{ item.r2 }}
                      </span>
                    </template>
                  </v-data-table>
                </div>
              </v-expand-transition>
            </v-card>
          </v-row>
        </v-col>
      </v-row>
      <div class="text-center">
        <v-btn color="pink" dark class="mb-3 mt-6" @click="dialog = true">
          <v-icon left dark>
            mdi-heart
          </v-icon>
          Breed
        </v-btn>
      </div>

      <v-dialog
        v-model="dialog"
        fullscreen
        hide-overlay
        transition="dialog-bottom-transition"
      >
        <v-card tile>
          <v-toolbar
            dark
            color="primary"
          >
            <v-btn
              icon
              dark
              @click="dialog = false"
            >
              <v-icon>mdi-close</v-icon>
            </v-btn>
            <v-toolbar-title>Breeding Result</v-toolbar-title>
            <v-spacer />
            <v-toolbar-items>
              <v-btn
                dark
                text
                @click="dialog = false"
              >
                Save
              </v-btn>
            </v-toolbar-items>
          </v-toolbar>
          <v-card-text>
            <v-container fluid>
              <v-row align="center" justify="center" class="mt-1">
                <v-col cols="12" md="8">
                  <v-card>
                    <v-card-text>
                      <v-row class="ma-1">
                        <v-flex md6>
                          <v-layout align-center pr-4>
                            <v-avatar>
                              <img
                                src="img/AXS.png"
                                alt="AXS"
                              >
                            </v-avatar>
                            <v-layout column text-center class="mt-2">
                              <h1 class="font-weight-medium">
                                2
                              </h1>
                              <div class="caption font-weight-black mt-1">
                                <strong>AXS Cost</strong>
                              </div>
                            </v-layout>
                          </v-layout>
                        </v-flex>
                        <v-flex md6>
                          <v-layout align-center pr-4>
                            <v-avatar>
                              <img
                                src="img/SLP.png"
                                alt="SLP"
                              >
                            </v-avatar>
                            <v-layout column text-center class="mt-2">
                              <h1 class="font-weight-medium">
                                1400
                              </h1>
                              <div class="caption font-weight-black mt-1">
                                <strong>SLP Cost</strong>
                              </div>
                            </v-layout>
                          </v-layout>
                        </v-flex>
                      </v-row>
                    </v-card-text>
                  </v-card>
                </v-col>
                <v-col cols="12" md="4">
                  <v-card>
                    <v-card-text>
                      <v-layout align-center pr-4 class="ma-1">
                        <v-icon class="pr-3" large>
                          mdi-currency-php
                        </v-icon>
                        <v-layout column text-center class="mt-2">
                          <h1 class="font-weight-medium">
                            12000.00
                          </h1>
                          <div class="caption font-weight-black mt-1">
                            <strong>Breeding Cost</strong>
                          </div>
                        </v-layout>
                      </v-layout>
                    </v-card-text>
                  </v-card>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
          <v-card-text>
            <v-container fluid>
              <v-row>
                <v-col cols="12" md="4" sm="6">
                  <v-card>
                    <v-card-title>
                      <v-img max-height="42" max-width="27" src="img/parts/eyes.svg" class="mr-2" />
                      Eyes
                    </v-card-title>
                    <v-card-text />
                  </v-card>
                </v-col>
                <v-col cols="12" md="4" sm="6">
                  <v-card>
                    <v-card-title>
                      <v-img max-height="42" max-width="27" src="img/parts/ears.svg" class="mr-2" />
                      Ears
                    </v-card-title>
                    <v-card-text />
                  </v-card>
                </v-col>
                <v-col cols="12" md="4" sm="6">
                  <v-card>
                    <v-card-title>
                      <v-img max-height="42" max-width="27" src="img/parts/back.svg" class="mr-2" />
                      Back
                    </v-card-title>
                    <v-card-text />
                  </v-card>
                </v-col>
                <v-col cols="12" md="4" sm="6">
                  <v-card>
                    <v-card-title>
                      <v-img max-height="42" max-width="27" src="img/parts/mouth.svg" class="mr-2" />
                      Mouth
                    </v-card-title>
                    <v-card-text />
                  </v-card>
                </v-col>
                <v-col cols="12" md="4" sm="6">
                  <v-card>
                    <v-card-title>
                      <v-img max-height="42" max-width="27" src="img/parts/horn.svg" class="mr-2" />
                      Horn
                    </v-card-title>
                    <v-card-text />
                  </v-card>
                </v-col>

                <v-col cols="12" md="4" sm="6">
                  <v-card>
                    <v-card-title>
                      <v-img max-height="42" max-width="27" src="img/parts/tail.svg" class="mr-2" />
                      Tail
                    </v-card-title>
                    <v-card-text />
                  </v-card>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
          <div style="flex: 1 1 auto;" />
        </v-card>
      </v-dialog>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    visible: true,
    first: 0,
    second: 0,
    dialog: false,
    show: false,
    items: [
      {
        title: 'Click Me'
      },
      {
        title: 'Click Me'
      },
      {
        title: 'Click Me'
      },
      {
        title: 'Click Me 2'
      }
    ],
    genesHeaders: [
      {
        text: 'Parts',
        sortable: false,
        value: 'parts'
      },
      {
        text: 'Dominant',
        sortable: false,
        value: 'dominant'
      },
      {
        text: 'Recessive (R1)',
        sortable: false,
        value: 'r1'
      },
      {
        text: 'Minor Recessive (R2)',
        sortable: false,
        value: 'r2'
      }
    ],
    axieGenes: [],
    genesHeaders2: [
      {
        text: 'Parts',
        sortable: false,
        value: 'parts'
      },
      {
        text: 'Dominant',
        sortable: false,
        value: 'dominant'
      },
      {
        text: 'Recessive (R1)',
        sortable: false,
        value: 'r1'
      },
      {
        text: 'Minor Recessive (R2)',
        sortable: false,
        value: 'r2'
      }
    ],
    axieGenes2: []
  }),
  mounted () {
    this.getGenes(3051680)
    this.getGenes2(5230609)
  },
  methods: {
    getGenes (axieId) {
      this.$axios
        .get(`https://api.axie.technology/getgenes/${axieId}`)
        .then((res) => {
          console.log(res.data)
          this.genes = res.data
          this.axieGenes.push(
            {
              parts: `img/parts/${res.data.eyes.d.class}/eyes.svg`,
              dominant: res.data.eyes.d.name,
              dominantClass: res.data.eyes.d.class,
              r1: res.data.eyes.r1.name,
              r1Class: res.data.eyes.r1.class,
              r2: res.data.eyes.r2.name,
              r2Class: res.data.eyes.r2.class
            },
            {
              parts: `img/parts/${res.data.ears.d.class}/ears.svg`,
              dominant: res.data.ears.d.name,
              dominantClass: res.data.ears.d.class,
              r1: res.data.ears.r1.name,
              r1Class: res.data.ears.r1.class,
              r2: res.data.ears.r2.name,
              r2Class: res.data.ears.r2.class
            },
            {
              parts: `img/parts/${res.data.back.d.class}/back.svg`,
              dominant: res.data.back.d.name,
              dominantClass: res.data.back.d.class,
              r1: res.data.back.r1.name,
              r1Class: res.data.back.r1.class,
              r2: res.data.back.r2.name,
              r2Class: res.data.back.r2.class
            },
            {
              parts: `img/parts/${res.data.mouth.d.class}/mouth.svg`,
              dominant: res.data.mouth.d.name,
              dominantClass: res.data.mouth.d.class,
              r1: res.data.mouth.r1.name,
              r1Class: res.data.mouth.r1.class,
              r2: res.data.mouth.r2.name,
              r2Class: res.data.mouth.r2.class
            },
            {
              parts: `img/parts/${res.data.horn.d.class}/horn.svg`,
              dominant: res.data.horn.d.name,
              dominantClass: res.data.horn.d.class,
              r1: res.data.horn.r1.name,
              r1Class: res.data.horn.r1.class,
              r2: res.data.horn.r2.name,
              r2Class: res.data.horn.r2.class
            },
            {
              parts: `img/parts/${res.data.tail.d.class}/tail.svg`,
              dominant: res.data.tail.d.name,
              dominantClass: res.data.tail.d.class,
              r1: res.data.tail.r1.name,
              r1Class: res.data.tail.r1.class,
              r2: res.data.tail.r2.name,
              r2Class: res.data.tail.r2.class
            }

          )
        })
    },
    getGenes2 (axieId) {
      this.$axios
        .get(`https://api.axie.technology/getgenes/${axieId}`)
        .then((res) => {
          console.log(res.data)
          this.genes = res.data
          this.axieGenes2.push(
            {
              parts: `img/parts/${res.data.eyes.d.class}/eyes.svg`,
              dominant: res.data.eyes.d.name,
              dominantClass: res.data.eyes.d.class,
              r1: res.data.eyes.r1.name,
              r1Class: res.data.eyes.r1.class,
              r2: res.data.eyes.r2.name,
              r2Class: res.data.eyes.r2.class
            },
            {
              parts: `img/parts/${res.data.ears.d.class}/ears.svg`,
              dominant: res.data.ears.d.name,
              dominantClass: res.data.ears.d.class,
              r1: res.data.ears.r1.name,
              r1Class: res.data.ears.r1.class,
              r2: res.data.ears.r2.name,
              r2Class: res.data.ears.r2.class
            },
            {
              parts: `img/parts/${res.data.back.d.class}/back.svg`,
              dominant: res.data.back.d.name,
              dominantClass: res.data.back.d.class,
              r1: res.data.back.r1.name,
              r1Class: res.data.back.r1.class,
              r2: res.data.back.r2.name,
              r2Class: res.data.back.r2.class
            },
            {
              parts: `img/parts/${res.data.mouth.d.class}/mouth.svg`,
              dominant: res.data.mouth.d.name,
              dominantClass: res.data.mouth.d.class,
              r1: res.data.mouth.r1.name,
              r1Class: res.data.mouth.r1.class,
              r2: res.data.mouth.r2.name,
              r2Class: res.data.mouth.r2.class
            },
            {
              parts: `img/parts/${res.data.horn.d.class}/horn.svg`,
              dominant: res.data.horn.d.name,
              dominantClass: res.data.horn.d.class,
              r1: res.data.horn.r1.name,
              r1Class: res.data.horn.r1.class,
              r2: res.data.horn.r2.name,
              r2Class: res.data.horn.r2.class
            },
            {
              parts: `img/parts/${res.data.tail.d.class}/tail.svg`,
              dominant: res.data.tail.d.name,
              dominantClass: res.data.tail.d.class,
              r1: res.data.tail.r1.name,
              r1Class: res.data.tail.r1.class,
              r2: res.data.tail.r2.name,
              r2Class: res.data.tail.r2.class
            }

          )
        })
    },
    genesDominantColor (dominantClass) {
      if (dominantClass === 'aquatic') { return 'aquatic' } else if
      (dominantClass === 'reptile') { return 'reptile' } else if
      (dominantClass === 'bug') { return 'bug' } else if
      (dominantClass === 'bird') { return 'bird' } else if
      (dominantClass === 'beast') { return 'beast' } else if
      (dominantClass === 'plant') { return 'plant' } else {
        return ''
      }
    },
    genesR1Color (r1Class) {
      if (r1Class === 'aquatic') { return 'aquatic' } else if
      (r1Class === 'reptile') { return 'reptile' } else if
      (r1Class === 'bug') { return 'bug' } else if
      (r1Class === 'bird') { return 'bird' } else if
      (r1Class === 'beast') { return 'beast' } else if
      (r1Class === 'plant') { return 'plant' } else {
        return ''
      }
    },
    genesR2Color (r2Class) {
      if (r2Class === 'aquatic') { return 'aquatic' } else if
      (r2Class === 'reptile') { return 'reptile' } else if
      (r2Class === 'bug') { return 'bug' } else if
      (r2Class === 'bird') { return 'bird' } else if
      (r2Class === 'beast') { return 'beast' } else if
      (r2Class === 'plant') { return 'plant' } else {
        return ''
      }
    }
  }

}
</script>

<style>

</style>
