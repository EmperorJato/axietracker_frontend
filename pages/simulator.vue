<template>
  <div id="simulator">
    <v-container fluid>
      <v-card>
        <v-tabs
          v-model="tab"
          background-color="cyan"
          centered
          dark
          icons-and-text
          color="white"
        >
          <v-tabs-slider />

          <v-tab href="#pricing">
            Pricing
            <v-icon>mdi-calculator-variant</v-icon>
          </v-tab>

          <v-tab href="#breeding">
            Breeding
            <v-icon>mdi-heart</v-icon>
          </v-tab>
          <v-spacer />
          <v-text-field
            v-if="tab === 'pricing'"
            prepend-inner-icon="mdi-magnify"
            label="Input Axie ID"
            single-line
            clearable
            filled
            dense
            class="ma-4 expanding-search closed"
          />
        </v-tabs>

        <v-tabs-items v-model="tab">
          <v-tab-item value="pricing">
            <Pricing />
          </v-tab-item>
          <v-tab-item value="breeding">
            <v-card flat class="mx-1 mt-2">
              <Breeding />
            </v-card>
          </v-tab-item>
        </v-tabs-items>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import Pricing from '~/components/simulator/Pricing.vue'
import Breeding from '~/components/simulator/Breeding.vue'
export default {
  components: {
    Pricing,
    Breeding
  },
  layout: 'user',
  middleware: ['permissions'],
  data () {
    return {
      show: false,
      tab: null,
      genes: {}
    }
  },
  head () {
    return {
      title: 'Simulator'
    }
  },
  meta: {
    permissions: ['view-simulator', 'create-simulator', 'edit-simulator', 'delete-simulator']
  },

  methods: {
    getAxieDetails (axieId) {
      this.$axios
        .post('https://axieinfinity.com/graphql-server-v2/graphql', {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
          },
          operationName: 'GetAxieDetail',
          variables: {
            axieId
          },
          query:
            'query GetAxieDetail($axieId: ID!) {\n  axie(axieId: $axieId) {\n    ...AxieDetail\n    __typename\n  }\n}\n\nfragment AxieDetail on Axie {\n  id\n  image\n  class\n  chain\n  name\n  genes\n  owner\n  birthDate\n  bodyShape\n  class\n  sireId\n  sireClass\n  matronId\n  matronClass\n  stage\n  title\n  breedCount\n  level\n  figure {\n    atlas\n    model\n    image\n    __typename\n  }\n  parts {\n    ...AxiePart\n    __typename\n  }\n  stats {\n    ...AxieStats\n    __typename\n  }\n  auction {\n    ...AxieAuction\n    __typename\n  }\n  ownerProfile {\n    name\n    __typename\n  }\n  battleInfo {\n    ...AxieBattleInfo\n    __typename\n  }\n  children {\n    id\n    name\n    class\n    image\n    title\n    stage\n    __typename\n  }\n  __typename\n}\n\nfragment AxieBattleInfo on AxieBattleInfo {\n  banned\n  banUntil\n  level\n  __typename\n}\n\nfragment AxiePart on AxiePart {\n  id\n  name\n  class\n  type\n  specialGenes\n  stage\n  abilities {\n    ...AxieCardAbility\n    __typename\n  }\n  __typename\n}\n\nfragment AxieCardAbility on AxieCardAbility {\n  id\n  name\n  attack\n  defense\n  energy\n  description\n  backgroundUrl\n  effectIconUrl\n  __typename\n}\n\nfragment AxieStats on AxieStats {\n  hp\n  speed\n  skill\n  morale\n  __typename\n}\n\nfragment AxieAuction on Auction {\n  startingPrice\n  endingPrice\n  startingTimestamp\n  endingTimestamp\n  duration\n  timeLeft\n  currentPrice\n  currentPriceUSD\n  suggestedPrice\n  seller\n  listingIndex\n  state\n  __typename\n}\n'
        })
        .then((res) => {
          this.axieDetails = res.data.data.axie
          this.getAxieTransferHistory(axieId)
        })
    },
    getAxieTransferHistory (axieId) {
      this.$axios
        .post('https://axieinfinity.com/graphql-server-v2/graphql', {
          operationName: 'GetAxieTransferHistory',
          variables: {
            axieId,
            from: 0,
            size: 5
          },
          query:
            'query GetAxieTransferHistory($axieId: ID!, $from: Int!, $size: Int!) {\n  axie(axieId: $axieId) {\n    id\n    transferHistory(from: $from, size: $size) {\n      ...TransferRecords\n      __typename\n    }\n    ethereumTransferHistory(from: $from, size: $size) {\n      ...TransferRecords\n      __typename\n    }\n    __typename\n  }\n}\n\nfragment TransferRecords on TransferRecords {\n  total\n  results {\n    from\n    to\n    timestamp\n    txHash\n    withPrice\n    __typename\n  }\n  __typename\n}\n'
        })
        .then((res) => {
          this.axieTransferHistory = res.data.data.axie
        })
    }
  }
}
</script>

<style lang="sass">
.v-input.expanding-search
  .v-input__slot
    &:before, &:after
      border-color: transparent !important
    &.closed
      max-width: 45px
</style>

<style>
.plant {
 color : #6cc001;
}

.aquatic {
 color : #4cb6cd;
}

.bird {
 color : #f38abc;
}

.beast {
 color : #fdb610;
}

.bug {
 color : #ef5243;
}

.reptile {
 color : #9b47cc;
}
</style>
