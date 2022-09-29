<template>
  <div id="main">
    <el-card shadow="always">
      <el-row :gutter="20">
        <el-col :span="8">
          <el-input
            placeholder="请输入查找内容"
            v-model="input"
            clearable>
          </el-input>
        </el-col>
        <el-col :span="4"><el-button type="primary" @click="msgTo('Addstore')">添加门店信息</el-button></el-col>
      </el-row>
        <el-table
        :data="input=='' ? tableData : tableData1 "
          border
          :header-cell-style="{'text-align':'center'}"
          :cell-style="{'text-align':'center'}"
          style="width: 100%">
          <el-table-column type="index" label="序号"></el-table-column>
          <el-table-column
            prop="shop"
            label="店名"
            width="100">
          </el-table-column>
          <el-table-column
            prop="name"
            label="店长"
            width="60">
          </el-table-column>
          <el-table-column
            prop="num"
            label="店员数"
            width="70">
          </el-table-column>
          <el-table-column
            prop="car"
            label="车辆数"
            width="70">
          </el-table-column>
          <el-table-column
            prop="money"
            label="利润(万）"
            width="80">
          </el-table-column>
          <el-table-column
            prop="time"
            label="营业时间"
            width="100">
          </el-table-column>
          <el-table-column
            prop="tel"
            label="电话"
            width="100">
          </el-table-column>
          <el-table-column
            prop="address"
            label="地址">
          </el-table-column>
          <el-table-column
            label="操作"
            fixed="right"
            width="180">
            <template slot-scope="scope">
              <el-button
                icon="el-icon-edit"
                type="primary"
                size="mini"
                @click="msgTo('Addstore',scope.$index)">编辑</el-button>
              <el-button
                icon="el-icon-delete"
                size="mini"
                type="danger"
                @click="Delete(scope.$index, scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
    </el-card>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.el-table{
  margin-top: 15px;
  font-size: 12px;
}

.el-breadcrumb{
  margin-bottom: 15px;
}

.el-row{
  margin-bottom: 30px;
}
</style>
