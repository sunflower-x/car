import {
  reqAllCustomerInfo,
  reqAddCustomer,
  reqUpdateCustomer,
  reqCustomerInfoOfPage,
} from "@/api";
const state = {
  allCustomerInfo: [],
  customerForPageList: [],
};
const mutations = {
  GETALLCUSTOMERINFO(state, allCustomerInfo) {
    state.allCustomerInfo = allCustomerInfo;
  },
  GETCUSTOMERFORPAGE(state, customerForPageList) {
    state.customerForPageList = customerForPageList;
  },
};
const actions = {
  async getAllCustomerInfo({ commit },data) {
    let result = await reqAllCustomerInfo(data);
    //console.log(result.data);
    if (result.data.code == 200) {
      commit("GETALLCUSTOMERINFO", result.data.obj);
      return "ok";
    } else {
      return Promise.reject(new Error("faile"));
    }
  },
  async addCustomer({ commit }, data) {
    let result = await reqAddCustomer(data);
    console.log(result.data.code);
    if (result.data.code == 200) {
      return "ok";
    } else {
      return Promise.reject(new Error("faile"));
    }
  },
  async updateCustomer({ commit }, data) {
    let result = await reqUpdateCustomer(data);
    //console.log(result.data.code);
    if (result.data.code == 200) {
      return "ok";
    } else {
      return Promise.reject(new Error("faile"));
    }
  },
  async getCustomerForPage({ commit }, data) {
    let result = await reqCustomerInfoOfPage(data);
    console.log(result.data);
    if (result.data.code == 200) {
      commit("GETCUSTOMERFORPAGE", result.data.obj);
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
