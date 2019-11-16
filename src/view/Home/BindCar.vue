<template>
  <div class="bind-car-main">
    <header class="bind-car-header">
      <p>绑定的车辆只有使用权</p>
      <h3 class="bind-title">我绑定的车辆：NY001车</h3>

      <div class="header-car flex">
        <div class="header-img">
          <img
            class="img"
            src="http://b-ssl.duitang.com/uploads/item/201211/10/20121110132642_VcxWX.jpeg"
          />
        </div>
        <div class="header-content">
          <p class="header-top">
            车辆：S0032G
            <span class="tip">正常</span>
          </p>
          <p>类型：半挂 驾驶人：张大头</p>
        </div>
      </div>
    </header>
    <div class="bindcar-warp">
      <p class="bindcar-item" v-for="(item,index) in bindCarList" :key="index">
        上次{{item.name}}时间：{{item.crateTime}}
        <span class="right">剩余时间：{{item.lastTime}}</span>
      </p>
    </div>
    <div class="bindcar-info">
      <h3 class="bind-title">车辆基本信息</h3>
      <div class="bind-car-item">
        <p>车辆品牌：{{carInfo.brand}}</p>
        <p>车辆类型：{{carInfo.type}}</p>
        <p>核定吨位：{{carInfo.tonnage}}</p>
        <p>车辆自重：{{carInfo.weight}}</p>
        <p>发动机信号：{{carInfo.modal1}}</p>
        <p>底盘型号：{{carInfo.modal2}}</p>
        <p>车辆照片</p>
        <div class="flex">
          <div class="bind-car-photo">
            <img
              class="bind-img"
              src="http://b-ssl.duitang.com/uploads/item/201211/10/20121110132642_VcxWX.jpeg"
            />
          </div>
          <div class="bind-car-photo">
            <img
              class="bind-img"
              src="http://b-ssl.duitang.com/uploads/item/201211/10/20121110132642_VcxWX.jpeg"
            />
          </div>
        </div>
        <p>合格证</p>
        <div>
          <img
            class="bind-img"
            src="http://b-ssl.duitang.com/uploads/item/201211/10/20121110132642_VcxWX.jpeg"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  mame: "bind-car-main",
  data() {
    return {
      carInfo: {
        brand: "大众",
        type: "货车",
        tonnage: "16T", //吨位
        weight: "2.6T", //自重
        modal1: "HUI2005", //发动机型号
        modal2: "HUI2005" //底盘型号
      },
      bindCarList: [
        { name: "年检", crateTime: "2019.03.23", lastTime: "3天24时20分10秒" },
        { name: "续保", crateTime: "2019.03.23", lastTime: "3天24时20分10秒" },
        { name: "保养", crateTime: "2019.03.23", lastTime: "3天24时20分10秒" }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.bind-car-main {
  text-align: left;
  .bind-img {
    width: 100%;
  }
  .bind-title {
    padding: 0.4rem 0;
  }
  .bind-car-header {
    padding: 0.4rem;
    border-bottom: 1px solid #e4e7ed;
    .header-img {
      width: 20vw;
      height: 20vw;
      overflow: hidden;
      border-radius: 10px;

      img {
        height: 100%;
      }
    }
    .header-content {
      flex: 1 1;
      padding: 0.4rem;
      .header-top {
        margin-bottom: 0.4rem;
      }
    }
  }
  .bindcar-warp {
    padding: 0.4rem;
    .bindcar-item {
      padding: 0.2rem 0;
      font-size: 0.3rem;
      .right {
        float: right;
      }
    }
  }
  .bindcar-info {
    padding: 0.4rem;
    .bind-car-photo {
      width: 44vw;
    }
    .bind-car-item {
      p {
        line-height: 0.8rem;
      }
    }
  }
}
</style>