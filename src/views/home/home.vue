<!--
 * @Author: PT
 * @Date: 2020-03-30 13:43:20
 * @LastEditors: PT
 * @LastEditTime: 2020-03-30 13:48:51
 * @Description: 首页
 -->
<template>
  <Layout>
    <div class="home">
      <div class="home-header">
        <div class="header-part1">
          <div class="logo"></div>
          <div class="search">
            <div class="search-input">
              <span class="iconfont iconsearch"></span>
              <span class="place-holder">搜索商品，共24598款好物</span>
            </div>
          </div>
          <div class="user">
            <div class="user-btn">登录</div>
          </div>
        </div>
        <div class="header-part2">
          <div class="nav-box swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide"
                :class="{ active: activeCode === item.code }"
                v-for="(item, index) in navList"
                :key="'navList_' + item.code + '_' + index"
                @click="changeCode(item.code)"
                >
                <span class="nav-title">{{ item.name }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="home-body">
        aaa
      </div>
      <div class="tabbar"></div>
    </div>
  </Layout>
</template>

<script>
import Layout from '../layout/Layout'
import Swiper from 'swiper'
export default {
  name: "Home",
  created () {
    this.activeCode = this.$route.query.code || '0'
  },
  data() {
    return {
      activeCode: '0',
      navList: [
        {
          name: '推荐',
          code: '0'
        },
        {
          name: '居家生活',
          code: '1'
        },
        {
          name: '服务鞋包',
          code: '2'
        },
        {
          name: '美食酒水',
          code: '3'
        },
        {
          name: '个护清洁',
          code: '4'
        },
        {
          name: '母婴亲子',
          code: '5'
        },
        {
          name: '运动旅行',
          code: '6'
        },
        {
          name: '数码家电',
          code: '7'
        },
        {
          name: '全球旅行',
          code: '8'
        }
      ],
      swiper: null
    };
  },

  components: {
    Layout
  },

  computed: {},

  mounted() {
    this.swiper = new Swiper('.swiper-container', {
      slidesPerView: 'auto',
      freeMode: true,
      spaceBetween: 10,
      loop: false
    });
  
  },

  methods: {
    changeCode (code) {
      this.activeCode = code
    }
  },

  watch: {}
};
</script>
<style lang='less' scoped>
.home {
  .home-header {
    .header-part2 {
      .swiper-container {
        margin-left: 0;
        padding-left: 15px;
        height: 30px;
        width: calc(100% - 50px);
      }
      .swiper-slide {
        height: 30px;
        width: auto;
        padding: 0 8px;
        white-space: nowrap;
        display: flex;
        flex-direction: column;
        justify-content: center;
        font-size: 14px;
        color: #333;
        position: relative;
        text-align: center;
        &.active {
          color: #DD1A21;
          &:after {
            content: '';
            width: 100%;
            height: 2PX;
            background-color: #DD1A21;
            bottom: 0;
            left: 0;
            position: absolute;
          }
        }
      }
    }
    .header-part1 {
      display: flex;
      overflow: hidden;
      height: 44px;
      padding: 8px;
    }
    .logo {
      width: 70px;
      height: 28px;
      background-image: url(~@/assets/imgs/home/logo.png);
      background-repeat: no-repeat;
      background-size: contain;
      background-position: center;
      margin-right: 8px;
    }
    .search {
      flex: 1;
      height: 100%;
      .search-input {
        background-color: #ededed;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        border-radius: 4px;
        .iconfont {
          margin-right: 5px;
        }
        .place-holder {
          font-size: 14px;
          color: #666;
        }
        .iconfont, .place-holder {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
      }
    }
    .user {
      width: 38px;
      margin-left: 8px;
      height: 28px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      .user-btn {
        width: 100%;
        height: 22px;
        text-align: center;
        line-height: 20px;
        border: 1px solid #dd1a21;
        color: #dd1a21;
        border-radius: 4px;
      }
    }
  }
}
</style>