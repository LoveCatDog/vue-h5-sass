<template>
  <div class="page-main">
    <div class="page">
      <router-view></router-view>
    </div>
    <!-- <CarFooter /> -->
  </div>
</template>
<script>
// import CarFooter from "@/components/CarFooter.vue";
export default {
  name: "page-main",
  data() {
    return {};
  },
  components: {
    // CarFooter
  }
};
</script>
<style lang="scss" scoped>
</style>