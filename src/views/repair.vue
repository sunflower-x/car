<template>
  <div>
    <el-card>
      <el-row :gutter="25">
        <el-col :span="10">
          <!-- 搜索添加 -->
          <el-input placeholder="请输入要搜索的车主名字"  clearable >
            <el-button icon="el-icon-search" slot="append" >搜索</el-button>

            <el-button icon="el-icon-error" type="danger" slot="append" >取消搜索</el-button>
          </el-input>
        </el-col>
        <el-col :span="8">
          <el-button type="primary" >添加维修信息</el-button>
          <el-button type="primary" >查看预约信息</el-button>
        </el-col>
      </el-row>
      <el-table  boder stripe>
        <el-table-column label="订单号" prop="id"></el-table-column>
        <el-table-column label="汽车信息" prop="carname"></el-table-column>
        <el-table-column label="车主名字" prop="hostname"></el-table-column>
        <el-table-column label="车主电话" prop="phone"></el-table-column>
        <el-table-column label="维修费用" prop="money"></el-table-column>
        <el-table-column label="是否维修完成" prop="state">
          <template >
            <!--数据模板-->
            <el-switch  ></el-switch>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template >
            <!-- 修改 -->
            <el-button type="primary" icon="el-icon-edit" size="mini" ></el-button>
          </template>
        </el-table-column>
      </el-table>
      <div>
        <el-pagination
          
          layout="total, sizes, prev, pager, next, jumper"
        ></el-pagination>
      </div>
    </el-card>
    <el-dialog title="预约信息" >
      <el-table   boder stripe>
        <el-table-column prop="carname" label="车辆信息"></el-table-column>
        <el-table-column prop="hostname" label="车主信息"></el-table-column>
        <el-table-column prop="phone" label="车主号码"></el-table-column>
        <el-table-column prop="date" label="预约日期"></el-table-column>
        <el-table-column prop="type" label="预约服务"></el-table-column>
        <el-table-column prop="type" label="操作"
          ><el-button type="success" title="移到维修列表" icon="el-icon-check" circle ></el-button
        ></el-table-column>
      </el-table>
    </el-dialog>
    <el-dialog title="添加维修信息"  width="50%">
      <!-- 内容主体区域 -->
      <el-form   ref="addFormRef" label-width="140px">
        <!-- 用户名 -->

        <el-form-item label="汽车信息" prop="carname">
          <el-input ></el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item label="车主名字" prop="hostname">
          <el-input ></el-input>
        </el-form-item>
        <!-- 邮箱 -->
        <el-form-item label="车主电话" prop="phone">
          <el-input ></el-input>
        </el-form-item>
        <el-form-item label="维修费用" prop="money">
          <el-input ></el-input>
        </el-form-item>
        <el-form-item label="是否完成维修" prop="state">
          <el-input ></el-input>
        </el-form-item>
      </el-form>
      <!-- 内容底部区域 -->
      <span slot="footer" class="dialog-footer">
        <el-button >取 消</el-button>
        <el-button type="primary" >确 定</el-button>
      </span>
    </el-dialog>
    <!-- 修改用户对话框 -->
    <el-dialog title="修改维修信息"  width="50%" >
      <el-form   ref="editFormRef" label-width="90px">
        <!-- 用户名 -->
        <el-form-item label="维修单号" prop="id">
          <el-input  disabled></el-input>
        </el-form-item>
        <el-form-item label="汽车信息" prop="carname">
          <el-input ></el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item label="车主信息" prop="hostname">
          <el-input ></el-input>
        </el-form-item>
        <el-form-item label="车主电话" prop="phone">
          <el-input ></el-input>
        </el-form-item>
        <!-- 邮箱 -->
        <el-form-item label="维修费用" prop="money">
          <el-input ></el-input>
        </el-form-item>
        
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button >取 消</el-button>
        <el-button type="primary" >确 定(默认把维修状态修改成“未维修完成”)</el-button>
      </span>
    </el-dialog>
  </div>
</template>
.
<script>
export default {

}
</script>

<style  scoped>
.el-breadcrumb {
   height: 50px;
}
</style>
