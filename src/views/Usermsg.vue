<template>
    <div style="text-align: center">
        <el-form ref="form"
                 style="width: 400px;margin: 0 auto"
                 :rules="rules" :model="form"
                 label-width="80px" >
            <el-form-item label="用户名"  style="margin-top:20px">
                <el-input v-model="form.username" disabled></el-input>
            </el-form-item>
            <el-form-item label="姓名" prop="name" style="margin-top:-550px">
                <el-input v-model="form.name" ></el-input>
            </el-form-item>
            <el-form-item label="性别" prop="sex" style="margin-top:-490px">
                <el-radio-group v-model="form.sex">
                    <el-radio label="男" value="man"></el-radio>
                    <el-radio label="女" value="woman"></el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="联系方式" prop="phone" style="margin-top:-430px">
                <el-input v-model="form.phone"></el-input>
            </el-form-item>
            <el-form-item label="邮箱地址" prop="email" style="margin-top:-370px">
                <el-input v-model="form.email"></el-input>
            </el-form-item>
            <el-form-item label="密码" style="margin-top:-310px">
                <el-input v-model="form.password" show-password></el-input>
            </el-form-item>
            <el-form-item style="margin-top:-250px">
                <el-button type="primary" @click="onSubmit">修改</el-button>
                <el-button @click="$router.push('/')">取消</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default {
        name: "Usermsg",
    }
</script>

<style scoped>

</style>