<template>
<el-main>
  <el-form  size="mini" label-width="80px">
<el-row>
  <el-col :span="5">
    <el-form-item label="车型">
    <el-input  placeholder="请输入车型"></el-input>
    </el-form-item>
  </el-col>
  <el-button class="searchBtn" type="primary" size="mini" icon="el-icon-search" >查询</el-button>
  <el-button type="primary" size="mini" icon="el-icon-refresh">重置</el-button>
</el-row>
</el-form>
<!--表格
    data:数据绑定
    height：只要在el-table元素中定义了height属性，即可实现固定表头的表格，而不需要额外的代码。
    border：表格边框
    prop：字段属性需要跟表格的数据对应
    -->
    <el-table 
      border style="width: 100%">
      <el-table-column prop="id" label="序号"></el-table-column>
        <el-table-column prop="carNo" label="车型"></el-table-column>
      <el-table-column prop="carName" label="汽车名称"></el-table-column>
      <el-table-column prop="carColor" label="汽车颜色"></el-table-column>
      <el-table-column prop="PricePerDay" label="日租价格"></el-table-column>
      <el-table-column prop="PricePerMounth" label="月租价格"></el-table-column>
      <el-table-column prop="BuyDay" label="购入日期"></el-table-column>
      <el-table-column prop="inventory" label="库存"></el-table-column>
</el-table>
     <!-- 分页组件-->
    <el-pagination
      
      layout="total, prev, pager, next"
    
      align="center">
    </el-pagination>
</el-main>
</template>
<script>
import axios from "axios"
    export default {
    }
</script>
<style lang="scss" scoped>
.el-main{
    padding-top: 5px !important;
}
.aa{
    width: 300px;
    height: 28px;
    margin-bottom: 35px;
}
.searchBtn{
    margin-left: 30px;
}
</style>
