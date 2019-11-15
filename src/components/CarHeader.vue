<template>
  <div class="car-header">{{msg}}</div>
</template>
<script>
export default {
  name: "car-header",
  data() {
    return {};
  },
  props: {
    msg: String
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
}
</style>