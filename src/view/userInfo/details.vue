<template>
  <div class="userinfo-detail-main">
    <div class="userinfo-header">
      <div
        class="header-img"
        style="background:url('/img/userImg.79667b9f.png') center center no-repeat"
      ></div>
      <p class="header-title">设置头像</p>
      <van-icon name="arrow" class="icon" />
    </div>
    <div class="userinfo-wrap">
      <van-cell-group>
        <van-cell :value="item.rightConent" is-link v-for="(item,index) in cellList" :key="index">
          <!-- 使用 title 插槽来自定义标题 -->
          <!--  :style="{'border-bottom':item.id===5 && ' 10px solid'}" -->
          <template slot="title">
            <span class="custom-title">{{item.name}}</span>
          </template>
        </van-cell>
      </van-cell-group>
    </div>
  </div>
</template>
<script>
export default {
  name: "userinfo-detail-main",
  data() {
    return {
      cellList: [
        { name: "姓名", rightConent: "会吃鱼的猫", id: 1 },
        { name: "身份证", rightConent: "已完善", id: 2 },
        { name: "出生日期", rightConent: "1995.12.28", id: 3 },
        { name: "居住地址", rightConent: "深圳市龙华区", id: 4 },
        { name: "联系方式", rightConent: "18770463634", id: 5 },
        { name: "驾驶证信息", rightConent: "已完善", id: 6 },
        { name: "从业资格证", rightConent: "已完善", id: 7 },
        { name: "银行卡绑定", rightConent: "已完善", id: 8 },
        { name: "紧急联系人", rightConent: "18770463634", id: 9 }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.userinfo-header {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  padding: 10px 16px;
  justify-content: space-between;
  align-items: center;
  font-size: 0.4rem;
  color: #969799;
  .header-img {
    width: 14vw;
    height: 14vw;
    background-size: contain;
    border-radius: 50%;
    box-shadow: 1px 1px 10px #ebedf0;
  }
  .header-title {
    flex: 1 1;
    text-align: left;
    margin-left: 0.5rem;
  }
}
.userinfo-wrap {
  text-align: left;
}
</style>