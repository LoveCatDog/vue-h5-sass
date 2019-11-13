<template>
  <div class="my-main">
    <header class="header-wrap">
      <div class="header">
        <img src="@/assets/images/userImg.png" class="header-img" />
        <p>会吃鱼的猫</p>
      </div>
      <van-icon name="arrow" class="header-icon" />
    </header>

    <div>
      <van-cell-group>
        <van-cell value="内容" is-link>
          <!-- 使用 title 插槽来自定义标题 -->
          <template slot="title">
            <span class="custom-title">单元格</span>
          </template>
        </van-cell>
      </van-cell-group>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.my-main {
  text-align: left;
  .header-wrap {
    display: flex;
    align-items: center;
    background-color: #323233;
    justify-content: center;
    padding: 0 15px;
    position: relative;
    color: #fff;
    .header-icon {
      position: absolute;
      right: 15px;
    }
    .header {
      text-align: center;
    }
    .header-img {
      border-radius: 50%;
      width: 2rem;
    }
  }
}
</style>
