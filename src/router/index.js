import Vue from 'vue'
import Router from 'vue-router'
import Merchant from '@/pages/merchant/Merchant'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'merchant',
      component: Merchant
    }
  ]
})
