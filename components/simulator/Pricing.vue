<template>
  <div id="pricingComponent">
    <v-card flat>
      <v-card-text>
        <v-row>
          <v-col cols="12" md="4">
            <v-card>
              <v-img :src="axieDetails.image">
                <v-chip class="mt-3 ml-2" color="#4cb6cd" dark>
                  COMMON
                </v-chip>
              </v-img>

              <v-card-title>
                {{ axieDetails.name }} <v-spacer />
                <v-img
                  max-height="30"
                  max-width="30"
                  src="/img/class_aquatic.svg"
                />
                <v-spacer />
                <v-icon>mdi-currency-eth</v-icon> 0.199
              </v-card-title>

              <v-card-subtitle>
                #{{ axieDetails.id }}
                <span class="float-right">
                  <v-icon x-small> mdi-dna </v-icon>
                  {{ axieDetails.breedCount }}
                </span>
              </v-card-subtitle>
              <v-card-text class="mt-3">
                <v-container>
                  <v-row>
                    <v-flex md3 sm6 xs6 class="mb-4">
                      <div>Health</div>
                      <v-icon color="#3ac279">
                        mdi-cards-heart
                      </v-icon>
                      <span>
                        {{ axieDetails.stats.hp }}
                      </span>
                    </v-flex>
                    <v-flex md3 sm6 xs6 class="mb-4">
                      <div>Speed</div>
                      <v-icon color="#f7ac0a">
                        mdi-flash
                      </v-icon>
                      <span class="ml-n1">
                        {{ axieDetails.stats.speed }}
                      </span>
                    </v-flex>
                    <v-flex md3 sm6 xs6>
                      <div>Skill</div>
                      <v-icon color="#6a3ac2">
                        mdi-star
                      </v-icon>
                      <span>
                        {{ axieDetails.stats.skill }}
                      </span>
                    </v-flex>
                    <v-flex md3 sm6 xs6>
                      <div>Morale</div>
                      <v-icon color="#c23a3a">
                        mdi-fire
                      </v-icon>
                      <span>
                        {{ axieDetails.stats.morale }}
                      </span>
                    </v-flex>
                  </v-row>
                </v-container>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" md="8">
            <v-card>
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
            </v-card>
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-text>
        <v-divider />
        <v-row>
          <v-col cols="12" md="6">
            <v-card-title class="subtitile-1">
              Current List on Marketplace
            </v-card-title>
            <v-card-text>
              <v-card
                max-width="150"
              >
                <v-img
                  src="https://storage.googleapis.com/assets.axieinfinity.com/axies/3051680/axie/axie-full-transparent.png"
                  height="80px"
                />

                <v-card-title>
                  <v-icon>mdi-currency-eth</v-icon> 0.199
                </v-card-title>

                <v-card-subtitle>
                  #123222
                </v-card-subtitle>
              </v-card>
            </v-card-text>
          </v-col>
          <v-col cols="12" md="6">
            <v-card-title> Recently Sold on Marketplace </v-card-title>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      show: false,
      axieGenes: [],
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
      axieDetails: {
        id: '3051680',
        image:
          'https://storage.googleapis.com/assets.axieinfinity.com/axies/3051680/axie/axie-full-transparent.png',
        class: 'Aquatic',
        chain: 'ronin',
        name: 'M - 1',
        genes:
          '0x400000000c78620010441108108121081064200a1464310c106418021024084c',
        owner: '0x9b8ebe551b9c37a5362ada718740c6f7bdf2bbdf',
        birthDate: 1627639425,
        bodyShape: 'Normal',
        sireId: 2716132,
        sireClass: 'Aquatic',
        matronId: 2496320,
        matronClass: 'Aquatic',
        stage: 4,
        title: '',
        breedCount: 2,
        level: 1,
        figure: {
          atlas:
            'https://storage.googleapis.com/assets.axieinfinity.com/axies/3051680/axie/axie.atlas',
          model:
            'https://storage.googleapis.com/assets.axieinfinity.com/axies/3051680/axie/axie.json',
          image:
            'https://storage.googleapis.com/assets.axieinfinity.com/axies/3051680/axie/axie.png',
          __typename: 'AxieFigure'
        },
        parts: [
          {
            id: 'eyes-clear',
            name: 'Clear',
            class: 'Aquatic',
            type: 'Eyes',
            specialGenes: null,
            stage: 1,
            abilities: [],
            __typename: 'AxiePart'
          },
          {
            id: 'ears-bubblemaker',
            name: 'Bubblemaker',
            class: 'Aquatic',
            type: 'Ears',
            specialGenes: null,
            stage: 1,
            abilities: [],
            __typename: 'AxiePart'
          },
          {
            id: 'back-goldfish',
            name: 'Goldfish',
            class: 'Aquatic',
            type: 'Back',
            specialGenes: null,
            stage: 1,
            abilities: [
              {
                id: 'aquatic-back-06',
                name: 'Swift Escape',
                attack: 110,
                defense: 20,
                energy: 1,
                description:
                  'Apply Speed+ to this Axie for 2 rounds when attacked.',
                backgroundUrl:
                  'https://storage.googleapis.com/axie-cdn/game/cards/base/aquatic-back-06.png',
                effectIconUrl:
                  'https://storage.googleapis.com/axie-cdn/game/cards/effect-icons/speed-up.png',
                __typename: 'AxieCardAbility'
              }
            ],
            __typename: 'AxiePart'
          },
          {
            id: 'mouth-risky-fish',
            name: 'Risky Fish',
            class: 'Aquatic',
            type: 'Mouth',
            specialGenes: null,
            stage: 1,
            abilities: [
              {
                id: 'aquatic-mouth-08',
                name: 'Fish Hook',
                attack: 110,
                defense: 30,
                energy: 1,
                description:
                  'Apply Attack+ to this Axie when attacking Plant, Reptile, or Dusk targets.',
                backgroundUrl:
                  'https://storage.googleapis.com/axie-cdn/game/cards/base/aquatic-mouth-08.png',
                effectIconUrl:
                  'https://storage.googleapis.com/axie-cdn/game/cards/effect-icons/attack-up.png',
                __typename: 'AxieCardAbility'
              }
            ],
            __typename: 'AxiePart'
          },
          {
            id: 'horn-cerastes',
            name: 'Cerastes',
            class: 'Reptile',
            type: 'Horn',
            specialGenes: null,
            stage: 1,
            abilities: [
              {
                id: 'reptile-horn-06',
                name: 'Surprise Invasion',
                attack: 90,
                defense: 60,
                energy: 1,
                description:
                  'Deal 130% damage if target is faster than this Axie.',
                backgroundUrl:
                  'https://storage.googleapis.com/axie-cdn/game/cards/base/reptile-horn-06.png',
                effectIconUrl:
                  'https://storage.googleapis.com/axie-cdn/game/cards/effect-icons/raise-damage.png',
                __typename: 'AxieCardAbility'
              }
            ],
            __typename: 'AxiePart'
          },
          {
            id: 'tail-koi',
            name: 'Koi',
            class: 'Aquatic',
            type: 'Tail',
            specialGenes: null,
            stage: 1,
            abilities: [
              {
                id: 'aquatic-tail-02',
                name: 'Upstream Swim',
                attack: 110,
                defense: 30,
                energy: 1,
                description:
                  'Apply Speed+ to this Axie for 2 rounds when comboed with another Aquatic class card.',
                backgroundUrl:
                  'https://storage.googleapis.com/axie-cdn/game/cards/base/aquatic-tail-02.png',
                effectIconUrl:
                  'https://storage.googleapis.com/axie-cdn/game/cards/effect-icons/speed-up.png',
                __typename: 'AxieCardAbility'
              }
            ],
            __typename: 'AxiePart'
          }
        ],
        stats: {
          hp: 47,
          speed: 55,
          skill: 35,
          morale: 27,
          __typename: 'AxieStats'
        },
        auction: {
          startingPrice: '85000000000000000',
          endingPrice: '85000000000000000',
          startingTimestamp: '1630146602',
          endingTimestamp: '1630233002',
          duration: '86400',
          timeLeft: '83587',
          currentPrice: '85000000000000000',
          currentPriceUSD: '275.20',
          suggestedPrice: '85000000000000000',
          seller: '0x9b8ebe551b9c37a5362ada718740c6f7bdf2bbdf',
          listingIndex: 1711907,
          state:
            '60018322790163598359511306112101628078360767157799252079194777839210946034738',
          __typename: 'Auction'
        },
        ownerProfile: { name: 'Kim', __typename: 'PublicProfile' },
        battleInfo: {
          banned: false,
          banUntil: null,
          level: 0,
          __typename: 'AxieBattleInfo'
        },
        children: [
          {
            id: '3417493',
            name: 'Hern | Aqua',
            class: 'Aquatic',
            image:
              'https://storage.googleapis.com/assets.axieinfinity.com/axies/3417493/axie/axie-full-transparent.png',
            title: '',
            stage: 4,
            __typename: 'Axie'
          },
          {
            id: '3418511',
            name: 'ARYA - 2',
            class: 'Aquatic',
            image:
              'https://storage.googleapis.com/assets.axieinfinity.com/axies/3418511/axie/axie-full-transparent.png',
            title: '',
            stage: 4,
            __typename: 'Axie'
          }
        ],
        __typename: 'Axie'
      },
      axieTransferHistory: {
        id: '3051680',
        image:
          'https://storage.googleapis.com/assets.axieinfinity.com/axies/3051680/axie/axie-full-transparent.png',
        class: 'Aquatic',
        chain: 'ronin',
        name: 'M - 1',
        genes:
          '0x400000000c78620010441108108121081064200a1464310c106418021024084c',
        owner: '0x9b8ebe551b9c37a5362ada718740c6f7bdf2bbdf',
        birthDate: 1627639425,
        bodyShape: 'Normal',
        sireId: 2716132,
        sireClass: 'Aquatic',
        matronId: 2496320,
        matronClass: 'Aquatic',
        stage: 4,
        title: '',
        breedCount: 2,
        level: 1,
        figure: {
          atlas:
            'https://storage.googleapis.com/assets.axieinfinity.com/axies/3051680/axie/axie.atlas',
          model:
            'https://storage.googleapis.com/assets.axieinfinity.com/axies/3051680/axie/axie.json',
          image:
            'https://storage.googleapis.com/assets.axieinfinity.com/axies/3051680/axie/axie.png',
          __typename: 'AxieFigure'
        },
        parts: [
          {
            id: 'eyes-clear',
            name: 'Clear',
            class: 'Aquatic',
            type: 'Eyes',
            specialGenes: null,
            stage: 1,
            abilities: [],
            __typename: 'AxiePart'
          },
          {
            id: 'ears-bubblemaker',
            name: 'Bubblemaker',
            class: 'Aquatic',
            type: 'Ears',
            specialGenes: null,
            stage: 1,
            abilities: [],
            __typename: 'AxiePart'
          },
          {
            id: 'back-goldfish',
            name: 'Goldfish',
            class: 'Aquatic',
            type: 'Back',
            specialGenes: null,
            stage: 1,
            abilities: [
              {
                id: 'aquatic-back-06',
                name: 'Swift Escape',
                attack: 110,
                defense: 20,
                energy: 1,
                description:
                  'Apply Speed+ to this Axie for 2 rounds when attacked.',
                backgroundUrl:
                  'https://storage.googleapis.com/axie-cdn/game/cards/base/aquatic-back-06.png',
                effectIconUrl:
                  'https://storage.googleapis.com/axie-cdn/game/cards/effect-icons/speed-up.png',
                __typename: 'AxieCardAbility'
              }
            ],
            __typename: 'AxiePart'
          },
          {
            id: 'mouth-risky-fish',
            name: 'Risky Fish',
            class: 'Aquatic',
            type: 'Mouth',
            specialGenes: null,
            stage: 1,
            abilities: [
              {
                id: 'aquatic-mouth-08',
                name: 'Fish Hook',
                attack: 110,
                defense: 30,
                energy: 1,
                description:
                  'Apply Attack+ to this Axie when attacking Plant, Reptile, or Dusk targets.',
                backgroundUrl:
                  'https://storage.googleapis.com/axie-cdn/game/cards/base/aquatic-mouth-08.png',
                effectIconUrl:
                  'https://storage.googleapis.com/axie-cdn/game/cards/effect-icons/attack-up.png',
                __typename: 'AxieCardAbility'
              }
            ],
            __typename: 'AxiePart'
          },
          {
            id: 'horn-cerastes',
            name: 'Cerastes',
            class: 'Reptile',
            type: 'Horn',
            specialGenes: null,
            stage: 1,
            abilities: [
              {
                id: 'reptile-horn-06',
                name: 'Surprise Invasion',
                attack: 90,
                defense: 60,
                energy: 1,
                description:
                  'Deal 130% damage if target is faster than this Axie.',
                backgroundUrl:
                  'https://storage.googleapis.com/axie-cdn/game/cards/base/reptile-horn-06.png',
                effectIconUrl:
                  'https://storage.googleapis.com/axie-cdn/game/cards/effect-icons/raise-damage.png',
                __typename: 'AxieCardAbility'
              }
            ],
            __typename: 'AxiePart'
          },
          {
            id: 'tail-koi',
            name: 'Koi',
            class: 'Aquatic',
            type: 'Tail',
            specialGenes: null,
            stage: 1,
            abilities: [
              {
                id: 'aquatic-tail-02',
                name: 'Upstream Swim',
                attack: 110,
                defense: 30,
                energy: 1,
                description:
                  'Apply Speed+ to this Axie for 2 rounds when comboed with another Aquatic class card.',
                backgroundUrl:
                  'https://storage.googleapis.com/axie-cdn/game/cards/base/aquatic-tail-02.png',
                effectIconUrl:
                  'https://storage.googleapis.com/axie-cdn/game/cards/effect-icons/speed-up.png',
                __typename: 'AxieCardAbility'
              }
            ],
            __typename: 'AxiePart'
          }
        ],
        stats: {
          hp: 47,
          speed: 55,
          skill: 35,
          morale: 27,
          __typename: 'AxieStats'
        },
        auction: {
          startingPrice: '85000000000000000',
          endingPrice: '85000000000000000',
          startingTimestamp: '1630146602',
          endingTimestamp: '1630233002',
          duration: '86400',
          timeLeft: '83587',
          currentPrice: '85000000000000000',
          currentPriceUSD: '275.20',
          suggestedPrice: '85000000000000000',
          seller: '0x9b8ebe551b9c37a5362ada718740c6f7bdf2bbdf',
          listingIndex: 1711907,
          state:
            '60018322790163598359511306112101628078360767157799252079194777839210946034738',
          __typename: 'Auction'
        },
        ownerProfile: { name: 'Kim', __typename: 'PublicProfile' },
        battleInfo: {
          banned: false,
          banUntil: null,
          level: 0,
          __typename: 'AxieBattleInfo'
        },
        children: [
          {
            id: '3417493',
            name: 'Hern | Aqua',
            class: 'Aquatic',
            image:
              'https://storage.googleapis.com/assets.axieinfinity.com/axies/3417493/axie/axie-full-transparent.png',
            title: '',
            stage: 4,
            __typename: 'Axie'
          },
          {
            id: '3418511',
            name: 'ARYA - 2',
            class: 'Aquatic',
            image:
              'https://storage.googleapis.com/assets.axieinfinity.com/axies/3418511/axie/axie-full-transparent.png',
            title: '',
            stage: 4,
            __typename: 'Axie'
          }
        ],
        __typename: 'Axie'
      },
      lowestPriceAxies: {}
    }
  },
  mounted () {
    this.getGenes(3051680)
    this.lowestPriceList(this.axieDetails)
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
    },
    getAxieAbilites (arr) {
      const newArray = []
      arr.filter((item) => {
        if (Object.keys(item.abilities).length !== 0) {
          newArray.push(item.id)
        }
        return newArray
      })
      return newArray
    },
    getAxieBeedCount (count = 2) {
      const breedCount = [0]
      console.log(breedCount.push(count)
      )
    },
    getAxieClass () {

    },

    getAxiePureness (arr) {
      const pureness = arr.filter(x => x.class === 'Aquatic').length

      return pureness
    },
    lowestPriceList (axiesDetails) {
      const parts = this.getAxieAbilites(axiesDetails.parts)
      const pureness = [this.getAxiePureness(axiesDetails.parts)]
      this.$axios
        .post('https://axieinfinity.com/graphql-server-v2/graphql', {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
          },

          operationName: 'GetAxieBriefList',
          variables: {
            from: 0,
            size: 3,
            sort: 'PriceAsc',
            auctionType: 'Sale',
            criteria: {
              breedCount: [0, axiesDetails.breedCount],
              classes: [`${axiesDetails.class}`],
              numMystic: [],
              parts,
              pureness
            }
          },
          query: 'query GetAxieBriefList($auctionType: AuctionType, $criteria: AxieSearchCriteria, $from: Int, $sort: SortBy, $size: Int, $owner: String) {\n  axies(auctionType: $auctionType, criteria: $criteria, from: $from, sort: $sort, size: $size, owner: $owner) {\n    total\n    results {\n      ...AxieBrief\n      __typename\n    }\n    __typename\n  }\n}\n\nfragment AxieBrief on Axie {\n  id\n  name\n  stage\n  class\n  breedCount\n  image\n  title\n  battleInfo {\n    banned\n    __typename\n  }\n  auction {\n    currentPrice\n    currentPriceUSD\n    __typename\n  }\n  parts {\n    id\n    name\n    class\n    type\n    specialGenes\n    __typename\n  }\n  __typename\n}\n'

        })
        .then((res) => {
          console.log(res)
          this.lowestPriceAxies = res.data.data.axie
        })
    }
  }
}
</script>

<style>
</style>
