import { reqCarInfoForPage, reqAllCarInfo,reqAddCarInfo } from "@/api";
const state = {
  carInfo: [],
  allCarInfo: [],
};
const mutations = {
  GETCARINFO(state, carInfo) {
    state.carInfo = carInfo;
  },
  GETALLCARINFO(state, allCarInfo) {
    state.allCarInfo = allCarInfo;
  },
};
const actions = {
  async getAllCarInfo({ commit },data) {
    let result = await reqAllCarInfo(data);
    console.log(result.data);
    if (result.data.code == 200) {
      commit("GETALLCARINFO", result.data.obj);
      return "ok";
    } else {
      return Promise.reject(new Error("faile"));
    }
  },
  async getCarInfo({ commit }, data) {
    let result = await reqCarInfoForPage(data);
    //console.log(result.data);
    if (result.data.code == 200) {
      commit("GETCARINFO", result.data.obj);
      return "ok";
    } else {
      return Promise.reject(new Error("faile"));
    }
  },
  async addCarInfo({commit},data){
    let result =await reqAddCarInfo(data);
    console.log(result.data);
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
