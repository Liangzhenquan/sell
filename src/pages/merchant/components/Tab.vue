<template>
  <div class="tab">
    <div 
      class="item" 
      @click='handleChange(index)'
      v-for='(item,index) of list'
    ><p :class="{current:currentclick==index} ">{{item}}</p></div>
    <!-- <div class="item"  @click='handleChange'><p :class="{current:currentclick=='2'} ">评价</p></div>
    <div class="item"  @click='handleChange'><p :class="{current:currentclick=='3'} ">商家</p></div> -->
  </div>
</template>
<script>
export default {
  name: 'MerchantTab',
  data () {
    return {
      currentclick:'0',
      list:['点餐','评价','商家']
    }
  },
  methods: {
    handleChange (index) {
      this.currentclick = index;
      this.$emit('change',index);
    }
  }
}
</script>
<style lang='stylus' scoped>
.tab
  overflow hidden
  border-bottom 1px solid #eee
  .item
    width 33.3%
    float left
    line-height .88rem
    text-align center
    font-size .34rem
    p
      display inline-block
      color #666
    .current
      border-bottom 2px solid #2395ff
      font-weight bold
      color #222
</style>
