<template>
  <div class="car-detail-main">
    <div class="header-title">车辆基本信息</div>
    <ul>
      <li class="car-detail-item" v-for="(item,index) in carBaseInfo" :key="index">
        <p>{{item.name}}</p>
        <van-icon name="arrow" class="icon" />
      </li>
    </ul>
    <div class="btn-next">下一步</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      carBaseInfo: [
        { name: "车辆品牌", id: "1" },
        { name: "车辆类型", id: "1" },
        { name: "核定吨位", id: "1" },
        { name: "车辆自重", id: "1" },
        { name: "发动机号", id: "1" },
        { name: "底盘号", id: "1" },
        { name: "车牌号", id: "1" },
        { name: "挂车车牌号", id: "1" },
        { name: "挂车车架号", id: "1" }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.car-detail-main {
  .header-title {
    font-weight: 600;
    font-size: 0.4rem;
    text-align: left;
    padding: 15px;
    border-bottom: 1px solid #e4e7ed;
  }
  .car-detail-item {
    font-weight: 600;
    border-bottom: 1px solid #e4e7ed;
    text-align: left;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    font-size: 0.32rem;
    -webkit-box-pack: space-evenly;
    -ms-flex-pack: space-evenly;
    justify-content: space-between;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    padding: 0 15px;
    line-height: 1rem;
  }
  .btn-next {
    font-size: 0.4rem;
    background-color: black;
    width: 50%;
    margin: 0 auto;
    padding: 10px;
    border-radius: 10px;
    margin-top: 20px;
    color: #fff;
  }
}
</style>