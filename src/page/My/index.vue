<template>
  <div class="my-main">
    <header class="header-wrap" @click="handleToUserInfo">
      <div class="header">
        <img src="@/assets/images/userImg.png" class="header-img" />
        <p class="user-name">会吃鱼的猫</p>
      </div>
      <van-icon name="arrow" class="header-icon" />
    </header>
    <ul class="menu-wrap">
      <li
        class="menu-item"
        v-for="(item,index) in menuCarList"
        :key="index"
        @click="handleToPath(item.path)"
      >
        <div class="menu-img"></div>
        <p class="menu-title">{{item.name}}</p>
      </li>
    </ul>

    <div>
      <van-cell-group>
        <van-cell
          :value="cellItem.rightConent"
          is-link
          v-for="(cellItem,index) in cellList"
          :key="index"
        >
          <!-- 使用 title 插槽来自定义标题 -->
          <template slot="title">
            <span class="custom-title">{{cellItem.name}}</span>
          </template>
        </van-cell>
      </van-cell-group>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      cellList: [
        { name: "联系客服", rightConent: "0755-265688" },
        { name: "关于我们", rightConent: "" }
      ],
      menuCarList: [
        { name: "我的车辆", id: 1, img: "", path: "" },
        { name: "我的贷款", id: 1, img: "", path: "" },
        { name: "我的学习", id: 1, img: "", path: "/my/study" },
        { name: "我的油卡", id: 1, img: "", path: "" },
        { name: "我的保险", id: 1, img: "", path: "" },
        { name: "我的ETC", id: 1, img: "", path: "" }
      ]
    };
  },
  methods: {
    handleToUserInfo: function() {
      this.$router.openPage("/my/details/" + 1);
    },
    handleToPath: function(value) {
      this.$router.openPage(value);
    }
  }
};
</script>
<style lang="scss" scoped>
.my-main {
  text-align: left;
  .header-wrap {
    display: flex;
    align-items: center;
    background-color: #323233;
    justify-content: center;
    padding: 0 15px;
    position: relative;
    color: #fff;
    .header-icon {
      position: absolute;
      right: 15px;
      font-size: 0.5rem;
    }
    .header {
      text-align: center;
    }
    .header-img {
      border-radius: 50%;
      width: 2rem;
    }
    .user-name {
      font-size: 0.4rem;
      margin: 10px 0 40px;
    }
  }
  .menu-wrap {
    overflow: hidden;
    // margin-right: -15px;
    padding: 10px 20px 20px;
    border-bottom: 10px solid #dcdfe6;
    .menu-item {
      width: calc((100% - 65px) / 4);
      float: left;
      /* border: 1px solid; */
      margin: 15px 15px 0 0;
      text-align: center;
      font-size: 0.3rem;
      .menu-img {
        /* border: 1px solid; */
        width: 68%;
        height: 13.2vw;
        border-radius: 50%;
        text-align: center;
        margin: 0 auto;
        background: #999;
      }
      .menu-title {
        margin: 10px 0 0 0;
      }
    }
  }
}
</style>
