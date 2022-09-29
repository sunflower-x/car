<template>
    <div>
        <el-card>
            <el-row :gutter="25">
                <el-col :span="10">
                    <!-- 搜索添加 -->
                    <el-input placeholder="请输入要搜索的员工姓名" v-model="queryInfo.query" clearable @clear="search">
                        <el-button icon="el-icon-search" slot="append" @click="search">搜索</el-button>
                    </el-input>
                </el-col>
                <el-col :span="4">
                    <el-button type="primary" @click="addDialogVisible = true">添加员工信息</el-button>
                </el-col>
            </el-row>
            <el-table :data="manlist" boder stripe>
                <el-table-column label="编号" prop="id"></el-table-column>
                <el-table-column label="员工姓名" prop="name"></el-table-column>
                <el-table-column label="电话" prop="phone"></el-table-column>
                <el-table-column label="工资" prop="money"></el-table-column>
                <el-table-column label="地址" prop="Address"></el-table-column>
                <el-table-column label="邮箱" prop="Email"></el-table-column>
                <el-table-column label="操作">
                    <template slot-scope="scope">
                        <!-- 修改 -->
                        <el-button type="primary" icon="el-icon-edit" size="mini" @click="showEditDialog(scope.row.id)"></el-button>
                    </template>
                </el-table-column>
            </el-table>
            <div>
                <el-pagination
                        @size-change="handleSizeChange"
                        @current-change="handleCurrentChange"
                        :current-page="queryInfo.pageNum"
                        :page-sizes="[ 2, 5,10, 100]"
                        :page-size="queryInfo.pageSize"
                        layout="total, sizes, prev, pager, next, jumper"
                ></el-pagination>
            </div>
        </el-card>
        <el-dialog title="添加员工信息" :visible.sync="addDialogVisible" width="50%" @close="addDialogClosed">
            <!-- 内容主体区域 -->
            <el-form :model="addForm" :rules="addFormRules" ref="addFormRef" label-width="80px">
                <!-- 用户名 -->
                <el-form-item label="员工姓名" prop="name">
                    <el-input v-model="addForm.name"></el-input>
                </el-form-item>
                <el-form-item label="电话" prop="phone">
                    <el-input v-model="addForm.phone"></el-input>
                </el-form-item>
                <el-form-item label="工资" prop="money">
                    <el-input v-model="addForm.money"></el-input>
                </el-form-item>
                <el-form-item label="地址" prop="Address">
                    <el-input v-model="addForm.Address"></el-input>
                </el-form-item>
                <el-form-item label="邮箱" prop="Email">
                    <el-input v-model="addForm.Email"></el-input>
                </el-form-item>
            </el-form>
            <!-- 内容底部区域 -->
            <span slot="footer" class="dialog-footer">
        <el-button @click="addDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="add">确 定</el-button>
      </span>
        </el-dialog>
        <!-- 修改用户对话框 -->
        <el-dialog title="修改员工信息" :visible.sync="editDialogVisible" width="50%" @colse="editDialogClosed">
            <el-form :model="editForm" :rules="editFormRules" ref="editFormRef" label-width="70px">
                <el-form-item label="编号" prop="id">
                    <el-input v-model="editForm.id" disabled></el-input>
                </el-form-item>
                <el-form-item label="员工信息" prop="name">
                    <el-input v-model="editForm.name"></el-input>
                </el-form-item>
                <el-form-item label="电话" prop="phone">
                    <el-input v-model="editForm.phone"></el-input>
                </el-form-item>
                <el-form-item label="工资" prop="money">
                    <el-input v-model="editForm.money"></el-input>
                </el-form-item>
                <el-form-item label="地址" prop="Address">
                    <el-input v-model="editForm.Address"></el-input>
                </el-form-item>
                <el-form-item label="邮箱" prop="Email">
                    <el-input v-model="editForm.Email"></el-input>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
        <el-button @click="editDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="editUserInfo">确 定</el-button>
      </span>
        </el-dialog>
    </div>
</template>
.
<script>
    export default {

    }
</script>

<style scoped>
    .el-breadcrumb {
        margin-bottom: 20px;
        font-size: 20px;
    }
</style>
