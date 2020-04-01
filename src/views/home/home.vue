<!--
 * @Author: PT
 * @Date: 2020-03-30 13:43:20
 * @LastEditors: PT
 * @LastEditTime: 2020-03-31 12:01:35
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
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <div
                class="swiper-slide"
                :class="{ active: activeCode === item.code }"
                v-for="(item, index) in navList"
                :key="'navList_' + item.code + '_' + index"
                @click="changeCode(item.code)"
              >
                <span class="nav-title">{{ item.name }}</span>
              </div>
            </div>
          </div>
          <div class="more" :class="{ rotate: isShowMoreNav }">
            <van-icon @click="toogleShowMore" name="arrow-up" />
          </div>
          <van-popup overlay-class="nav-popup" position="top" v-model="isShowMoreNav">
            <div class="sub-title">全部频道</div>
            <div class="nav-list">
              <div
                class="nav-item"
                v-for="(item, index) in navList"
                :key="'nav-List_' + item.code + '_' + index"
              >{{ item.name }}</div>
            </div>
          </van-popup>
        </div>
      </div>
      <div class="home-body">
        <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
          <van-swipe class="home-bd" :height="height" :autoplay="3000">
            <van-swipe-item v-for="(image, index) in images" :key="index">
              <img class="pic" v-lazy="image" />
            </van-swipe-item>
          </van-swipe>
          <div class="hd">
            <div class="name">爆款指南</div>
            <div class="desc">4周年庆 倾情推荐</div>
          </div>
          <div class="pull-list">
            <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
              <div class="product-box">
                <div class="list-item" v-for="(item, index) in list" :key="index">
                  <router-link class="item-link" :to="{path: '/product', query: {productId: item}}">
                    <div class="pic" v-lazy:background-image="item.pic"></div>
                    <div class="title">{{ item.name }}</div>
                    <div class="price">¥{{ item.price }}</div>
                  </router-link>
                </div>
              </div>
            </van-list>
          </div>
        </van-pull-refresh>
      </div>
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
      height: 148,
      images: [
        '/imgs/home/tuiguang.png',
        '/imgs/home/tuiguang.png',
        '/imgs/home/tuiguang.png',
        '/imgs/home/tuiguang.png',
        '/imgs/home/tuiguang.png',
        '/imgs/home/tuiguang.png',
      ],
      activeCode: '0',
      isShowMoreNav: false,
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
          name: '服饰鞋包',
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
      swiper: null,
      list: [1,2,3,4,5,6,7,8,9],
      list: [],
      loading: false,
      finished: false,
      refreshing: false
    };
  },

  components: {
    Layout
  },

  computed: {},

  mounted() {
    this.height = 37.5 * 148 / this.$lib.flexible.rem
    this.$nextTick(() => {
      this.swiper = new Swiper('.swiper-container', {
        slidesPerView: 'auto',
        freeMode: true,
        spaceBetween: 10,
        loop: false
      });
    })
  
  },

  methods: {
    onLoad() {
      setTimeout(() => {
        if (this.refreshing) {
          this.list = [];
          this.refreshing = false;
        }

        for (let i = 1; i <= 10; i++) {
          this.list.push({
            pic: `/imgs/home/product/${i}.png`,
            name: i % 2 === 0 ? `挺括自然的垂感，男式弹力针织合体商务长裤` : `女式罗马针织通勤长裤`,
            price: '249'
          });
        }
        this.loading = false;

        if (this.list.length >= 100) {
          this.finished = true;
        }
      }, 1000);
    },
    onRefresh() {
      // 清空列表数据
      this.finished = false;

      // 重新加载数据
      // 将 loading 设置为 true，表示处于加载状态
      this.loading = true;
      this.onLoad();
    },
    // 显示所有分类
    toogleShowMore () {
      this.isShowMoreNav = !this.isShowMoreNav
    },
    changeCode (code) {
      this.activeCode = code
    }
  },

  watch: {}
};
</script>
<style lang='less' scoped>
.home {
  height: calc(100% - 50px);
  .hd {
    text-align: center;
    display: flex;
    flex-direction: column;
    height: 60px;
    justify-content: center;
    .name {
      font-size: 16px;
    }
    .desc {
      font-size: 12px;
      color: #999;
    }
  }
  .home-body {
    height: calc(100% - 74px);
    -webkit-overflow-scrolling: touch;
    overflow-y: auto;
  }
  .pull-list {
    height: calc(100% - 282px);
    .product-box {
      display: flex;
      flex-wrap: wrap;
      .list-item {
        width: 50%;
        padding: 0 15px 15px 5px;
        .item-link {
          display: block;
          width: 100%;
          height: 100%;
        }
        .pic {
          height: 167.5px;
          background-color: #f4f4f4;
          background-position: center;
          background-size: contain;
          background-repeat: no-repeat;
        }
        .title {
          font-size: 14px;
          color: #333;
        }
        .price {
          color: @red;
          font-size: 16px;
        }
      }
    }
  }
  .home-header {
    .header-part2 {
      position: relative;
      z-index: 1;
      .sub-title {
        height: 30px;
        line-height: 30px;
        padding-left: 15px;
        font-size: 14px;
      }
      .nav-list {
        display: flex;
        flex-wrap: wrap;
        .nav-item {
          width: calc(25% - 18px);
          height: 28px;
          line-height: 26px;
          text-align: center;
          margin-bottom: 20px;
          background: #fafafa;
          border: 1px solid #ccc;
          border-radius: 2px;
          margin-left: 14.4px;
        }
      }
      .more {
        position: absolute;
        top: 0;
        right: 0;
        width: 50px;
        height: 30px;
        line-height: 30px;
        text-align: center;
        font-size: 16px;
        transition: all 0.2s;
        &.rotate {
          transform: rotate(180deg);
        }
      }
      .swiper-container {
        margin-left: 0;
        padding-left: 15px;
        height: 30px;
        width: calc(100% - 50px);
      }
      .swiper-slide {
        height: 30px;
        width: auto;
        padding: 0 9px;
        white-space: nowrap;
        display: flex;
        flex-direction: column;
        justify-content: center;
        font-size: 14px;
        color: #333;
        position: relative;
        text-align: center;
        &.active {
          color: @red;
          &:after {
            content: "";
            width: 100%;
            height: 2px;
            background-color: @red;
            bottom: 0;
            left: 0;
            position: absolute;
          }
        }
      }
    }
    .header-part1 {
      position: relative;
      display: flex;
      overflow: hidden;
      height: 44px;
      padding: 8px;
      z-index: 2;
      background: #ffffff;
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
        .iconfont,
        .place-holder {
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
        border: 1px solid @red;
        color: @red;
        border-radius: 4px;
      }
    }
  }
}
</style>
<style lang="less">
.home {
  .home-bd {
    .pic {
      width: 100%;
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
    }
  }
  .home-body {
    .van-swipe__indicators {
      .van-swipe__indicator {
        width: 20px;
        height: 2px;
        border-radius: 0;
        background-color: #fff;
        opacity: 0.4;
        &.van-swipe__indicator--active {
          opacity: 1;
        }
      }
    }
  }
  .nav-popup,
  .van-popup--top {
    top: 44px;
  }
}
</style>