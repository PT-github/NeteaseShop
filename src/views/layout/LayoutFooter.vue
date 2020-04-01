<!--
 * @Author: PT
 * @Date: 2020-03-27 22:38:36
 * @LastEditors: PT
 * @LastEditTime: 2020-03-30 13:42:30
 * @Description: 公共底部
 -->
<template>
  <div class="layout-footer">
    <van-tabbar route>
      <van-tabbar-item replace to="/" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item replace to="/discount" icon="gem-o">折扣</van-tabbar-item>
      <van-tabbar-item replace to="/cart" icon="cart">购物车</van-tabbar-item>
      <van-tabbar-item replace to="/user" icon="user-o">个人</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: "LayoutFooter",
  data() {
    return {
      active: 'home'
    };
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {},

  watch: {}
};
</script>
<style lang='less' scoped>
.layout-footer {
  height: 50px;
}
</style>
<style lang="less">
.layout-footer {
  .van-tabbar-item--active {
    color: @red;
  }
}
</style>