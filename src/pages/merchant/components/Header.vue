<template>
  <div class="header">
    <div class="wrapper">
      <div class="iconfont back-icon">&#xe624;</div>
      <div class="img">
        <img src="//fuss10.elemecdn.com/3/07/33b558505fc8b968e6fc1b8389c48jpeg.jpeg?imageMogr/thumbnail/150x/" alt="">
      </div>
    </div>
    <div class="info">
      <div class="info-wrapper">
        <div class="title">
          <div class="title-info">一记砂锅粥</div>
          <span>右</span>
          <div class="title-message">
            <span>评价4.4</span>
            <span>月售2222单</span>
            <span>商家配送约35分钟</span>
          </div>
        </div>
        <div class="info-content">

        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'MerchantHeader'
}
</script>
<style lang='stylus' scoped>
.header
  width 100%
  position relative
  height 0
  padding-bottom 54.6%
  background url(//fuss10.elemecdn.com/3/07/33b558505fc8b968e6fc1b8389c48jpeg.jpeg?imageMogr/thumbnail/750x/thumbnail/!40p/blur/50x40/) 0  0 no-repeat
  .wrapper
    width 100%
    height 0
    position relative
    display flex 
    justify-content center
    padding-bottom 30%
    .back-icon
      position absolute
      top .2rem
      left .2rem
      font-size .36rem
      color #fff
    .img
      width 1.65rem
      overflow hidden
      position absolute
      z-index 1      
      bottom -.2rem
      img
        width 100%
  .info
    position absolute
    left 0
    right 0
    bottom 0
    background #fff
    height 0
    padding-bottom 24.6%
    .info-wrapper
      padding-top .64rem
      margin 0 auto
      height 0
      .title
        width 6rem
        margin 0 auto
        text-align center
        .title-info
          display inline-block
          font-size .45rem
          font-weight bold
        .title-message
          line-height .6rem;
          color #8282b4
          font-size .25rem
</style>