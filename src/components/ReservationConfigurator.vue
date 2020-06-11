<template lang="pug">
.ReservationConfigurator
  v-row(
    justify="space-around"
  )
    // Checkin
    v-col(class="d-flex" cols="6" lg="2" offset-lg="2")
      v-menu(
        ref="menu"
        v-model="menuCheckin"
        transition="scale-transition"
        :close-on-content-click="false"
        offset-y
        max-width="290px"
        min-width="290px"
      )
        template(v-slot:activator="{ on, attrs }")
          v-text-field(
            v-model="dateCheckin"
            v-bind="attrs"
            v-on="on"
            readonly
            solo
            append-icon="mdi-calendar-blank"
          )
        v-date-picker(
          v-model="dateCheckin"
          no-title
          scrollable
          @input="menuCheckin = false"
        )

    // Checkout
    v-col(class="d-flex" cols="6" lg="2")
      v-menu(
        ref="menu"
        v-model="menuCheckout"
        transition="scale-transition"
        :close-on-content-click="false"
        offset-y
        max-width="290px"
        min-width="290px"
      )
        template(v-slot:activator="{ on, attrs }")
          v-text-field(
            v-model="dateCheckout"
            v-bind="attrs"
            v-on="on"
            readonly
            solo
            append-icon="mdi-calendar-blank"
          )
        v-date-picker(
          v-model="dateCheckout"
          no-title
          scrollable
          @input="menuCheckout = false"
        )

    // Adults
    v-col(class="d-flex" cols="6" lg="2")
      v-select(
        :items="adultsOptions"
        :value="adults"
        label="Adults"
        solo
        @change="setAdults"
      )

    // Children
    v-col(class="d-flex" cols="6" lg="2")
      v-select(
          :items="childrenOptions"
          :value="children"
          label="Children"
          solo
          @change="setChildren"
        )

    //end
    v-col(class="d-flex" cols="6" lg="2")

</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

const numPeople = [0, 1, 2, 3, 4, 5, 6, 7, 8]
export default {
  name: 'ReservationConfigurator',
  data: () => ({
    menuCheckin: false,
    menuCheckout: false,
    adultsOptions: numPeople.map(val => `Adults: ${val}`),
    childrenOptions: numPeople.map(val => `Children: ${val}`)
  }),
  computed: {
    ...mapGetters(['adults', 'children', 'checkin', 'checkout', 'people', 'room']),
    dateCheckin: {
      get () { return this.checkin },
      set (value) { return this.setCheckin(value) }
    },
    dateCheckout: {
      get () { return this.checkout },
      set (value) { return this.setCheckout(value) }
    }
  },
  methods: {
    ...mapMutations({
      setAdults: 'SET_ADULTS',
      setChildren: 'SET_CHILDREN',
      setCheckin: 'SET_CHECKIN',
      setCheckout: 'SET_CHECKOUT'
    })
  }
}
</script>

<style lang="sass" scoped>
.ReservationConfigurator
  background-image: url('../assets/img/los-cocos-room-header-2-x.png')
  padding: 20px 0 0
  margin: 20px 0
  min-height: 100px
</style>
