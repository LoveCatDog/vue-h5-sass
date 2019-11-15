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
          <li
            v-for="(item,index) in navList"
            :key="index"
            class="nav-item"
            @click="handleToPath(item.path)"
          >
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
          <li class="info-item" v-for="(item,index) in homeList" :key="index">
            <div class="info-left">
              <p class="title">{{item.title}}</p>
              <p class="desc">{{item.desc}}</p>
              <p>
                发布时间：
                <span>{{item.time}}</span>
                <span class="message">{{item.message}}</span>
              </p>
            </div>
            <div class="info-right">
              <div class="info-img">
                <img :src="item.img" />
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
      homeList: [
        {
          img: "https://img.yzcdn.cn/vant/apple-1.jpg",
          message: "236",
          time: "2019.02.23",
          title: "政策标题",
          desc:
            "政策标题政策标题政策标题政策标题政策标题政策标题政策标题政策标题政策标题政策标题政策标题政策标题政策标题政策标题政策标题政策标题"
        },
        {
          img: "https://img.yzcdn.cn/vant/apple-1.jpg",
          message: "236",
          time: "2019.02.23",
          title: "政策标题",
          desc:
            "政策标题政策标题政策标题政策标题政策标题政策标题政策标题政策标题政策标题政策标题政策标题政策标题政策标题政策标题政策标题政策标题"
        },
        {
          img: "https://img.yzcdn.cn/vant/apple-1.jpg",
          message: "236",
          time: "2019.02.23",
          title: "政策标题",
          desc:
            "政策标题政策标题政策标题政策标题政策标题政策标题政策标题政策标题政策标题政策标题政策标题政策标题政策标题政策标题政策标题政策标题"
        },
        {
          img: "https://img.yzcdn.cn/vant/apple-1.jpg",
          message: "236",
          time: "2019.02.23",
          title: "政策标题",
          desc:
            "政策标题政策标题政策标题政策标题政策标题政策标题政策标题政策标题政策标题政策标题政策标题政策标题政策标题政策标题政策标题政策标题"
        }
      ],
      swiperList: [
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1573552…0.hdslb.com%2Fbfs%2Farticle%2F1a2a2cd….png",
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1573552…0.hdslb.com%2Fbfs%2Farticle%2F1a2a2cd….png",
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1573552…0.hdslb.com%2Fbfs%2Farticle%2F1a2a2cd….png",
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1573552…0.hdslb.com%2Fbfs%2Farticle%2F1a2a2cd….png"
      ],
      navList: [
        {
          img: "https://img.yzcdn.cn/vant/apple-1.jpg",
          name: "我的车辆",
          path: "mycar"
        },
        {
          img: "https://img.yzcdn.cn/vant/apple-2.jpg",
          name: "借还款",
          path: "lendrepay"
        },
        {
          img: "https://img.yzcdn.cn/vant/apple-3.jpg",
          name: "二手车",
          path: "mycar"
        },
        {
          img: "https://img.yzcdn.cn/vant/apple-2.jpg",
          name: "学习培训",
          path: "mycar"
        },
        {
          img: "https://img.yzcdn.cn/vant/apple-1.jpg",
          name: "休闲娱乐",
          path: "mycar"
        }
      ]
    };
  },
  methods: {
    //   跳转对应的路由地址
    handleToPath: function(path) {
      this.$router.openPage(path);
    }
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
        .nav-title {
          padding: 0.3rem 0 0.2rem;
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
        margin-bottom: 100px;
        .info-item {
          display: flex;
          font-size: 0.3rem;
          align-items: center;
          justify-content: space-between;
          border-bottom: 15px solid #f2f3f5;
          padding: 15px;
          .info-left {
            width: 64vw;
            .title {
              margin: 0;
              font-weight: 600;
            }
            .desc {
              color: #999;
              line-height: 0.5rem;
              margin: 0.3rem 0 0.2rem;
              overflow: hidden; /*必须结合的属性,当内容溢出元素框时发生的事情*/
              text-overflow: ellipsis; /*可以用来多行文本的情况下，用省略号“…”隐藏超出范围的文本 。*/
              display: -webkit-box; /*必须结合的属性 ，将对象作为弹性伸缩盒子模型显示 。*/
              -webkit-line-clamp: 2; /*用来限制在一个块元素显示的文本的行数。*/
              -webkit-box-orient: vertical; /*必须结合的属性 ，设置或检索伸缩盒对象的子元素的排列方式 。*/
            }
            .message {
              float: right;
            }
          }
          .info-right {
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