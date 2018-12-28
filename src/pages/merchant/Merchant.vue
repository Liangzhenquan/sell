<template>
  <div>
    <merchant-header></merchant-header>
    <merchant-tab @change='handlechange'></merchant-tab>
    <merchant-content 
      :tabIndex="tabIndex"
    ></merchant-content>
  </div>
</template>
<script>
import MerchantHeader from '@/pages/merchant/components/Header'
import MerchantTab from '@/pages/merchant/components/Tab'
import MerchantContent from '@/pages/merchant/components/Content'
import axios from 'axios'
export default {
  name: 'Merchant',
  data () {
    return {
      tabIndex: 0,
      goods: []
    }
  },
  components: {
    MerchantHeader,
    MerchantTab,
    MerchantContent
  },
  methods: {
    handlechange (index) {
      this.tabIndex = index;
    },
    // 获取后台数据
    getSellerInfo () {
      axios.get('/api/seller')
      .then(this.getInfoSucc);
    },
    getInfoSucc (res) {
     if(res.errno && res.data) {
       this.goods = res.data;
     }
     }
  },
  mounted () {
    this.getSellerInfo()
  }
}
</script>