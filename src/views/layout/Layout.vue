<!--
 * @Author: PT
 * @Date: 2020-03-27 22:39:41
 * @LastEditors: PT
 * @LastEditTime: 2020-03-27 22:48:14
 * @Description: 外框
 -->
<template>
  <div class="layout">
    <slot></slot>
    <LayoutFooter></LayoutFooter>
  </div>
</template>

<script>
import LayoutFooter from './LayoutFooter'
export default {
  name: "Layout",
  data() {
    return {};
  },

  components: {
    LayoutFooter
  },

  computed: {},

  mounted() {},

  methods: {},

  watch: {}
};
</script>
<style lang='less' scoped>
</style>