<template>
  <div class="car-page">
    <van-swipe :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(item,index) of swiperList" :key="index">
        <img :src="item" class="swiper-img" />
      </van-swipe-item>
    </van-swipe>
    <div class="page-main">
      <van-notice-bar text="张XXX在中山路段发出货车抛锚求援..." left-icon="volume-o" />
      <div class="five-nav-wrap">
        <ul class="nav-content">
          <li v-for="(item,index) in navList" :key="index" class="nav-item">
            <!-- <van-image :src="item.img" /> -->
            <div class="nav-img"></div>
            <p class="nav-title">{{item.name}}</p>
          </li>
        </ul>
      </div>
      <div class="flex-li"></div>
      <div class="info-content">
        <p class="info-title">相关资讯</p>
        <ul class="info-wrap">
          <li class="info-item">
            <div class="info-left">
              <p>政策标题</p>
              <p>政策标题政策标题政策标题政策标题政策标题政策标题政策标题政策标题</p>
              <p>
                发布时间：
                <span>2019.02.23</span>
                <span>236</span>
              </p>
            </div>
            <div class="info-right">
              <div class="info-img">
                <img src="https://img.yzcdn.cn/vant/apple-1.jpg" />
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "car-page",
  data() {
    return {
      swiperList: [
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1573552…0.hdslb.com%2Fbfs%2Farticle%2F1a2a2cd….png",
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1573552…0.hdslb.com%2Fbfs%2Farticle%2F1a2a2cd….png",
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1573552…0.hdslb.com%2Fbfs%2Farticle%2F1a2a2cd….png",
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1573552…0.hdslb.com%2Fbfs%2Farticle%2F1a2a2cd….png"
      ],
      navList: [
        { img: "https://img.yzcdn.cn/vant/apple-1.jpg", name: "我的车辆" },
        { img: "https://img.yzcdn.cn/vant/apple-2.jpg", name: "借还款" },
        { img: "https://img.yzcdn.cn/vant/apple-3.jpg", name: "二手车" },
        { img: "https://img.yzcdn.cn/vant/apple-2.jpg", name: "学习培训" },
        { img: "https://img.yzcdn.cn/vant/apple-1.jpg", name: "休闲娱乐" }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.flex-li {
  width: 100%;
  height: 15px;
  background-color: #f2f3f5;
}
.car-page {
  .swiper-img {
    width: 100%;
  }
  .page-main {
    .five-nav-wrap {
      .nav-content {
        display: flex;
        align-items: center;
        justify-content: space-evenly;
      }
      .nav-item {
        -webkit-box-flex: 1;
        -ms-flex: 1 1;
        flex: 1 1;
        font-size: 12px;
        padding: 10px;
        .nav-img {
          border: 1px solid #dcdfe6;
          height: 60px;
          border-radius: 8px;
        }
      }
    }
    // info
    .info-content {
      text-align: left;
      background: #fff;
      .info-title {
        border-bottom: 1px solid #999;
        padding: 15px;
        font-size: 14px;
        font-weight: 600;
        margin: 0;
      }
      .info-wrap {
        overflow: hidden;
        padding: 15px;
        border-bottom: 15px solid #f2f3f5;
        .info-item {
          float: left;
          width: 70vw;
          .info-left {
            float: left;
            width: 70vw;
          }
          .info-right {
            margin-left: 70vw;
            .info-img {
              width: 100px;
              /* height: 100px; */
              border: 1px solid;
              overflow: hidden;
              img {
                width: 100%;
              }
            }
          }
        }
      }
    }
  }
}
</style>