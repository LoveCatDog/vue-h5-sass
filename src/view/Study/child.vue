<template>
  <div class="child-main">
    <h3>我是儿子</h3>
    <!--prop :父组件的数据传到子组件-->
    <h1>{{content}}</h1>

    <!-- $emit：子组件触发传递到父组件 -->
    <!-- <button @click="tryToParent">儿子点击</button> -->

    <!-- $refs -->
    <div>{{message1}}</div>
    <div>{{message2}}</div>
  </div>
</template>
<script>
export default {
  name: "child-main",
  data() {
    return {
      message1: "",
      message2: ""
    };
  },
  props: {
    content: {
      type: String
    }
  },
  methods: {
    // tryToParent: function() {
    //   //通过$emit 进行触发,第一个参数为父组件监听的事件名，后续参数为父组件方法的参数
    //   this.$emit("toParent", "我来自子组件");
    // }
    fromParent(res) {
      this.message1 = res;
    }
  }
};
</script>