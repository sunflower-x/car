<template>
  <div class="AddDate">
    <el-card shadow="always">
      <el-form :model="AddForm" :rules="AddFormRules" ref="AddForm" label-width="100px" class="demo-AddForm" >
        <el-form-item label="店名" prop="shop">
          <el-input v-model="AddForm.shop"></el-input>
        </el-form-item>
        <el-form-item label="店长" prop="name">
          <el-input v-model="AddForm.name"></el-input>
        </el-form-item>
        <el-form-item label="店员数" prop="num">
          <el-input v-model="AddForm.num"></el-input>
        </el-form-item>
        <el-form-item label="车辆数" prop="car">
          <el-input v-model="AddForm.car"></el-input>
        </el-form-item>
        <el-form-item label="利润（万）" prop="money">
          <el-input v-model="AddForm.money"></el-input>
        </el-form-item>
        <el-form-item label="营业时间" prop="time">
          <el-input v-model="AddForm.time"></el-input>
        </el-form-item>
        <el-form-item label="电话" prop="tel">
          <el-input v-model="AddForm.tel"></el-input>
        </el-form-item>
        <el-form-item label="地址" prop="address">
          <el-input v-model="AddForm.address"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" v-show="AddForm.isAdd" @click="Add('AddForm')">确 定</el-button>
          <el-button @click="resetForm('AddForm')" v-show="AddForm.isAdd">重 置</el-button>
          <el-button type="primary" v-show="AddForm.isShow" @click="Edit">保 存</el-button>
          <el-button @click="back" >返回</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
</style>
