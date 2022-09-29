<template>
  <el-main>
    <el-form size="mini" label-width="80px">
      <el-row>
        <el-col :span="5">
          <el-form-item label="车型">
            <el-input placeholder="请输入车型" v-model="type"></el-input>
          </el-form-item>
        </el-col>
        <el-button
          class="searchBtn"
          type="primary"
          size="mini"
          icon="el-icon-search"
          @click="search"
          >查询</el-button
        >
        <el-button type="primary" size="mini" icon="el-icon-refresh" @click="reset"
          >重置</el-button
        >
      </el-row>
    </el-form>
    <!--表格
    data:数据绑定
    height：只要在el-table元素中定义了height属性，即可实现固定表头的表格，而不需要额外的代码。
    border：表格边框
    prop：字段属性需要跟表格的数据对应
    -->
    <el-table border :data="carInfoList" style="width: 100%">
      <el-table-column prop="id" label="序号"></el-table-column>
      <el-table-column prop="type" label="车型"></el-table-column>
      <el-table-column prop="licenseNumber" label="车牌号"></el-table-column>
      <el-table-column prop="rent" label="租售价格"></el-table-column>
    </el-table>
    <!-- 分页器 -->
    <div class="block" style="margin-left: 40%">
      <span class="demonstration"></span>
      <el-pagination
        background
        layout="prev, pager, next"
        :total="totalCount"
        :page-size="pageSize"
        :current-page="currentPage"
        @current-change="handleCurrentChange"
      >
      </el-pagination>
    </div>
  </el-main>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "benz",
  data() {
    return {
      pageSize: 5,
      currentPage: 1,
      type: "",
    };
  },
  mounted() {
    let data = {
      pageSize: this.pageSize,
      pageNum: this.currentPage,
    };
    this.$store.dispatch("getAllCarInfo");
    this.$store.dispatch("getCarInfo", data);
  },
  methods: {
    handleCurrentChange(currentPage) {
      let data = {
        type: this.type,
        pageSize: 5,
        pageNum: currentPage,
      };
      //console.log(data)
      this.$store.dispatch("getCarInfo", data);
    },
    //模糊查找车型
    search(){
      //alert(this.totalCount)
      let type=this.type;
      let data={
        type
      };
      console.log(data)
      this.$store.dispatch("getAllCarInfo",data);
      this.handleCurrentChange(1)
    },
    reset(){
        this.type=""
    }
  },
  computed: {
    ...mapState({
      totalCount: (state) => state.car.allCarInfo.length,
      carInfoList: (state) => state.car.carInfo,
    }),
  },
};
</script>
<style lang="scss" scoped>
.el-main {
  padding-top: 5px !important;
}
.aa {
  width: 300px;
  height: 28px;
  margin-bottom: 35px;
}
.searchBtn {
  margin-left: 30px;
}
</style>
