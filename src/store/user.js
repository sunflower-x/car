import {reqUserLogin,reqRegister} from '@/api'
const state={};
const mutations={};
const actions={
    //登录
    async userLogin({commit},data){
        let result=await reqUserLogin(data);
        console.log(result.data.code);
    },
    //注册
    async userRegister({commit},data){
        let result=await reqRegister(data);
        console.log(result.data.code);
    }
};
const getters={};
export default{
    state,
    mutations,
    actions,
    getters,
}