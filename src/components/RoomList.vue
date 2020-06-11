<template lang="pug">
.RoomList
  v-row(
    v-for="room, i in rooms"
    :key="i"
  )
    v-col(cols="12")
      RoomCard(:room="room")
</template>

<script>
import { mapGetters } from 'vuex'
import RoomCard from './RoomCard'

export default {
  name: 'RoomList',
  components: {
    RoomCard
  },
  computed: {
    ...mapGetters(['rooms'])
  }
}
</script>

<style lang="sass" scoped>
</style>
