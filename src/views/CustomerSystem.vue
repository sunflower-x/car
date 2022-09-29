<template>
  <div style="width: 88%; margin-top: 10px">
    <el-form :inline="true" class="demo-form-inline">
      <el-form-item>
        <el-select placeholder="查询项" v-model="selectCheck">
          <el-option label="姓名" value="name"></el-option>
          <el-option label="证件号" value="cardId"></el-option>
          <el-option label="联系方式" value="phone"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-input
          placeholder="请输入查询内容"
          v-model="checkMessage"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="search">查询</el-button>
        <el-button type="info" @click="clear">清空</el-button>
        <el-button type="primary" @click="userAddForm = true">添加</el-button>
      </el-form-item>
    </el-form>

    <el-table fit :data="customerList" style="width: 80%; margin-left: 20px">
      <el-table-column
        prop="id"
        label="编号"
        width="100"
        v-if="false"
      ></el-table-column>
      <el-table-column prop="name" label="姓名" width="120"></el-table-column>
      <el-table-column
        prop="cardId"
        label="证件号"
        width="200"
      ></el-table-column>
      <el-table-column prop="gender" label="性别" width="100"></el-table-column>
      <el-table-column prop="phone" label="联系方式" width="180">
      </el-table-column>
      <el-table-column
        prop="carNumber"
        label="汽车编号"
        width="120"
      ></el-table-column>
      <el-table-column label="操作" width="200">
        <template slot-scope="scope">
          <el-button type="primary" size="small" @click="openEdit(scope.row)"
            >编辑</el-button
          >
          <el-button
            type="danger"
            size="small"
            @click="handleDelete(scope.row.id)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>

    <el-dialog
      title="编辑用户信息"
      :visible="userEditForm"
      :modal-append-to-body="false"
      @close="closeDialog"
    >
      <el-form ref="editsForm" label-width="80px">
        <el-form-item label="姓名">
          <el-input v-model="name"></el-input>
        </el-form-item>
        <el-form-item label="性别">
          <el-input v-model="gender"></el-input>
        </el-form-item>
        <el-form-item label="证件号">
          <el-input v-model="cardId"></el-input>
        </el-form-item>
        <el-form-item label="电话">
          <el-input v-model="phone"></el-input>
        </el-form-item>
        <el-form-item label="汽车编号">
          <el-input v-model="carNumber"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleEdit">确定</el-button>
          <el-button @click="userEditForm = false">取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>

    <el-dialog
      title="添加用户信息"
      :visible="userAddForm"
      :modal-append-to-body="false"
      @close="closeDialog"
    >
      <el-form ref="addForm" :model="addForm" label-width="80px">
        <el-form-item label="姓名">
          <el-input v-model="addForm.name"></el-input>
        </el-form-item>
        <el-form-item label="性别">
          <el-input v-model="addForm.gender"></el-input>
        </el-form-item>
        <el-form-item label="证件号">
          <el-input v-model="addForm.cardId"></el-input>
        </el-form-item>
        <el-form-item label="电话">
          <el-input v-model="addForm.phone"></el-input>
        </el-form-item>
        <el-form-item label="汽车编号">
          <el-input v-model="addForm.carNumber"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="handleAdd">确定</el-button>
          <el-button @click="userAddForm = false">取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>

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
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "Administrator",
  data() {
    return {
      selectCheck: "",
      checkMessage: "",
      id: "",
      name: "",
      gender: "",
      cardId: "",
      phone: "",
      carNumber: "",
      currentPage: 1,
      pageSize: 5,
      userAddForm: false,
      userEditForm: false,
      addForm: {
        name: "",
        gender: "",
        cardId: "",
        phone: "",
        carNumber: "",
      },
    };
  },
  mounted() {
    this.getData();
    this.handleCurrentChange(1);
  },
  methods: {
    //删除数据
    async handleDelete(id) {
      try {
        let result = await this.$store.dispatch("userDelete", { id });
        if (result == "ok") {
          alert("删除成功");
        }
        this.getData();
        this.handleCurrentChange(this.currentPage);
      } catch (error) {
        alert(error.message);
      }
    },
    //获取所有数据
    getData() {
      let name = "";
      let phone = "";
      let cardId = "";
      if (this.selectCheck == "name") {
        name = this.checkMessage;
      } else if (this.selectCheck == "phone") {
        phone = this.checkMessage;
      } else if (this.selectCheck == "cardId") {
        cardId = this.checkMessage;
      }
      let data={
        name,
        phone,
        cardId
      }
      console.log(data)
      this.$store.dispatch("getAllCustomerInfo",data);
      this.$router.push("/user");
    },
    //打开编辑顾客面板
    openEdit(customer) {
      (this.userEditForm = true),
        (this.id = customer.id),
        (this.name = customer.name),
        (this.gender = customer.gender),
        (this.cardId = customer.cardId),
        (this.phone = customer.phone),
        (this.email = customer.email);
      this.carNumber = customer.carNumber;
    },
    //关闭添加和修改的面板
    closeDialog() {
      this.userEditForm = false;
      this.userAddForm = false;
    },
    //添加顾客
    async handleAdd() {
      let customer = {
        name: this.addForm.name,
        gender: this.addForm.gender,
        cardId: this.addForm.cardId,
        phone: this.addForm.phone,
        carNumber: this.addForm.carNumber,
      };
      //console.log(customer);
      try {
        let result = await this.$store.dispatch("addCustomer", customer);
        if (result == "ok") {
          alert("添加成功");
          (this.addForm.name = ""),
            (this.addForm.gender = ""),
            (this.addForm.cardId = ""),
            (this.addForm.phone = ""),
            (this.addForm.carNumber = ""),
            (this.userAddForm = false);
          this.$router.push("/user");
          this.getData();
          this.handleCurrentChange(this.currentPage);
        }
      } catch (error) {
        alert(error.message);
      }
    },
    //修改顾客
    async handleEdit() {
      let customer = {
        id: this.id,
        name: this.name,
        gender: this.gender,
        cardId: this.cardId,
        phone: this.phone,
        carNumber: this.carNumber,
      };
      try {
        let result = await this.$store.dispatch("updateCustomer", customer);
        if (result == "ok") {
          alert("修改成功");
          this.userEditForm = false;
          this.$router.push("/user");
          this.getData();
          this.handleCurrentChange(this.currentPage);
        }
      } catch (error) {
        alert(error.message);
      }
    },
    handleCurrentChange(currentPage) {
      this.currentPage = currentPage;
      // let pageSize = this.pageSize;
      // let pageNum = this.currentPage;
      //let data = this.selectCheck + ":" + this.checkMessage;
      let name = "";
      let phone = "";
      let cardId = "";
      if (this.selectCheck == "name") {
        name = this.checkMessage;
      } else if (this.selectCheck == "phone") {
        phone = this.checkMessage;
      } else if (this.selectCheck == "cardId") {
        cardId = this.checkMessage;
      }

      let data = {
        pageSize: this.pageSize,
        pageNum: this.currentPage,
        name,
        phone,
        cardId,
      };
      //console.log(data);
      this.$store.dispatch("getCustomerForPage", data);
    },
    //模糊查询
    search() {
      //alert(this.selectCheck);
      //alert(this.totalCount)
      
      let name = "";
      let phone = "";
      let cardId = "";
      if (this.selectCheck == "name") {
        name = this.checkMessage;
      } else if (this.selectCheck == "phone") {
        phone = this.checkMessage;
      } else if (this.selectCheck == "cardId") {
        cardId = this.checkMessage;
      }
      let data1 = {
        pageSize: this.pageSize,
        pageNum: this.currentPage,
        name,
        phone,
        cardId,
      };
      this.getData()
      this.$store.dispatch("getCustomerForPage", data1);
      //console.log(data);
    },
    //清空模糊查询
    clear(){
      this.selectCheck="",
      this.checkMessage=""
    }

  },
  computed: {
    ...mapState({
      customerList: (state) => state.customer.customerForPageList,
      totalCount: (state) => state.customer.allCustomerInfo.length,
    }),
  },
};
</script>
<style scoped>
</style>