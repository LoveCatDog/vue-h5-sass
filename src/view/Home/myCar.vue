<template>
  <div class="my-car-main">
    <div class="header-main">
      <h3>绑定的车辆只有使用权</h3>
      <van-cell-group class="header-input">
        <van-field
          v-model="carNumber"
          placeholder="请输入车牌号绑定车辆"
          input-align="center"
          class="input-car-number"
        />
      </van-cell-group>
      <!-- <div class="pre-btn btn">添加车辆</div> -->
      <div class="next-btn btn" @click="handleBindCar">绑定车辆</div>
    </div>
    <ul class="header-content">
      <li
        class="my-car-item"
        v-for="(item,index) of myCarList"
        :key="index"
        @click="handleCarToDetail(item.id)"
      >
        <div class="border"></div>
        <div class="content">
          <p class="first-title">
            {{item.name}}
            <span>{{item.carNumber}}</span>
            <span class="mycar-statu">{{item.statu ?'异常':'正常'}}</span>
          </p>
          <p class="last-title">
            类型：{{item.type}}
            <span>驾驶人：{{item.userName}}</span>
          </p>
        </div>
        <van-icon name="arrow" class="icon" />
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "my-car-main",
  data() {
    return {
      name: "111",
      carNumber: "", //输入绑定车辆的车牌号
      myCarList: [
        {
          id: "1",
          img: "",
          name: "NY001车",
          carNumber: "S0032G",
          type: "半挂",
          userName: "张大头",
          statu: 0
        },
        {
          id: "2",
          img: "",
          name: "NY001车",
          carNumber: "S0032G",
          type: "平板",
          userName: "张大头",
          statu: 0
        },
        {
          id: "3",
          img: "",
          name: "NY001车",
          carNumber: "S0032G",
          type: "平板",
          userName: "张大头",
          statu: 1
        }
      ]
    };
  },
  methods: {
    handleCarToDetail: function(carId) {
      this.$router.openPage("/mycar/" + carId);
    },
    handleBindCar: function() {
      this.$router.openPage("/bindcar");
    }
  }
};
</script>
<style lang="scss" scoped>
.my-car-main {
  .header-main {
    font-size: 0.4rem;
    text-align: left;
    border-bottom: 1px solid #e4e7ed;
    padding: 0.5rem;
    .header-input {
      padding: 0.3rem 0;
    }
    .input-car-number {
      border: 1px solid #ccc;
      padding: 0.2rem;
      margin: 0.3rem 0;
      .van-field__control {
        text-align: center;
      }
    }
    .btn {
      cursor: pointer;
      padding: 0.3rem;
      color: #fff;
      border-radius: 6px;
      background-color: black;

      text-align: center;
    }
  }
  .header-content {
    .my-car-item {
      border-bottom: 1px solid #e4e7ed;
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
      padding: 0.26rem;
      .border {
        width: 1rem;
        height: 1rem;
        background-color: #999;
        border-radius: 6px;
      }
      .content {
        flex: 1 1;
        text-align: left;
        margin-left: 0.5rem;
        .first-title {
          margin-bottom: 0.2rem;
          .mycar-statu {
            background-color: #999;
            color: #fff;
            padding: 0.1rem 0.2rem;
            border-radius: 10px;
            font-size: 0.3rem;
            margin-left: 0.5rem;
          }
        }
      }
    }
  }
}
</style>