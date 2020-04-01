<!--
 * @Author: PT
 * @Date: 2020-03-31 12:23:03
 * @LastEditors: PT
 * @LastEditTime: 2020-04-01 22:45:27
 * @Description: 商品详情
 -->
<template>
  <div class="product">
    <div class="header">
      <router-link class="link icon-home" :to="{path: '/'}">
        <van-icon name="wap-home-o" />
      </router-link>
      <span class="title"></span>
      <van-icon class="link icon-search" name="search" />
      <router-link class="link icon-cart" :to="{path: '/cart'}">
        <van-icon name="shopping-cart-o" />
      </router-link>
    </div>
    <div class="product-body">
      <div class="swiper-hd">
        <van-swipe :autoplay="3000" :height="height">
          <van-swipe-item v-for="(image, index) in images" :key="index">
            <img class="pic" v-lazy="image" />
          </van-swipe-item>
        </van-swipe>
      </div>
      <div class="content">
        <div class="priceInfo">¥1399</div>
        <div class="baseInfo">
          <div class="info">
            <div class="name">坐躺两用撑腰护颈，多功能人体工学转椅</div>
            <div class="desc">推荐理由</div>
          </div>
          <div class="comment multi-line">
            <div class="wrap">
              <div class="info-wrap">
                <div class="num">97.6%</div>
                <div class="com">好评率</div>
              </div>
              <van-icon class="u-address-right" name="arrow" />
            </div>
          </div>
        </div>
        <div class="rcmdBanner">
          <ul>
            <li>
              <div class="key">1</div>
              <div class="recommendReason">坐躺两用，护腰座椅亦是午休神器</div>
            </li>
            <li>
              <div class="key">2</div>
              <div class="recommendReason">5cm可移动腰枕，贴合撑腰，久坐护脊</div>
            </li>
            <li>
              <div class="key">3</div>
              <div class="recommendReason">严格执行美国BIFMA质检，安全耐用</div>
            </li>
          </ul>
        </div>
      </div>
      <div class="interval"></div>
      <div class="specSelect">
        <div class="m-listItem">
          <div class="inner">
            <span class="it">已选择：</span>
            <span class="it">黑色升级款</span>
            <span class="it">
              <span>x</span>
              <span>1</span>
            </span>
          </div>
          <van-icon class="icon-arrow" name="arrow" />
        </div>
      </div>
      <div class="m-deliveryInfo">
        <div class="m-listItem">
          <div class="inner">
            <div class="inner">
              <div class="left">配送：</div>
              <div class="right">
                <span></span>
                <div class="pickAddr">请选择配送地址</div>
              </div>
            </div>
          </div>
          <van-icon class="icon-arrow" name="arrow" />
        </div>
      </div>
      <div class="remark-wraper">
        <div class="m-listItem">
          <div class="inner">
            <a class="remark" href="http://you.163.com/help/new#8">备注：大家具送货安装及售后服务细则&gt;&gt;</a>
          </div>
          <van-icon class="icon-arrow" name="arrow" />
        </div>
      </div>
      <div class="service-wraper dt-section">
        <div class="m-serviceEntry">
          <div class="left">服务：</div>
          <div class="right">
            <div class="right-item-wraper">
              <div class="right-item">支持30天无忧退换货</div>
              <div class="right-item">48小时快速退款</div>
            </div>
            <div class="right-item-wraper">
              <div class="right-item">满99元免邮费</div>
              <div class="right-item">网易自营品牌</div>
            </div>
            <div class="right-item-wraper">
              <div class="right-item">免费配送到家</div>
              <div class="right-item">国内部分地区无法配送</div>
            </div>
          </div>
          <van-icon class="icon-arrow" name="arrow" />
        </div>
      </div>
      <div class="pic-detail">
        <img class="pic" v-for="(item, index) in detailPic" :key="'detail-pic_' + index" v-lazy="item">
      </div>

    </div>
    <div class="m-detailFt">
      <div class="btn btn-buy">立即购买</div>
      <div class="btn btn-join">立即购买</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Product",
  data() {
    return {
      height: 0,
      images: [
        "/imgs/home/productdetail/1.png",
        "/imgs/home/productdetail/2.png",
        "/imgs/home/productdetail/3.png",
        "/imgs/home/productdetail/4.png",
        "/imgs/home/productdetail/5.png"
      ],
      detailPic: [
        "/imgs/home/productdetail/d-1.png",
        "/imgs/home/productdetail/d-2.png",
        "/imgs/home/productdetail/d-3.jpg",
        "/imgs/home/productdetail/d-4.jpg",
        "/imgs/home/productdetail/d-5.jpg",
        "/imgs/home/productdetail/d-6.jpg",
        "/imgs/home/productdetail/d-7.jpg",
        "/imgs/home/productdetail/d-8.jpg",
        "/imgs/home/productdetail/d-9.png",
        "/imgs/home/productdetail/d-10.png",
        "/imgs/home/productdetail/d-11.png",
        "/imgs/home/productdetail/d-12.png",
        "/imgs/home/productdetail/d-13.png",
        "/imgs/home/productdetail/d-14.png",
        "/imgs/home/productdetail/d-15.png",
        "/imgs/home/productdetail/d-16.png",
        "/imgs/home/productdetail/d-17.png",
        "/imgs/home/productdetail/d-18.png",
        "/imgs/home/productdetail/d-19.png",
        "/imgs/home/productdetail/d-20.png",
        "/imgs/home/productdetail/d-21.png",
        "/imgs/home/productdetail/d-22.png",
        "/imgs/home/productdetail/d-23.png",
        "/imgs/home/productdetail/d-24.png",
        "/imgs/home/productdetail/d-25.png",
        "/imgs/home/productdetail/d-26.png",
        "/imgs/home/productdetail/d-27.png",
        "/imgs/home/productdetail/d-28.png",
        "/imgs/home/productdetail/d-29.png",
        "/imgs/home/productdetail/d-30.png",
        "/imgs/home/productdetail/d-31.png",
        "/imgs/home/productdetail/d-32.png",
        "/imgs/home/productdetail/d-33.png",
        "/imgs/home/productdetail/d-34.png",
        "/imgs/home/productdetail/d-35.png",
        "/imgs/home/productdetail/d-36.png",
        "/imgs/home/productdetail/d-37.png",
        "/imgs/home/productdetail/d-38.png",
        "/imgs/home/productdetail/d-39.png",
        "/imgs/home/productdetail/d-40.png",
        "/imgs/home/productdetail/d-41.png",
        "/imgs/home/productdetail/d-42.png",
        "/imgs/home/productdetail/d-43.png",
        "/imgs/home/productdetail/d-44.png",
        "/imgs/home/productdetail/d-45.png",
        "/imgs/home/productdetail/d-46.png",
        "/imgs/home/productdetail/d-47.png",
        "/imgs/home/productdetail/d-48.png",
        "/imgs/home/productdetail/d-49.png",
        "/imgs/home/productdetail/d-50.png",
        "/imgs/home/productdetail/d-51.png",
        "/imgs/home/productdetail/d-52.png",
        "/imgs/home/productdetail/d-53.png",
        "/imgs/home/productdetail/d-54.png",
        "/imgs/home/productdetail/d-55.png",
        "/imgs/home/productdetail/d-56.png",
        "/imgs/home/productdetail/d-57.png",
        "/imgs/home/productdetail/d-58.png",
        "/imgs/home/productdetail/d-59.png",
        "/imgs/home/productdetail/d-60.png",
        "/imgs/home/productdetail/d-61.png",
        "/imgs/home/productdetail/d-62.png",
        "/imgs/home/productdetail/d-63.png",
        "/imgs/home/productdetail/d-64.png",
        "/imgs/home/productdetail/d-65.png",
        "/imgs/home/productdetail/d-66.png",
        "/imgs/home/productdetail/d-67.png",
        "/imgs/home/productdetail/d-68.png",
        "/imgs/home/productdetail/d-69.png",
        "/imgs/home/productdetail/d-70.png",
        "/imgs/home/productdetail/d-71.png",
        "/imgs/home/productdetail/d-72.png",
        "/imgs/home/productdetail/d-73.png",
        "/imgs/home/productdetail/d-74.png",
        "/imgs/home/productdetail/d-75.png",
        "/imgs/home/productdetail/d-76.png",
        "/imgs/home/productdetail/d-77.png",
        "/imgs/home/productdetail/d-78.png",
        "/imgs/home/productdetail/d-79.png",
        "/imgs/home/productdetail/d-80.png",
        "/imgs/home/productdetail/d-81.png",
        "/imgs/home/productdetail/d-82.png",
        "/imgs/home/productdetail/d-83.png",
        "/imgs/home/productdetail/d-84.png",
        "/imgs/home/productdetail/d-85.png",
        "/imgs/home/productdetail/d-86.png",
        "/imgs/home/productdetail/d-87.png",
        "/imgs/home/productdetail/d-88.png",
        "/imgs/home/productdetail/d-89.png",
        "/imgs/home/productdetail/d-90.png",
        "/imgs/home/productdetail/d-91.png",
        "/imgs/home/productdetail/d-92.png"
      ]
    };
  },

  components: {},

  computed: {},

  mounted() {
    this.height = (37.5 * 375) / this.$lib.flexible.rem;
  },

  methods: {},

  watch: {}
};
</script>
<style lang='less' scoped>
.product {
  width: 100%;
  height: 100%;
  .m-detailFt {
    height: 52px;
    display: flex;
    .btn {
      border-top: 1px solid #c7c7c7;
      color: #333;
      background-color: #fff;
      flex: 1;
      height: 100%;
      text-align: center;
      line-height: 52px;
      font-size: 14px;
      &.btn-join {
        color: #fff;
        border-color: #DD1A21;
        background-color: #DD1A21;
      }
    }
  }
  .pic-detail {
    .pic {
      width: 100%;
      display: block;
    }
  }
  .interval {
    border-top: 10px solid #f4f4f4;
  }
  .dt-section {
    background: #fff;
    border-bottom: 10px solid #eee;
  }
  .m-listItem {
    display: flex;
    align-items: center;
    position: relative;
    min-height: 52px;
    padding-right: 40px;
    border-bottom: 1px solid #d9d9d9;
    .inner {
      font-size: 14px;
      line-height: 52px;
    }
  }
  .service-wraper {
    padding: 12px 0 4px;
  }
  .m-serviceEntry {
    padding-left: 15px;
    font-size: 14px;
    min-height: 36px;
    display: flex;
    align-items: center;
    position: relative;
    .left {
      align-self: flex-start;
      line-height: 1;
      color: #333;
    }
    .right {
      flex: 1;
      .right-item {
        position: relative;
        padding-left: 8px;
        margin-right: 20px;
        float: left;
        line-height: 1;
        margin-bottom: 8px;
        color: #7f7f7f;
        &:after {
          content: "";
          position: absolute;
          width: 4px;
          height: 4px;
          background: #dd1a21;
          border-radius: 100%;
          left: 0;
          top: 5px;
        }
      }
    }
  }
  .m-deliveryInfo,
  .m-hdrkDetail,
  .m-shoppingReward {
    margin-left: 15px;
  }
  .remark-wraper {
    padding-left: 15px;
    .remark {
      display: block;
      font-size: 14px;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      color: #333;
    }
  }
  .m-deliveryInfo {
    font-size: 14px;
    .left {
      display: inline-block;
      color: #333;
    }
    .right {
      display: inline-block;
      vertical-align: top;
      width: 260px;
    }
  }
  .specSelect {
    padding-left: 15px;
  }
  .content {
    padding: 13px 15px 18px;
    .rcmdBanner {
      margin: 17.25px 0 0;
      padding: 7px 10px;
      width: 345px;
      line-height: 30px;
      background: #fafafa;
      border: 1px solid #e6e6e6;
      border-radius: 2px;
      position: relative;
      .key {
        display: inline-block;
        width: 12px;
        height: 12px;
        border: 1px solid #dd1a21;
        border-radius: 50%;
        text-align: center;
        line-height: 12px;
        font-size: 10px;
        color: #dd1a21;
        font-family: PingFang SC;
        font-weight: 700;
        margin-right: 4px;
        vertical-align: middle;
      }
      li {
        height: 18px;
        line-height: 18px;
        font-family: PingFangSC-Regular;
        font-size: 12px;
        color: #333;
        &:not(:last-child) {
          margin-bottom: 2px;
        }
        .recommendReason {
          display: inline-block;
          height: 18px;
          line-height: 18px;
          vertical-align: middle;
        }
      }
    }
    .baseInfo {
      display: flex;
      margin-top: 7px;
      .info {
        flex: 1;
        padding-right: 12px;
        .name {
          font-size: 16px;
          line-height: 24px;
          margin-bottom: 2px;
          font-weight: 700;
        }
        .desc {
          font-size: 12px;
          line-height: 18px;
          color: #333;
          font-weight: lighter;
        }
      }
      .comment {
        width: 90px;
        display: flex;
        justify-content: center;
        .wrap {
          display: flex;
          align-items: center;
          padding-left: 10px;
          text-align: center;
          font-size: 14px;
          .num {
            font-weight: 700;
            font-size: 16px;
            line-height: 22.5px;
            color: #dd1a21;
            text-align: center;
          }
          .com {
            font-family: PingFangSC-Light;
            line-height: 18px;
            font-size: 12px;
            color: #7f7f7f;
          }
          .u-address-right {
            flex: 1;
            margin-left: -2px;
            color: #666666;
          }
        }
      }
    }
    .priceInfo {
      height: 30px;
      line-height: 30px;
      color: @red;
      font-size: 27px;
      font-weight: 700;
    }
  }
  .swiper-hd {
    .pic {
      width: 100%;
    }
  }
  .header {
    height: 44px;
    position: relative;
  }
  .link {
    font-size: 30px;
    position: absolute;
    top: 7px;
    z-index: 2;
    width: 30px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    color: #333;
  }
  .icon-home {
    left: 12px;
  }
  .icon-search {
    right: 45px;
  }
  .icon-cart {
    right: 12px;
  }
  .title {
    position: absolute;
    top: 8.5px;
    width: 100%;
    height: 27px;
    background-image: url(~@/assets/imgs/sprit.png);
    background-position: center -64px;
    background-size: 86px auto;
    background-repeat: no-repeat;
    z-index: 1;
  }
  .product-body {
    height: calc(100% - 96px);
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    .icon-arrow {
      position: absolute;
      right: 8px;
      top: 0;
      bottom: 0;
      margin: auto;
      display: inline-block;
      width: 25px;
      height: 25px;
      vertical-align: middle;
      color: #999999;
      line-height: 25px;
      font-size: 18px;
    }
  }
}
</style>