/*
 * @Author: PT
 * @Date: 2020-03-25 17:37:42
 * @LastEditors: PT
 * @LastEditTime: 2020-03-31 17:54:34
 * @Description: 路由配置
 */
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/user',
      name: 'login',
      component: () => import(/* webpackChunkName: 'User' */ '@/views/user/user')
    },
    {
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName: 'Home' */ '@/views/home/home')
    },
    {
      path: '/discount',
      name: 'discount',
      component: () => import(/* webpackChunkName: 'Discount' */ '@/views/discount/discount')
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import(/* webpackChunkName: 'Cart' */ '@/views/cart/cart')
    },
    {
      path: '/product',
      name: 'Product',
      component: () => import(/* webpackChunkName: 'Product' */ '@/views/home/product')
    },
  ]
})
export default router