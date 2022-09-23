//配置路由的地方
import Vue from "vue";
import VueRouter from "vue-router";
//使用插件
Vue.use(VueRouter);

import login from "../views/Login.vue";
import register from "../views/Register.vue";
import main from "../components/main.vue";
import benz from "../views/car/system/Benz/Benz.vue";

let originPush = VueRouter.prototype.push;
let originReplace = VueRouter.prototype.Replace;
//重写push与replace方法
//第一个参数，告诉原来push方法，你往哪里跳转（传递那些参数）
//第二个参数 成功的回调
//第三个参数 失败的回调
VueRouter.prototype.push = function (location, resolve, reject) {
  if (resolve && reject) {
    //call和apply的区别 相同点：都可以调用一次函数，都可以篡改函数的上下文一次 不同点：call传递参数用逗号隔开，apply传递数组
    originPush.call(this, location, resolve, reject);
  } else {
    originPush.call(
      this,
      location,
      () => {},
      () => {}
    );
  }
};
VueRouter.prototype.Replace = function () {
  if (resolve && reject) {
    //call和apply的区别 相同点：都可以调用一次函数，都可以篡改函数的上下文一次 不同点：call传递参数用逗号隔开，apply传递数组
    originReplace.call(this, location, resolve, reject);
  } else {
    originReplace.call(
      this,
      location,
      () => {},
      () => {}
    );
  }
};

let router = new VueRouter({
  //滚动行为
  scrollBehavior(to, from, savedPosition) {
    return { y: 0 };
  },
  //配置路由
  routes: [
    //重定向，在项目跑起来的时候，访问/,立马让它定向到首页
    {
      path: "*",
      redirect: "/login",
    },
    {
      path: "/login",
      component: login,
    },

    {
      path: "/register",
      component: register,
    },
    {
      path: "/main",
      component: main,
    },
    {
      path: "/benz",
      component: benz,
    },
  ],
});

export default router;
