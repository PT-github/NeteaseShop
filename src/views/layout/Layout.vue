<!--
 * @Author: PT
 * @Date: 2020-03-27 22:39:41
 * @LastEditors: PT
 * @LastEditTime: 2020-03-31 09:30:12
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
.layout {
  width: 100%;
  height: 100%;
}
</style>