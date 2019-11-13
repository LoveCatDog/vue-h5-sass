<template>
  <div class="message-main">
    <ul class="message-header">
      <li v-for="(item,index) in messageList" :key="index" class="msg-item">
        <div class="msg-img">
          <span v-if="item.dot" class="dot">{{item.dot}}</span>
        </div>
        <!-- :style="{'background':'url('+item.img+') center center no-repeat'}" -->
        <p class="msg-name">{{item.name}}</p>
      </li>
    </ul>
    <ul class="message-wrap">
      <li class="message-item" v-for="(item,index) in messageContentList" :key="index">
        <p class="red-dot">
          {{item.name}}
          <van-icon name="arrow" class="icon icon-right" />
        </p>
        <p class="desc">{{item.desc}}</p>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "message-main",
  data() {
    return {
      messageContentList: [
        {
          name: "系统消息",
          desc: "下次版本更新将于12月28日进行，更新完善一下功能",
          id: 1,
          isDot: true
        },
        {
          name: "年检提醒",
          desc: "车辆年检还有3天到期，请及时处理",
          id: 1,
          isDot: true
        },
        {
          name: "违章提醒",
          desc: "车辆年检还有3天到期，请及时处理",
          id: 1
        },
        {
          name: "年检提醒",
          desc: "车辆年检还有3天到期，请及时处理",
          id: 1
        }
      ],
      messageList: [
        { name: "卡友求助", img: "/img/userImg.79667b9f.png", id: 1, dot: 3 },
        { name: "车检提醒", img: "/img/userImg.79667b9f.png", id: 1 },
        { name: "续保提醒", img: "/img/userImg.79667b9f.png", id: 1 },
        { name: "保养提醒", img: "/img/userImg.79667b9f.png", id: 1, dot: 8 },
        { name: "还款提醒", img: "/img/userImg.79667b9f.png", id: 1 },
        { name: "违章提醒", img: "/img/userImg.79667b9f.png", id: 1 }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.message-main {
  font-size: 0.34rem;
  .message-header {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 20px 10px;
    border-bottom: 15px solid #f2f3f5;
    .msg-item {
      text-align: center;
      .msg-img {
        border-radius: 10px;
        // width: 84%;
        height: 11.4vw;
        background-size: contain;
        background: #dcdfe6;
        margin: 0 auto;
        position: relative;
        .dot {
          position: absolute;
          top: 0;
          right: 0;
          box-sizing: border-box;
          min-width: 16px;
          padding: 0 3px;
          color: #fff;
          font-weight: 500;
          font-size: 12px;
          font-family: PingFang SC, Helvetica Neue, Arial, sans-serif;
          line-height: 14px;
          text-align: center;
          background-color: #ee0a24;
          border: 1px solid #fff;
          border-radius: 16px;
          -webkit-transform: translate(50%, -50%);
          transform: translate(50%, -50%);
          -webkit-transform-origin: 100%;
          transform-origin: 100%;
        }
      }
      .msg-name {
        margin: 0;
        margin-top: 0.2rem;
        font-size: 0.3rem;
      }
    }
  }
  .message-wrap {
    text-align: left;
    .message-item {
      border-bottom: 1px solid #ebedf0;
      padding: 0 10px;
      .red-dot {
        &::before {
          contain: "";
          position: absolute;
          left: 0;
          width: 2px;
          height: 2px;
        }
      }
      .icon-right {
        float: right;
      }
      .desc {
      }
    }
  }
}
</style>
