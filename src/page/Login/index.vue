<template>
  <div id="login-main">
    <header>
      <div class="header-image"></div>
    </header>
    <div id="messagemain">
      <el-form
        :model="userInfo"
        status-icon
        ref="userInfo"
        class="demo-userInfo"
        style="width: 100%;"
      >
        <el-form-item label>
          <el-input type="text" v-model="userInfo.account" autocomplete="off" placeholder="手机号/身份证"></el-input>
          <div class="el-form-item__error" v-if="errors.account">{{errors.account}}</div>
        </el-form-item>
        <el-form-item label>
          <el-input
            type="password"
            v-model="userInfo.password"
            autocomplete="off"
            placeholder="登录密码"
          ></el-input>
          <div class="el-form-item__error" v-if="errors.password">{{errors.account}}</div>
        </el-form-item>

        <el-button
          type="primary"
          @click="submitForm(userInfo)"
          :disabled="isClick"
          class="btn-submit"
        >登录</el-button>
        <router-link :to="{path:'/register'}">
          <el-button class="btn-reset">注册</el-button>
        </router-link>
      </el-form>
    </div>
    <p class="forget-password">忘记密码</p>
  </div>
</template>
<script>
export default {
  name: "login-main",
  data() {
    return {
      userInfo: {
        account: "",
        password: ""
      },
      message: "短信验证登录",
      errors: { account: "", password: "" },
      disabled: false, //
      btnTitle: "获取验证码"
    };
  },
  computed: {
    //手机号和验证码都不能为空
    isClick() {
      if (!this.userInfo.account || !this.userInfo.password) {
        return true;
      } else {
        return false;
      }
    }
  },
  methods: {
    // 获取验证码
    handleCode() {
      //获取验证码
      if (this.isaccount()) {
        this.isTime(); //验证码倒计时
        this.getFecth(); //发送数据给后台
      }
    },
    // 验证手机号码
    isaccount() {
      if (!this.userInfo.account) {
        this.errors = {
          account: "账号不能为空！"
        };
        return false;
      } else if (!/^1[345678]\d{9}$/.test(this.userInfo.account)) {
        this.errors = {
          account: "请输入正确的账号！"
        };
      } else {
        this.errors = {};
        return true;
      }
    },
    // 验证码倒计时
    isTime: function() {
      let time = 60; //设置倒计时60s
      let timer = setInterval(() => {
        if (time == 0) {
          clearInterval(timer);
          this.disabled = false;
          this.btnTitle = "获取验证码";
        } else {
          this.disabled = true;
          this.btnTitle = time + "秒后重试";
          time--;
        }
      }, 1000);
    },
    getFecth: function() {
      //发送网络请求
      //   this.$axios
      //     .post("/api/posts/sms_send", {
      //       //注册聚合数据找到短信api服务，申请会得到两个tpl_id和key值，然后填入相对应的就行，具体还是和你门后端进行沟通
      //       tpl_id: "",
      //       key: "",
      //       account: this.userInfo.account
      //     })
      //     .then(res => {
      //       console.log(res);
      //     });
    }
  }
};
</script>
<style lang="scss" scoped>
#login-main {
  padding: 20px;
  .forget-password {
    position: absolute;
    bottom: 20px;
    margin: 0 auto;
    text-align: center;
    left: 0;
    right: 0;
    font-size: 14px;
    color: #9999;
  }
  .header-image {
    height: 80px;
    width: 80px;
    margin: 0 auto;
    background: url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1573552…0.hdslb.com%2Fbfs%2Farticle%2F1a2a2cd….png)
      center center no-repeat;
    background-size: cover;
    border-radius: 50%;
  }
  .btn-submit {
    width: 100%;
  }
  .btn-reset {
    width: 100%;
    margin: 20px 0 0;
  }
  #messagemain {
    margin-top: 30px;
  }
}
</style>