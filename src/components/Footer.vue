<template lang="pug">
.Footer
  v-divider
  v-row
    v-col(lg="4")
      v-row(justify="space-around")
        v-img(:src="require('../assets/img/los-cocos-iso-footer.png')" max-width="30px")
        a(href="#") Terms and Conditions
        a(href="#") Privacy Policy
        a(href="#") About us
        a(href="#") Partners
    v-col
    v-col(lg="5")
      v-row(justify="space-around")
        a.color-blue(href="#") reservations@loscocosbungalows.com
        a.color-blue(href="#") Tlf: +34 987 675 432
        v-img(:src="require('../assets/img/footer_icons.png')" max-width="100px")
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang="sass" scoped>
.Footer
  margin-top: 30px
  a
    display: inline-block
    line-height: 32px
    font-size: 12px
    color: gray
    text-decoration: none
    &.color-blue
      color: #0062b2
</style>
