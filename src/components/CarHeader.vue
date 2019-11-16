<template>
  <div class="car-header">
    <div class="header-wrap">
      <div class="header-icon" @click="handleGoBack" v-if="headerType">
        <van-icon name="arrow-left" />
      </div>
      <div v-else class="header-icon location" @click="handleCitySelect">
        <!-- <router-link to="/cityselect"> -->
        <span class="city-location">{{cityName}}</span>
        <van-icon name="arrow-down" />
        <!-- </router-link> -->
      </div>
      {{msg}}
    </div>
    <van-popup v-model="showPicker" position="bottom">
      <van-area
        :area-list="areaList"
        :columns-num="2"
        title="标题"
        @cancel="showPicker = false"
        @confirm="handleConfirm"
        :loading="isLoading"
      />
    </van-popup>
  </div>
</template>
<script>
import province_list from "../../static/location.js";
// import BaiduMap from "../assets/js/baidu-map.js";
export default {
  name: "car-header",
  data() {
    return {
      showPicker: false,
      locationList: {},
      isLoading: true,
      areaList: province_list, //省市二级联动
      province: null, //选中的省份
      city: "定位中" //选中的市
    };
  },
  props: {
    msg: null
  },
  mounted() {
    this.cityLocaltion();
  },
  computed: {
    headerType() {
      let baseNavList = ["主页", "车辆", "救援", "消息", "我的", "登录"];
      let result = true;
      for (let i = 0; i < baseNavList.length; i++) {
        if (this.msg === baseNavList[i]) {
          result = false;
        }
      }
      return result;
    },
    cityName() {
      return this.$store.state.localStorageStore.cityName;
    }
  },
  methods: {
    cityLocaltion() {
      let _this = this;
      if (!_this.cityName) {
        function myFun(result) {
          var cityName = result.name;
          _this.city = cityName;
          _this.$store.commit("getCityName", cityName);
        }
        var myCity = new BMap.LocalCity();
        myCity.get(myFun);
      }
    },
    handleConfirm: function(value) {
      this.showPicker = false;
      this.province = value[0].name; //获取省份
      this.city = value[1].name; //获取市
      this.$store.commit("getCityName", this.city);
    },
    onConfirm: function() {},
    handleGoBack: function() {
      this.$emit("ToGoBack");
    },
    // 选择城市
    handleCitySelect: function() {
      this.showPicker = true;
      //   制造数据在加载中
      setTimeout(() => {
        this.isLoading = false;
      }, 500);
    }
  }
};
</script>
<style lang="scss" scoped>
.car-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  margin: 0 auto;
  line-height: 30px;
  background: #323233;
  color: #fff;
  padding: 15px 0;
  font-size: 16px;
  z-index: 100;
  .header-wrap {
    position: relative;
    margin: 0 0.5rem;

    .header-icon {
      position: absolute;
      left: 0;
      top: 50%;
      transform: translate(0, -50%);
      width: 1rem;
      height: 1rem;
      line-height: 1rem;
      text-align: left;
      .city-location {
        max-width: 26vw;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
      }
    }
    .location {
      display: flex;
      align-items: center;
      width: auto;
    }
  }
}
</style>