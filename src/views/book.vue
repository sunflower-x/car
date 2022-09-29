<template>
  <div>
    <el-form ref="sizeFormRef" label-width="80px" size="mini">
      <el-form-item label="汽车信息" prop="carname" style="margin-top: 10px">
        <el-input></el-input>
      </el-form-item>
      <el-form-item label="车主信息" prop="hostname" style="margin-top: -550px">
        <el-input></el-input>
      </el-form-item>
      <el-form-item label="车主电话" prop="phone" style="margin-top: -480px">
        <el-input></el-input>
      </el-form-item>
      <el-form-item label="预约时间" style="margin-top: -420px">
        <el-col :span="11">
          <el-date-picker
            type="date"
            placeholder="选择日期"
            format="yyyy 年 MM 月 dd 日"
            value-format="yyyy-MM-dd"
          >
          </el-date-picker>
        </el-col>
        <el-col class="line" :span="2"></el-col>
      </el-form-item>
      <el-form-item label="维修服务" style="margin-top: -360px">
        <el-checkbox-group v-model="sizeForm.type">
          <el-checkbox-button label="日常护理" name="type"></el-checkbox-button>
          <el-checkbox-button label="翻新" name="type"></el-checkbox-button>
          <el-checkbox-button label="大修" name="type"></el-checkbox-button>
        </el-checkbox-group>
      </el-form-item>

      <el-form-item size="large" style="margin-top: -290px">
        <el-button type="primary">立即预约</el-button>
        <el-button>重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sizeForm: {
        type: [],
      },
    };
  },
};
</script>

<style scoped>
.el-breadcrumb {
  height: 50px;
}
.el-form {
  width: 50%;
  margin: auto;
}
</style>