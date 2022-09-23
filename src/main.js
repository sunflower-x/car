import Vue from "vue";
import App from "./App.vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "../public/reset.css";
//引入路由
import router from "./router/router";
//引入仓库
import store from "@/store";
import axios from "axios";

Vue.config.productionTip = false;

Vue.use(ElementUI);

new Vue({
  render: (h) => h(App),
  //注册路由
  router,
  //注册仓库：组件实例的身上会多一个属性$store
  store,
}).$mount("#app");
