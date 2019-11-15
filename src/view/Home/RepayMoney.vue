<template>
  <div class="repay-money-main">
    <header class="repay-header">
      <h6 class="repay-big">
        2300
        <span class="repay-small">元</span>
      </h6>
      <p>待还款总额</p>
    </header>
    <div class="repay-content">
      <p class="repay-item">
        <span class="repay-label">用途：</span>油费
      </p>
      <p class="repay-item">
        <span class="repay-label">借款金额：</span>2300元
      </p>
      <p class="repay-item">
        <span class="repay-label">借款期限：</span>30元
      </p>
      <p class="repay-item">
        <span class="repay-label">利息：</span>3%
      </p>
      <p class="repay-item">
        <span class="repay-label">借款时间：</span>2019.02.23 13:00
      </p>
      <p class="repay-item">
        <span class="repay-label">剩余还款时间：</span>12天23时13分10秒
      </p>
      <p class="repay-item">
        <span class="repay-label">逾期时间：</span>未逾期
      </p>
      <p class="repay-item">
        <span class="repay-label">需要还款：</span>￥2300.23元
      </p>
      <p class="repay-item">
        <span class="repay-label">付款方式：</span>
        <input type="text" @click="showPicker = true" :value="userForValue" />

        <van-popup v-model="showPicker" position="bottom">
          <van-picker
            show-toolbar
            :columns="columns"
            @cancel="showPicker = false"
            @confirm="onConfirm"
          />
        </van-popup>
      </p>
      <button @click="handleRepayClick" class="repay-btn">确认还款</button>
    </div>
  </div>
</template>
<script>
export default {
  name: "repay-money-main",
  data() {
    return {
      show: false,
      lendMoney: "", //借款金额
      showPicker: false,
      columns: ["微信还款", "工资还款"]
    };
  },
  methods: {
    handleRepayClick() {
      console.log("确认还款");
    },
    onConfirm(value) {
      this.userForValue = value;
      this.showPicker = false;
    }
  }
};
</script>
<style lang="scss" scoped>
.repay-money-main {
  padding: 0.4rem;
  text-align: left;
  .repay-header {
    text-align: center;
    border: 1px solid #e4e7ed;
    border-radius: 10px;
    padding: 1rem 0 0.5rem;
    .repay-big {
      font-size: 1rem;
      margin-bottom: 0.6rem;
    }
    .repay-small {
      font-size: 0.34rem;
    }
  }
  .repay-content {
    margin-top: 0.4rem;
    .repay-item {
      padding: 0.2rem 0;
      font-size: 0.34rem;
      font-weight: 600;
      .repay-label {
        width: 30vw;
        display: inline-block;
        text-align: right;
      }
    }
  }
  .repay-btn {
    background-color: black;
    color: #fff;
    text-align: center;
    border-radius: 4px;
    padding: 0.2rem;
    margin-top: 0.5rem;
    width: 100%;
  }
}
</style>