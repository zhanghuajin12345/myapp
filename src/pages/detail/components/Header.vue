<template>
<div>
  <div class="header" v-show="isshowheader" :style="opacityStyle">
    <router-link to="/">
      <span class="iconfont back-icon">&#xe624;</span>
    </router-link>
    <span class="title">
      列表详情
    </span>
  </div>
  <div class="header-trans" v-show="!isshowheader">
    <router-link to="/">
      <span class="iconfont back-icon">&#xe624;</span>
      <span class="back-icon-wrap"></span>
    </router-link>
  </div>
</div>
</template>
<script>
export default {
  name: 'DetailHeader',
  data () {
    return {
      isshowheader: false,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    HandleScroll () {
      let top = document.documentElement.scrollTop
      if (top > 40) {
        let opacity = top / 140
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = {opacity}
        console.log(opacity)

        this.isshowheader = true
      } else {
        this.isshowheader = false
      }
    }
  },
  activated () {
    window.addEventListener('scroll', this.HandleScroll)
  },
  deactivated () {
    window.removeEventListener('scroll', this.HandleScroll)
  }

}
</script>
<style lang="stylus" scoped>
@import '~@styles/varibles.styl';
.header
  height $headerHeight
  line-height $headerHeight
  background $bgColor
  text-align center
  font-size .32rem
  position fixed
  top 0
  left 0
  right 0
  z-index 3
  color #ffffff
  .back-icon
    position absolute
    top 0
    left 0
    width .64rem
    display block
    color #ffffff
.header-trans
  height $headerHeight
  line-height $headerHeight
  text-align center
  font-size .32rem
  position fixed
  top 0
  left 0
  right 0
  z-index 3
  color #ffffff
  .back-icon
    position absolute
    top 0
    left 0
    width .64rem
    display block
    color #ffffff
    z-index 3
  .back-icon-wrap
    position absolute
    top 0
    left 0
    width .64rem
    height .64rem
    margin .1rem 0 0 .1rem
    border-radius 50%
    background rgba(0,0,0,0.5)
</style>
