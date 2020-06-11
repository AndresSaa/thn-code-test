<template lang="pug">
  v-app
    v-content
      v-container

        // Header
        Header

        // Reservation Configurator
        ReservationConfigurator

        // Stepper
        Stepper

        // Rooms and Summary
        v-row

          // Room List
          v-col(cols="12" lg="8")
            RoomList

          // Room List
          v-col(cols="12" lg="4")
            ReservationSummary(:room="room" :checkin="checkin" :checkout="checkout" :people="people")

        // Footer
        Footer
</template>

<script>
import Footer from './components/Footer'
import Header from './components/Header'
import ReservationConfigurator from './components/ReservationConfigurator'
import ReservationSummary from './components/ReservationSummary'
import RoomList from './components/RoomList'
import Stepper from './components/Stepper'

export default {
  name: 'App',

  components: {
    Footer,
    Header,
    ReservationConfigurator,
    ReservationSummary,
    RoomList,
    Stepper
  },

  data: () => ({
    checkin: new Date().toISOString().substr(0, 10),
    checkout: new Date().toISOString().substr(0, 10),
    people: '2 Adults',
    room: {
      title: 'Mini Dreamy Room',
      description: 'Spacious and comfortable, this modern furnished room offers a queen-size bed and breathtaking views.',
      photo: 'room_1.png',
      size: 20,
      beds: 1,
      people: 2,
      price: 200
    }
  })
}
</script>
