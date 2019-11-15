<template>
  <div class="parent-main">
    我是父亲
    <child :content="message" />

    <!-- <Child @toParent="fromChild" /> -->

    <Child ref="child" />
    <button @click="toChild">父亲点击</button>
  </div>
</template>
<script>
import Child from "./child.vue";
export default {
  name: "parent-main",
  data() {
    return {
      message: "from parent"
    };
  },
  components: { Child },
  methods: {
    // fromChild: function(result) {
    //   console.log("我在父亲家里result", result);
    // }
    toChild: function() {
      //调用子组件的fromParent方法
      this.$refs.child.fromParent("我来自父组件传递");
      this.$refs.child.message2 = "啦啦啦";
    }
  }
};
</script>