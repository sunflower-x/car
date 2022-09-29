import Vue from "vue";
import Vuex from "vuex";
//需要使用插件一次
Vue.use(Vuex);
//引入小仓库
import user from "./user";
import customer from "./customer";
import car from "./car";

//对外暴露store类的一个实例
export default new Vuex.Store({
  //实现Vuex仓库模块化开发存储数据
  modules: {
    user,
    customer,
    car,
  },
});
