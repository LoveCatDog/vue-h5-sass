<template>
  <div>
    <el-form
      v-model="ruleForm"
      status-icon
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
      style="width: 90%;padding-top: 20px;"
    >
      <el-form-item label="手机号" prop="pass">
        <el-input type="text" v-model="ruleForm.phone" autocomplete="off" placeholder="手机号">
          <el-button slot="append" @click="handleCode" :disabled="disabled">{{btnTitle}}</el-button>
        </el-input>
        <div class="el-form-item__error" v-if="errors.phone">{{errors.phone}}</div>
      </el-form-item>
      <el-form-item label="密码" prop="checkPass">
        <el-input type="text" v-model="ruleForm.password" autocomplete="off" placeholder="验证码"></el-input>
      </el-form-item>
      <el-form-item label="再输密码" prop="checkPass">
        <el-input
          type="password"
          v-model="ruleForm.newPassword"
          autocomplete="off"
          placeholder="验证码"
        ></el-input>
      </el-form-item>
      <el-form-item label="验证码" prop="checkPass">
        <el-input type="password" v-model="ruleForm.phoneCode" autocomplete="off" placeholder="验证码"></el-input>
      </el-form-item>

      <el-button type="primary" @click="submitForm(ruleForm)" :disabled="isClick">注册</el-button>
    </el-form>
  </div>
</template>
<script>
export default {
  name: "messagemain",
  data() {
    return {
      ruleForm: {
        phone: "", //手机号码
        phoneCode: "", //验证码
        password: "", //第一次输入密码
        newPassword: "" //再次输入密码
      },
      message: "短信验证登录",
      errors: { phone: "" },
      disabled: false, //
      btnTitle: "获取验证码"
    };
  },
  computed: {
    //手机号和验证码都不能为空
    isClick() {
      if (!this.ruleForm.phone || !this.ruleForm.phoneCode) {
        return true;
      } else {
        return false;
      }
    }
  },
  methods: {
    submitForm: function() {
      //点击发送
      //   this.$axios
      //     .post("/api/posts/sms_back", {
      //       phone: value.phone,
      //       code: value.verifyCode
      //     })
      //     .then(res => {
      //       console.log(res);
      //       localStorage.setItem("ele_login", true);
      //       this.$router.push("/");
      //     })
      //     .catch(error => {
      //       //返回错误信息
      //       this.errors = {
      //         code: error.response.data.msg
      //       };
      //     });
    },

    // 获取验证码
    handleCode() {
      //获取验证码
      if (this.isPhone()) {
        this.isTime(); //验证码倒计时
        this.getFecth(); //发送数据给后台
      }
    },
    // 验证手机号码
    isPhone() {
      if (!this.ruleForm.phone) {
        this.errors = {
          phone: "手机号码不能为空！"
        };
        return false;
      } else if (!/^1[345678]\d{9}$/.test(this.ruleForm.phone)) {
        this.errors = {
          phone: "请输入正确的手机号码！"
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
      //       phone: this.ruleForm.phone
      //     })
      //     .then(res => {
      //       console.log(res);
      //     });
    }
  }
};
</script>