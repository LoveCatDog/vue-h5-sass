<template>
  <div id="app">
    <div class="loading-bar" :class="nowStatus">
      <span class="press"></span>
    </div>
    <CarHeader :msg="navTitle" @ToGoBack="handleGoBlack" />
    <div class="app-init">
      <transition>
        <router-view></router-view>
      </transition>
    </div>

    <CarFooter />
  </div>
</template>


<script>
import CarHeader from "@/components/CarHeader.vue";
import CarFooter from "@/components/CarFooter.vue";
import { mapGetters } from "vuex";
import Rem from "@/assets/js/rem.js";
new Rem();
export default {
  name: "app",
  data() {
    return {
      navT1itle: "bbb"
    };
  },
  components: {
    CarHeader,
    CarFooter
  },

  watch: {
    $route() {
      this.$store.commit("getNavTitle", this.$route.meta.title);
    }
  },
  computed: {
    ...mapGetters(["nowStatus"]),
    navTitle() {
      return this.$store.state.localStorageStore.navTitle;
    }
  },
  methods: {
    handleGoBlack: function() {
      //   console.log("点击返回上一个", this.$router);
      window.history.go(-1);
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
