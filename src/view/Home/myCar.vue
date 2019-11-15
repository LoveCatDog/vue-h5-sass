<template>
  <div class="my-car-main">
    <div class="header-main">
      <div class="pre-btn btn">添加车辆</div>
      <div class="next-btn btn">绑定车辆</div>
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
            <span>{{item.statu ?'异常':'正常'}}</span>
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
    }
  }
};
</script>
<style lang="scss" scoped>
.my-car-main {
  .header-main {
    display: flex;
    font-size: 0.4rem;
    justify-content: space-evenly;
    align-items: center;
    border-bottom: 1px solid #e4e7ed;
    padding: 20px 0;
    .btn {
      cursor: pointer;
      padding: 6px 27px;
      color: #fff;
      border-radius: 6px;
      background-color: #999;
    }
    .pre-btn {
    }
    .next-btn {
      background-color: black;
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
        }
      }
    }
  }
}
</style>