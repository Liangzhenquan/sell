<template>
  <div class="shopcart">
    <div class="content-left">
      <div class="logo-wrapper">
        <div class="big-circle">
          <div class="small-circle">
            <span class="iconfont cart">&#xe6b8;</span>
          </div>
        </div>         
      </div>
    </div>
    <div class="content-right">
      <div class="price">
        未选购商品
      </div>
      <div class="message">
        ￥12起送
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ShopCart'
}
</script>
<style lang='stylus' scoped>
.shopcart
  height 12.8vw
  display flex
  position fixed
  left 0
  right 0
  bottom 0
  background #444444
  .content-left
    position relative
    flex 0 0 1.6rem
    width 1.6rem
    .logo-wrapper
      position absolute
      top -2vw
      width 100%
      height  12.8vw
      display flex
      justify-content center
      .big-circle
        width .8rem
        height .8rem
        display flex
        justify-content center
        align-items center
        background-color #444444
        border-radius 50%
        .small-circle
          width .65rem
          height .65rem
          display flex
          justify-content center
          align-items center
          background-color #363636
          border-radius 50%
          .cart
            color #5f5f63
            font-size .5rem
  .content-right
    flex 1
    display flex
    position relative
    align-items center
    color #999999
    .message
      width 2rem
      height 12.8vw
      position absolute
      display flex
      justify-content center
      align-items center
      font-size .3rem
      right 0
      color #ffffff
      background  #535356
</style>