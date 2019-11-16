<template>
  <div class="policy-detail-main">
    <header class="policy-header">政策标题</header>
    <p
      class="polisy-content"
    >11月12日，一辆由北京开往长沙的百世快递车辆在行驶到河南安阳路段时发生火情，火情发生的第一时间，司机已进行灭火和报警处理，事故现场无人员伤亡。当天早上，百世快递启动应对措施,加快受损货量的统计和货物的盘点。经统计，约7000余票快件被烧毁。在赔偿举措方面，积极与客户协商，进行货物补发处理和赔付。</p>
    <img class="policy-img" src="http://p0.ssl.cdn.btime.com/t01cbaf402033b0c2fb.jpg?size=1080x675" />
    <p
      class="polisy-content"
    >11月12日，一辆由北京开往长沙的百世快递车辆在行驶到河南安阳路段时发生火情，火情发生的第一时间，司机已进行灭火和报警处理，事故现场无人员伤亡。当天早上，百世快递启动应对措施,加快受损货量的统计和货物的盘点。经统计，约7000余票快件被烧毁。在赔偿举措方面，积极与客户协商，进行货物补发处理和赔付。</p>

    <p class="policy-time">
      发布时间：2019.02.34
      <span class="people">浏览人数：236</span>
    </p>
  </div>
</template>
<script>
export default {
  name: "policy-detail-main",
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
.policy-detail-main {
  padding: 0.4rem;
  text-align: justify;
  margin-bottom: 1rem;
  .policy-header {
    font-weight: 600;
    text-align: center;
    font-size: 0.36rem;
  }
  .polisy-content {
    line-height: 0.6rem;
    color: #999;
    padding: 0.4rem 0;
    font-size: 0.3rem;
  }
  .policy-img {
    width: 100%;
  }
  .policy-time {
    font-weight: 600;
    font-size: 0.3rem;
    .people {
      float: right;
    }
  }
}
</style>