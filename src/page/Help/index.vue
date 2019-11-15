<template>
  <div class="help-main">
    <header>
      <img src="@/assets/images/userImg.png" class="header-img" />
      <p class="header-title">事故救援</p>
    </header>
    <div class="help-wrap">
      <h3 class="help-title">救援须知</h3>
      <div class="help-item">
        <p class="help-name">抛锚救援</p>
        <div
          class="help-desc"
        >但是我们在行驶中难免会遇到汽车抛锚、出现故障的时候,使得爱车无法正常行驶,那么遇到这种情况,大家都会慌乱,想着到底要叫谁来救援?是4S店的维修人员?</div>
      </div>
      <div class="help-item">
        <p class="help-name">事故救援</p>
        <div class="help-desc">后台联系最近的医院代替司机报警</div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.help-main {
  font-size: 0.34rem;
  header {
    padding: 0.5rem;
  }
  .header-title {
    padding-top: 0.5rem;
  }
  .header-img {
    border-radius: 50%;
    width: 100px;
  }
  .help-wrap {
    text-align: left;
    padding: 15px;
    .help-desc {
      color: #999;
      padding: 0.3rem 0 0.5rem;
      line-height: 0.5rem;
    }
    .help-title {
      line-height: 1rem;
    }
  }
}
</style>

