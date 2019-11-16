<template>
  <div class="lend-repay-main">
    <header class="lend-wrap">
      <div class="flex">
        <p>
          <span class="bold">借款金额：{{lendInfo.lendMoney}}</span>
          用途：{{lendInfo.userFor}}
        </p>
        <van-button type="info" size="small">去还款</van-button>
      </div>
      <p class="lend-time">借款时间：{{lendInfo.lendTime}}</p>
      <p class="lend-time">剩余还款时间：{{lendInfo.remainTime}}</p>
    </header>
    <div class="header-main">
      <div class="pre-btn btn" @click="handLendTo(1)">借钱</div>
      <div class="next-btn btn" @click="handLendTo(2)">还款</div>
    </div>
    <div class="lend-content">
      <h3>借还款须知</h3>
      <div class="lend-item">
        <p class="lend-title">借款说明</p>
        <p class="lend-desc">说明文案说明文案说明文案说明文案说明文案说明文案说明文案说明文案说明文案说明文案说明文案</p>
        <p class="lend-title">还款说明</p>
        <p class="lend-desc">说明文案说明文案说明文案说明文案说明文案说明文案说明文案说明文案说明文案说明文案说明文案</p>
        <p class="lend-title">还借款记录</p>
        <p class="lend-desc">说明文案说明文案说明文案说明文案说明文案说明文案说明文案说明文案说明文案说明文案说明文案</p>
      </div>
    </div>
  </div>
</template>
<script>
import RemainTime, { linshi } from "@/ulits/ulits.js";
export default {
  name: "lend-repay-main",
  data() {
    return {
      name: "111",
      lendInfo: {
        lendMoney: "2500", //借款金额
        userFor: "邮费", //邮费
        lendTime: "2019-12-28 12:28:28", //借款时间
        remainTime: null //剩余还款时间
      },
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
  mounted: function() {
    let _this = this;
    this.$nextTick(function() {
      _this.getTime();
      //   this.lendInfo.lendTime;
    });
  },
  methods: {
    //   格式化时间
    getTime: function() {
      //   console.log(this._dayjs().format()); //获取当前时间
      // 借款时间格式化

      console.log("11");
      console.log("_.now()", RemainTime(this.lendInfo.lendTime), linshi());
      this.lendInfo.lendTime = this._dayjs(this.lendInfo.lendTime).format(
        " YYYY-MM-DD HH:mm:s"
      );
    },
    handleCarToDetail: function(carId) {
      this.$router.openPage("/mycar/" + carId);
    },
    handLendTo(value) {
      switch (value) {
        case 1:
          this.$router.openPage("/lendmoney");
          break;
        case 2:
          this.$router.openPage("/repaymoney");
          break;
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.lend-repay-main {
  .lend-wrap {
    padding: 0.4rem;
    text-align: left;
    font-size: 0.3rem;
    border-bottom: 1px solid #e4e7ed;
    .bold {
      font-weight: 600;
      font-size: 0.36rem;
      margin-right: 0.1rem;
    }
    .lend-time {
      line-height: 0.5rem;
    }
  }
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
  .lend-content {
    text-align: left;
    padding: 0.4rem;
    .lend-item {
      font-size: 0.34rem;
      .lend-title {
        font-weight: 600;
        padding: 0.4rem 0 0.2rem;
      }
      .lend-desc {
        line-height: 0.5rem;
      }
    }
  }
}
</style>