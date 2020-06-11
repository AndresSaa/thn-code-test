<template lang="pug">
.RoomCard
  v-hover(
    v-slot:default="{ hover }"
    open-delay="100"
  )
    v-card(
      :elevation="hover ? 16 : 2"
      @click="setRoom(room)"
    )
      v-container
        v-row(justify="space-between")

          // Photo
          v-col(cols="5")
            .RoomCard-Photo
              v-img(
                :src="require(`../assets/img/${room.photo}`)"
              )

          // Info
          v-col(cols="7" class="pa-0")
            v-card-title {{ room.title }}
            v-card-text(class="py-0 px-4")
              .RoomCard-Description {{ room.description }}
              .RoomCard-Info
                .RoomCard-Size Size: {{ room.size }}m2
                v-row(class="d-flex align-content-end flex-wrap")
                  v-col(cols="3")
                    .RoomCard-Beds
                      div
                        img(:src="require(`../assets/img/double-bed.svg`)")
                      div Beds: {{ room.beds }}
                  v-col(cols="5" class="d-flex align-content-end flex-wrap")
                    .RoomCard-People People: {{ room.people }}
                  v-col(cols="4" class="d-flex align-content-end flex-wrap")
                    .RoomCard-Price {{ price }}€
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'RoomCard',
  props: {
    room: { type: Object, required: true }
  },
  computed: {
    price () {
      const discount = this.getParameterByName('promo_code')
      const price = this.room.price * (1 - (discount / 100))
      return parseInt(price)
    }
  },
  methods: {
    ...mapMutations({ setRoom: 'SET_ROOM' }),
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
.RoomCard
  &:hover
    cursor: pointer
  &-Info
    margin-top: 30px
    font-size: 12px
  &-Photo
    margin-left: -40px
  &-Price
    font-size: 24px
    font-weight: bold
  &-Size
    margin-bottom: 15px
</style>
