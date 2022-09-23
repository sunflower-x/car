<template>
  <div class="header">
    <span class="header-text">汽车租赁信息管理系统</span>
    <div class="header-right">
      <el-dropdown placement="bottom-start">
        <span class="el-dropdown-link icon-wrap">
          <img class="user-img" src="../assets/people.png" />
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item >个人中心</el-dropdown-item>
          <el-dropdown-item >退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <div class="header-right-text">
        <div class="header-wellcome">欢迎你，</div>
        <div class="header-time"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
   
};
</script>

<style scoped>
.header-text {
  font-size: 22px;
  font-weight: bold;
  color: #fff;
  padding-left: 25px;
}
.header-right {
  float: right;
  margin-right: 15px;
}
.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
}
.icon-wrap {
  width: 50px;
  height: 50px;
  font-size: 35px;
  margin-right: 5px;
}
.user-img {
  margin-top: 2px;
  height: 45px;
  width: 45px;
}

.header-wellcome {
  font-size: 14px;
}
.header-right-text {
  float: right;
  color: #fff;
  line-height: 15px;
  margin-top: 9px;
}
.header-time {
  float: right;
  color: #fff;
  line-height: 13px;
  margin-top: 5px;
}
</style>