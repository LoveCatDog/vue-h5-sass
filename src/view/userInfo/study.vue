<template>
  <div class="user-study-main">
    <div class="materials-item item">学习资料</div>
    <div class="video-item item">视频学习</div>
    <div class="online-test-item item">在线考试</div>
  </div>
</template>
<script>
export default {
  name: "user-study-main",
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.user-study-main {
  padding: 0.4rem;
  .item {
    border: 1px solid #e4e7ed;
    padding: 2rem 0;
    margin: 0.3rem 0;
  }
}
</style>