<template>
  <div>
    <el-form ref="searchform" :inline="true" :model="searchmap" class="elform">
      <el-form-item style="width:150px">
        <el-input v-model="searchmap.number" placeholder="会员卡号"></el-input>
      </el-form-item>
      <el-form-item style="width:150px">
        <el-input v-model="searchmap.name" placeholder="会员姓名"></el-input>
      </el-form-item>
      <el-form-item>
        <el-select v-model="searchmap.sex" placeholder="性别" style="width:80px" clearable>
          <el-option label="男" value="男"></el-option>
          <el-option label="女" value="女"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item style="width:150px">
        <el-input v-model="searchmap.phone" placeholder="手机号"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="debounce(selectmember,600,false)()">查询</el-button>
        <el-button type="primary" @click="handleadd">添加</el-button>
        <el-button type="primary" @click="getData">重置</el-button>
      </el-form-item>
    </el-form>
    <el-table
      :data="memberlist.slice((currentpage - 1) * pagesize, currentpage*pagesize)"
      stripe
      :style="{'width': thewidth}"
      border
      height="475"
      :cell-style="{'text-align':'center'}"
      :header-cell-style="{'text-align':'center'}"
    >
      <el-table-column type="index" label="序号" width="50"></el-table-column>
      <el-table-column prop="number" label="会员卡号" width="150"></el-table-column>
      <el-table-column prop="name" label="会员姓名" width="100"></el-table-column>
      <el-table-column prop="sex" label="性别" width="50"></el-table-column>
      <el-table-column prop="birthday" label="生日" width="100"></el-table-column>
      <el-table-column prop="phone" label="手机号" width="130"></el-table-column>
      <el-table-column prop="rentalcount" label="租赁次数" width="80"></el-table-column>
      <el-table-column prop="credit" label="信用积分" width="80"></el-table-column>
      <el-table-column prop="address" label="地址" width="310"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div :style="{'margin-left': thepage}">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentpage"
        :page-sizes="[10, 20, 30]"
        :page-size="pagesize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      ></el-pagination>
    </div>

    <el-dialog :title="title" :visible.sync="dialogFormVisible" width="500px" height="200px">
      <el-form
        :rules="rules"
        :model="addpojo"
        ref="pojoform"
        label-width="100px"
        label-position="right"
        style="width:400px"
      >
        <el-form-item label="会员卡号" prop="number">
          <el-input
            v-model="addpojo.number"
            autocomplete="off"
            onkeyup="value=value.replace(/[^\d]/g,'')"
            maxlength="9"
            show-word-limit
          ></el-input>
        </el-form-item>
        <el-form-item label="会员姓名" prop="name">
          <el-input v-model="addpojo.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="性别" prop="sex">
          <el-select v-model="addpojo.sex" placeholder="请选择性别">
            <el-option label="男" value="男"></el-option>
            <el-option label="女" value="女"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="生日" prop="birthday">
          <el-date-picker
            v-model="addpojo.birthday"
            type="date"
            placeholder="选择日期"
            value-format="yyyy-MM-dd"
          ></el-date-picker>
        </el-form-item>
        <el-form-item label="手机号" prop="phone">
          <el-input
            v-model="addpojo.phone"
            autocomplete="off"
            maxlength="11"
            show-word-limit
            onkeyup="value=value.replace(/[^\d]/g,'')"
          ></el-input>
        </el-form-item>
        <el-form-item label="租赁次数" prop="rentalcount">
          <el-input v-model="addpojo.rentalcount" autocomplete="off" :disabled="inputdisable" onkeyup="value=value.replace(/[^\d]/g,'')"></el-input>
        </el-form-item>
        <el-form-item label="信用积分" prop="credit">
          <el-input v-model="addpojo.credit" autocomplete="off" :disabled="inputdisable" onkeyup="value=value.replace(/[^\d]/g,'')"></el-input>
        </el-form-item>
        <el-form-item label="地址" prop="address">
          <el-input v-model="addpojo.address" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="submitForm('pojoform')">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>

export default {
 
};
</script>

<style scoped>
.el-table {
  margin-top: 1px;
}
.elform {
  margin-top: 20px;
}
.elpage {
  margin-left: 600px;
}
.el-dialog__wrapper {
  top: -70px;
}
</style>