<template >
  <div class="bgc" style="border: 1px solid red">
    <el-form ref="form" label-width="80px" class="login_layout">
      <h2>汽车租赁管理系统</h2>
      <el-form-item label="账号：">
        <el-input
          type="text"
          placeholder="请输入账号"
          v-model="username"
        ></el-input>
      </el-form-item>
      <el-form-item label="密码：">
        <el-input
          placeholder="请输入密码"
          type="password"
          v-model="password"
        ></el-input>
      </el-form-item>
      <el-button type="primary" class="btn_login" @click="login"
        >登录</el-button
      >
      <el-button type="primary" @click="register">注册</el-button>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    login() {
      // const { username, password } = this;
      // let result = this.$store.dispatch("userLogin", { username, password });
      // console.log(result.code);
      //console.log(this.$store);
      this.$router.push("/main");
    },
    register() {
      this.$router.push("/register");
      // const { username, password } = this;
      // let result = this.$store.dispatch("userRegister", { username, password });
      // console.log(result.code);
    },
  },
};
</script>

<style scoped>
.bgc {
  position: absolute;
  width: 100%;
  height: 100%;
  background: url("../assets/car2.jpg") no-repeat center top;
  background-position: -238px -161px;
  overflow: hidden;
}
.login_layout {
  width: 400px;
  height: 250px;
  background-color: rgb(205, 205, 245, 0.8);
  box-shadow: 0 0 25px #cac6c6;
  margin: 150px auto;
  border-radius: 30px;
  padding: 30px;
}
h2 {
  text-align: center;
}
.btn_login {
  margin-left: 100px;
  margin-right: 80px;
}
</style>