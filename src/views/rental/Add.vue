<template>
    <el-form  label-width="80px">
        <div class="render">
          <h3>租客信息</h3>
          <el-form-item label="姓名" prop="name">
            <el-input v-model="indent.name"></el-input>
          </el-form-item>
          <el-form-item label="联系电话" prop="phone">
            <el-input v-model="indent.phone" oninput="value=value.replace(/[^\d]/g, '')"></el-input>
          </el-form-item>
          <el-form-item label="身份证号" prop="cardId">
            <el-input v-model="indent.cardId"></el-input>
          </el-form-item>
        </div>
        <div class="car">
          <h3>选择车型</h3>
          <el-button  @click="opendrawer">进入车库</el-button>
          <el-drawer
            :visible.sync="drawer"
            size='50%'
            direction="ttb"
            :with-header="false">
            <span>{{location+'车库'}}</span>
            <el-table
              :data="carport"
              style="width:60%">
              <el-table-column
                prop="type"
                label="车型">
              </el-table-column>
              <el-table-column
                prop="num"
                label="车牌">
              </el-table-column>
              <el-table-column
                prop="rent"
                label="租金">
              </el-table-column>
              <el-table-column
                prop="state"
                label="状态">
              </el-table-column>
              <el-table-column
                fixed="right"
                label="操作">
                <template >
                  <el-button  size="small">选择</el-button>
                  <el-button  size="small">汽车详情</el-button>
                </template>
              </el-table-column>
            </el-table>
          </el-drawer>
          <el-date-picker
            v-model="indent.date[1]"
            type="date"
            placeholder="租期"
            value-format="yyyy/M/d"
            :clearable="false"
            >
          </el-date-picker>
        </div>
        <div class="indent">
          <h3>订单信息</h3>
          <span>经办人: {{this.indent.user}}</span>
            <span><i class="el-icon-s-custom"></i>{{indent.name}}</span>
            <span><i class="el-icon-mobile-phone"></i>{{indent.phone}}</span>
            <span><i class="el-icon-location-outline"></i>{{indent.cardId}}</span>
            <span><i class="el-icon-truck"></i>{{indent.type}}</span>
            <span><i class="el-icon-postcard"></i>{{indent.num}}</span>
            <span><i class="el-icon-date"></i>{{indent.date[0]+'-'+indent.date[1]}}</span>
            <span><i class="el-icon-coin"></i>{{indent.sumrent+'元'}}({{indent.rent+'元/天'}})</span>
          <div class="btn">
            <el-button round size="small" @click="submit()">提交</el-button>
            <el-button round size="small">重置</el-button>
          </div>
        </div>
    </el-form>
</template>

