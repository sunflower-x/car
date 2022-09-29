<template>
  <el-form ref="ruleForm" label-width="100px" class="demo-ruleForm">
    <el-form-item
      label="汽车名称"
      prop="type"
      style="margin-left: 30%; margin-top: 50px"
    >
      <el-input v-model="type" style="width: 221.4px"></el-input>
    </el-form-item>
    <el-form-item
      label="日租价格"
      prop="rent"
      style="margin-left: 30%; margin-top: -500px"
    >
      <el-input v-model="rent" style="width: 221.4px"></el-input>
    </el-form-item>
    <el-form-item
      label="车牌号码"
      prop="carNumber"
      style="margin-left: 30%; margin-top: -420px"
    >
      <el-input v-model="carNumber" style="width: 221.4px"></el-input>
    </el-form-item>

    <el-form-item
      label="身份编号"
      prop="masterCard"
      style="margin-left: 30%; margin-top: -340px"
    >
      <el-input v-model="masterCard" style="width: 221.4px"></el-input>
    </el-form-item>

    <el-form-item style="margin-left: 30%; margin-top: -150px">
      <el-button type="primary" @click="addCarInfo">立即创建</el-button>
      <el-button @click="reset">重置</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  data() {
    return {
      type: "",
      carNumber: "",
      rent: "",
      masterCard: "",
    };
  },
  methods: {
    addCarInfo() {
      let car = {
        type: this.type,
        licenseNumber: this.carNumber,
        rent: this.rent,
        masterCard: this.masterCard,
      };
      this.$store.dispatch("addCarInfo", car);
      alert("添加成功")
      this.carNumber="",
      this.type="",
      this.rent="",
      this.masterCard=""
    },
    reset(){
      this.type="",
      this.carNumber="",
      this.rent="",
      this.masterCard=""
    },
  },
};
</script>

<style scoped>
</style>