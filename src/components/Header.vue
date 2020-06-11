<template lang="pug">
header.Header
  nav.Navbar
    v-row(align="center")
      v-row(justify="space-around")
        a(href="#") Home
        a(href="#") Rooms
        a(href="#") Restaurant
        a(href="#")
          v-img(:src="require('../assets/img/logo-los-cocos.png')")
        a(href="#") Weddings
        a(href="#") Membership
        a(href="#") Contact
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="sass" scoped>
.Header
  margin: 10px 0
.Navbar
  margin: 0 auto
  width: 80%
  a
    color: #4a4a4a
    line-height: 2.5
    text-decoration: none
    &:hover
      text-decoration: underline
</style>