<script>
export default {
  data() {
      return {
        //订单的信息
        indent:{
          //经办人
          user:this.$parent.user,
          //租客姓名
          name:"",
          //租客号码
          phone:"",
          //租客居住地址
          cardId:"",
          //车型
          type:"",
          //车牌
          num:"",
          //租期，数组存放两个日期，第一个是当前日期，第二个是租赁结束日期
          date:[],
          //每日租金
          rent:0,
          //总租金
          sumrent:0,
          //重置函数
          reset:function(){
            this.name="";
            this.phone="";
            this.cardId="";
            this.type="";
            this.num="";
            //只重置选择的日期，不重置当前日期
            this.date[1]="";
            this.rent=0;
            this.sumrent=0;
          }
        },
        //车库抽屉，默认关闭
        drawer:false,
        //车库汽车的简略信息，模拟数据
        location:"",
        carport:[],
        //广州车库
        gz_carport:[
          {
            type:"奥迪A8",
            num:"粤A·88888",
            rent:"200元/天",
            state:"已出租",
          },
          {
            type:"宝马5系",
            num:"粤A·8S788",
            rent:"180元/天",
            state:"空闲中",
          },
          {
            type:"奥迪A5",
            num:"粤A·87D58",
            rent:"130元/天",
            state:"已出租",
          },
          {
            type:"雷克萨斯LS",
            num:"粤A·45A88",
            rent:"150元/天",
            state:"空闲中",
          },
        ],
        //深圳车库
        sz_carport:[
          {
            type:"奥迪A8",
            num:"粤B·88A88",
            rent:"200元/天",
            state:"已出租",
          },
          {
            type:"奥迪Q7",
            num:"粤B·8S7F8",
            rent:"180元/天",
            state:"空闲中",
          },
          {
            type:"雷克萨斯ES",
            num:"粤B·R7D58",
            rent:"130元/天",
            state:"已出租",
          },
          {
            type:"奔驰GLE",
            num:"粤B·45AH8",
            rent:"150元/天",
            state:"空闲中",
          },
        ],
        //东莞车库
        dg_carport:[
          {
            type:"奥迪A8",
            num:"粤S·8S8H8",
            rent:"200元/天",
            state:"已出租",
          },
          {
            type:"奥迪Q7",
            num:"粤S·8S745",
            rent:"180元/天",
            state:"空闲中",
          },
          {
            type:"亚洲龙",
            num:"粤S·57D58",
            rent:"130元/天",
            state:"已出租",
          },
          {
            type:"皇冠",
            num:"粤S·49A88",
            rent:"150元/天",
            state:"空闲中",
          },
        ],
        //肇庆车库
        zq_carport:[
          {
            type:"奥迪A8",
            num:"粤H·39988",
            rent:"200元/天",
            state:"已出租",
          },
          {
            type:"奥迪Q7",
            num:"粤H·6S788",
            rent:"180元/天",
            state:"空闲中",
          },
          {
            type:"雅阁",
            num:"粤H·77D58",
            rent:"130元/天",
            state:"已出租",
          },
          {
            type:"思域",
            num:"粤H·55A88",
            rent:"150元/天",
            state:"空闲中",
          },
        ],
        //租客信息输入规则
        rules: {
          name: [
            { required: true, message: '请输入租客姓名', trigger: 'blur' },
            { min: 2, max: 5, message: '长度在 2 到 5 个字符', trigger: 'blur' }
          ],
          phone: [
            { required: true, message: '请输入租客联系电话', trigger: 'blur'},
            { min: 11, max: 11, message: '请输入11位手机号码', trigger: 'blur' }
          ],
          cardId: [
            { required: true, message: '请输入租客身份号码', trigger: 'blur' },
          ]
        }
      };
    },
  methods: {
    //打开车库抽屉
      opendrawer(){
        // if(this.$parent.location=="选择门店"){
        //   this.$message({
        //     message: '请选择门店!',
        //     type: 'error',
        //   });
        //   return;
        // }
        // this.location=this.$parent.location;
        // if(this.location=="广州"){
        //   this.carport=this.gz_carport;
        // }else if(this.location=="深圳"){
        //   this.carport=this.sz_carport;
        // }else if(this.location=="东莞"){
        //   this.carport=this.dg_carport;
        // }else if(this.location=="肇庆"){
        //   this.carport=this.zq_carport;
        // }
        //alert(132)
        this.drawer = true;
      },
      submit(data){
        console.log(data)
      }
  },

};
</script>

<style lang="less" scoped>
.el-form {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #606266;

  .render{
    width: 30%;
    height: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    border-radius: 10px;
    overflow: hidden;
    background-color: white;

    h3{
      width: 100%;
      height: 25px;
      font-size: 15px;
      font-weight: normal;
      margin: 0;
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      background-color: #909399;
      top: 0;
    }
    .el-form-item{
      width: 80%;
    }
  }

  .car{
    width: 25%;
    height: 80%;
    margin: 0 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    border-radius: 10px;
    overflow: hidden;
    background-color: white;

    h3{
      width: 100%;
      height: 25px;
      font-size: 15px;
      font-weight: normal;
      margin: 0;
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      background-color: #909399;
      top: 0;
    }
    .el-button{
      margin-bottom: 15px;
    }
    .el-drawer{
      span{
        width: 100%;
        height: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 20px;
        color: white;
        background-color: #909399;
      }
      .el-table{
        margin: 0 auto;
      }
    }

  }

  .indent{
    width: 30%;
    height: 80%;
    position: relative;
    border-radius: 10px;
    overflow: hidden;
    background-color: white;
    font-size: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    h3{
      width: 100%;
      height: 25px;
      font-size: 15px;
      font-weight: normal;
      margin: 0;
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      background-color: #909399;
      top: 0;
    }
    span{
        display: block;
        width: 100%;
        height: 30px;
        line-height: 30px;
        margin-top: 20px;
        overflow: hidden;
        &:first-of-type{
          text-align: center;
        }
    }
    i{
      margin:0 10px;
    }
    .btn{
      display: flex;
      justify-content: center;
      margin-top: 20px;
      .el-button{
        width: 100px;
        margin-left: 20px;
      }
    }
  }
}
</style>