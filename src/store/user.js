import { reqUserLogin, reqRegister, reqDeleteCustomer } from "@/api";
const state = {};
const mutations = {};
const actions = {
  //登录
  async userLogin({ commit }, data) {
    let result = await reqUserLogin(data);
    if (result.data.code == 200) {
      return "ok";
    } else {
      return Promise.reject(new Error("faile"));
    }
  },
  //注册
  async userRegister({ commit }, data) {
    let result = await reqRegister(data);
    //console.log(result.data.code)
    if (result.data.code == 200) {
      return "ok";
    } else {
      return Promise.reject(new Error("faile"));
    }
  },
  //删除
  async userDelete({ commit }, data) {
    let result = await reqDeleteCustomer(data);
    if (result.data.code == 200) {
      return "ok";
    } else {
      return Promise.reject(new Error("faile"));
    }
  },
};
const getters = {};
export default {
  state,
  mutations,
  actions,
  getters,
};
