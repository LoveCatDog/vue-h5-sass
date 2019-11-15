<template>
  <div class="lend-money-main">
    <div>
      <van-cell-group>
        <van-field
          readonly
          clickable
          required
          label="用途："
          :value="userForValue"
          placeholder="选择用途"
          @click="showPicker = true"
        />

        <van-popup v-model="showPicker" position="bottom">
          <van-picker
            show-toolbar
            :columns="columns"
            @cancel="showPicker = false"
            @confirm="onConfirm"
          />
        </van-popup>
        <van-field
          readonly
          required
          clickable
          label="借款金额："
          :value="lendMoney"
          placeholder="请输入金额"
          error-message="（借款金额必须是100的整数倍）"
          @touchstart.native.stop="show = true"
        />

        <van-number-keyboard
          v-model="lendMoney"
          extra-key="."
          close-button-text="完成"
          :show="show"
          :maxlength="6"
          @blur="show = false"
          @input="onInput"
          @delete="onDelete"
        />
      </van-cell-group>
    </div>
    <div class="lend-money-content">
      <h3 class="lend-big-title">借款期限</h3>
      <ul class="lend-tab-wrap flex">
        <li
          v-for="(item,index) in lendDay"
          :key="index"
          @click="handleLendTab(index)"
          :class="['lend-tab',{'tab-active':isLendActive ===index}]"
        >{{item.name}}天</li>
      </ul>
      <div class="lend-detail">
        <p class="lend-item">还款来源：微信</p>
        <p class="lend-item">利息：{{(lendDay[isLendActive].tip || '0') *100 }}%</p>
        <p class="lend-item">
          需要还款：
          <span class="sum-money">￥{{sumPrice}}元</span>
        </p>
        <div class="lend-footer">
          <van-checkbox
            v-model="isLendChecked"
            class="lend-checkbox"
            @click="handIsRead(isLendChecked)"
          >我已阅读并同意《回头车借款服务协议》《重要提示》</van-checkbox>
          <button
            :disabled="isBtnDisabled"
            @click="handleLendClick"
            :class="['lend-btn',{'btn-gray':isBtnDisabled}]"
          >借款</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "lend-money-main",
  data() {
    return {
      isLendChecked: false, //是否阅读并同意
      isBtnDisabled: true, //默认不选中“借款”按钮
      lendDay: [
        { name: 7, tip: 0.03 },
        { name: 14, tip: 0.05 },
        { name: 30, tip: 0.1 }
      ], //借款期限
      userForValue: "", //用途
      isLendActive: 0, //借款期限的tab选中索引
      show: false,
      lendMoney: "", //借款金额
      showPicker: false,
      columns: ["油费", "车辆故障", "其他"]
    };
  },
  computed: {
    sumPrice() {
      let lixi = this.lendDay[this.isLendActive].tip; //利息
      let sum = this.lendMoney * (1 + lixi);
      console.log("脚手架", sum);
      return sum;
    }
  },
  methods: {
    onConfirm(value) {
      this.userForValue = value;
      this.showPicker = false;
    },
    onInput(value) {
      console.log("输入的值", value);
    },
    onDelete() {
      console.log("删除");
    },
    handleLendTab(value) {
      console.log(value);
      this.isLendActive = value;
    },
    handleLendClick() {
      console.log("我准备借款啦");
    },
    // 已读
    handIsRead(value) {
      this.isBtnDisabled = value;
    }
  }
};
</script>
<style lang="scss" scoped>
.lend-money-main {
  text-align: left;
  padding: 0.4rem;
  .lend-money-content {
    .lend-big-title {
      padding: 0.4rem 0;
    }
    .lend-tab-wrap {
      .lend-tab {
        background-color: #999;
        color: #fff;
        padding: 0.2rem 1rem;
        border-radius: 8px;
      }
      .tab-active {
        background-color: black;
      }
    }

    .lend-detail {
      .lend-item {
        font-size: 0.34rem;
        font-weight: 600;
        padding: 0.2rem 0.1rem;
        .sum-money {
          float: right;
        }
      }
      .lend-footer {
        margin-top: 2rem;
        .lend-checkbox {
          font-size: 0.3rem;
        }
        .lend-btn {
          background-color: black;
          color: #fff;
          text-align: center;
          border-radius: 4px;
          padding: 0.2rem;
          margin-top: 0.5rem;
          width: 100%;
        }
        .btn-gray {
          background: #999;
        }
      }
    }
  }
}
</style>