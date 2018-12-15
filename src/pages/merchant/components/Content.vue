<template>
  <div class="content">
    <merchant-order v-show='tabIndex==0'></merchant-order>
    <merchant-evaluation v-show='tabIndex==1'></merchant-evaluation>
    <merchant-info v-show='tabIndex==2'></merchant-info>
  </div>
</template>
<script>
import MerchantOrder from '@/pages/merchant/components/Order'
import MerchantEvaluation from '@/pages/merchant/components/Evaluation'
import MerchantInfo from '@/pages/merchant/components/Info'
export default {
  name: 'MerchantContent',
  props: {
    tabIndex: Number
  },
  data () {
    return {
      list:['我要点餐','我要评价','我要商家']
    }
  },
  components: {
    MerchantOrder,
    MerchantEvaluation,
    MerchantInfo
  }
}
</script>