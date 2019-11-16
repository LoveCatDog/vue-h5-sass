<template>
  <div :class="['car-footer',{'leave':leaveComp}]">
    <ul class="car-footer-ul">
      <li
        :class="['car-footer-item',{'active': isNavActive(item.path)}] "
        v-for="(item,index) in homeList"
        :key="index"
        @click="handleNavLink(item.path,index)"
      >
        <van-icon :name="item.icon" class="icon" />
        <p class="name">{{item.name}}</p>
      </li>
    </ul>
  </div>
</template>
<script>
// import { store } from "../store/index";
import { mapState } from "vuex";
export default {
  name: "car-footer",
  data() {
    return {
      isActive: 0,
      nowUrl: "/home",
      test: "",
      homeList: [
        { name: "首页", icon: "home-o", path: "home" },
        { name: "车辆", icon: "home-o", path: "cars" },
        { name: "救援", icon: "home-o", path: "help" },
        { name: "消息", icon: "home-o", isInfo: 5, path: "message" },
        { name: "我的", icon: "home-o", path: "user" }
      ]
    };
  },
  computed: {
    // ...mapState({
    //   count: state => state.store.count,
    //   urlPath: state => state.store.urlPath
    // }),
    // count() {
    //   return this.$store.state.store.count;
    // },
    // 判断是否符合显示底部菜单页脚
    //  获取地址路径
    urlPath() {
      return this.$store.state.localStorageStore.urlPath;
    },
    leaveComp() {
      let result = true;
      var basePath = ["home", "cars", "help", "message", "user"];
      for (let i = 0; i < basePath.length; i++) {
        if (this.isNavActive(basePath[i])) {
          result = false;
        }
      }
      return result;
    }
  },

  watch: {
    $route(to, from) {
      //这样就可以获取到变化的参数了，然后执行参数变化后相应的逻辑就行了
      this.nowUrl = this.$route.path;
      this.$store.commit("setInfo", this.$route.path);
    }
  },

  methods: {
    //   跳转对应的路由地址
    handleNavLink: function(path) {
      this.$router.openPage(path);
    },
    isNavActive: function(name) {
      if (this.urlPath) {
        return this._.includes(this.urlPath, name);
        // return this.urlPath.indexOf(name) != -1;
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.leave {
  transform: translateY(100%);
}
.car-footer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 10;
  .car-footer-ul {
    display: flex;
    align-items: center;
    justify-content: space-around;
    background: #fff;
    box-shadow: 1px 1px 10px #e4e7ed;
    padding: 10px 0 6px;
    .car-footer-item {
      display: inline-block;
      font-size: 0.34rem;
      .icon {
        font-size: 0.5rem;
      }
      .name {
        line-height: 30px;
        margin: 0;
      }
    }
    .active {
      color: #e6a23c;
    }
  }
}
</style>