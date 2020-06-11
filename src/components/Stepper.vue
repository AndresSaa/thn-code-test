<template lang="pug">
.Stepper
  v-row
    v-col(cols="12")
      h2 Rooms & Rates
      p Plan your perfect stay at our hotel
  v-row
    v-col(cols="12")
      .Stepper-Steps
</template>

<script>
export default {
  name: 'Stepper'
}
</script>

<style lang="sass" scoped>
.Stepper
  background-image: url(../assets/img/los-cocos-img-bg.png)
  background-position: right
  background-size: 300px auto
  min-height: 180px
  &-Steps
    background-image: url(../assets/img/stepper.png)
    min-height: 71px
</style>
