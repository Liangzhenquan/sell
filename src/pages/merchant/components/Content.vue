<template>
  <div class="content">
    <merchant-order 
      v-show='tabIndex==0'
      :goods='goods'
    ></merchant-order>
    <merchant-evaluation v-show='tabIndex==1'></merchant-evaluation>
    <merchant-info v-show='tabIndex==2'></merchant-info>
    <shop-cart></shop-cart>
  </div>
</template>
<script>
import MerchantOrder from '@/pages/merchant/components/Order'
import MerchantEvaluation from '@/pages/merchant/components/Evaluation'
import MerchantInfo from '@/pages/merchant/components/Info'
import ShopCart from '@/pages/merchant/components/ShopCart'
import axios from 'axios'
export default {
  name: 'MerchantContent',
  props: {
    tabIndex: Number
  },
  data () {
    return {
      list: ['我要点餐','我要评价','我要商家'],
      goods: []
    }
  },
  components: {
    MerchantOrder,
    MerchantEvaluation,
    MerchantInfo,
    ShopCart
  },
  methods: {
    getGoodsInfo () {
      axios.get('/api/goods')
      .then(this.getInfoSucc);
    },
    getInfoSucc (res) {
      if(res.data) {
        res = res.data
        this.goods = res.data;
      }
    }
  },
  mounted () {
    this.getGoodsInfo();
  }
}
</script>
<style lang='stylus' scoped>
.content
  overflow hidden
  position absolute
  top 67vw
  left 0
  right 0
  bottom -5rem
</style>
