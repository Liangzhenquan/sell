<template>
  <div>
    <merchant-header></merchant-header>
    <merchant-tab @change='handlechange'></merchant-tab>
    <merchant-content :tabIndex="tabIndex"></merchant-content>
  </div>
</template>
<script>
import MerchantHeader from '@/pages/merchant/components/Header'
import MerchantTab from '@/pages/merchant/components/Tab'
import MerchantContent from '@/pages/merchant/components/Content'
export default {
  name: 'Merchant',
  data () {
    return {
      tabIndex: 0
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
    }
  }
}
</script>