<template lang="pug">
.ReservationSummary
  v-card(class="mt-3")
    v-card-title Reservation Summary
    v-card-text
      // Title
      h3 {{ room.title }}

      // Checkin and checkout
      v-row
        v-col
          h4 Check in
          div  From 15.00h
        v-col
          h4 Check out
          div Before 12.00h

      // Reservation Date
      v-row
        v-col
          h4 Reservation Date
          div {{ `From ${checkin} to ${checkout}` }}

      // People
      v-row
        v-col
          h4 People
          div {{ people }}

    v-divider(class="mb-4")

    .ReservationSummary-Total
      v-list
        v-list-item
          v-list-item-title Total
          v-list-item-subtitle(class="text-right") {{ price }}€

    v-card-text
      .ReservationSummary-Save
        v-btn(block color="primary" @click="persist") Save
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'ReservationSummary',
  computed: {
    ...mapGetters(['checkin', 'checkout', 'people', 'room']),
    price () {
      const discount = this.getParameterByName('promo_code')
      const price = this.room.price * (1 - (discount / 100))
      return parseInt(price)
    }
  },
  methods: {
    ...mapMutations({
      persist: 'PERSIST'
    }),
    getParameterByName (name, url) {
      if (!url) url = window.location.href
      name = name.replace(/[[]]/g, '\\$&')
      const regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)')
      const results = regex.exec(url)
      if (!results) return null
      if (!results[2]) return ''
      return decodeURIComponent(results[2].replace(/\+/g, ' '))
    }
  }
}
</script>

<style lang="sass" scoped>
.ReservationSummary
  &-Total
    .v-list-item__title,
    .v-list-item__subtitle
      font-weight: bold
      font-size: 24px
</style>
