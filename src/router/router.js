//配置路由的地方
import Vue from "vue";
import VueRouter from "vue-router";
//使用插件
Vue.use(VueRouter);
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Main from '../components/main'
import MemberSystem from '../views/membersystem'
import StoreSystem from '../views/storesystem'
import CustomerSystem from '../views/CustomerSystem'
import Rental from '../views/rental/Rental.vue'
import Add from '../views/rental/Add.vue'
import Find from '../views/rental/Find.vue'
import Old from '../views/rental/Old.vue'

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
      component: Login,
    },

    {
      path: "/register",
      component: Register,
    },
    {
      path: "/main",
      component: Main,
      children: [
        {
          path: '/member',
          name: "Membersystem",
          component: MemberSystem,
          meta: { title: '会员信息管理' }
        },
        {
          path: '/store',
          name: "StoreSystem",
          component: StoreSystem, meta: { title: '门店信息管理' }
        },
        {
          path: '/user',
          name: "CustomerSystem",
          component: CustomerSystem, meta: { title: '系统用户管理' }
        },
        {
          path: '/benz',
          name: 'benz',
          component: () => import('@/views/car/system/Benz/Benz.vue'),
          meta: { title: '管理车辆信息' }
        },
        {
          path: '/bmw',
          name: 'bmw',
          component: () => import('@/views/car/system/BMW/BMW.vue'),
          meta: { title: '宝马系列' }
        },
        {
          path: '/nissan',
          name: 'nissan',
          component: () => import('@/views/car/system/Nissan/Nissan.vue'),
          meta: { title: '日产系列' }
        },
        {
          path: '/faw-vk',
          name: 'faw-vk',
          component: () => import('@/views/car/system/FAW-VK/FAW-VK.vue'),
          meta: { title: '大众系列' }
        },
        {
          path: '/deletecar',
          name: 'deletecar',
          component: () => import('@/views/car/system/caozuoyixia/DeleteData.vue'),
          meta: { title: '删除汽车信息' }
        },
        {
          path: '/addcar',
          name: 'addcar',
          component: () => import('@/views/car/system/caozuoyixia/AddData.vue'),
          meta: { title: '添加汽车信息' }
        },
        {
          path: '/book',
          name: 'book',
          component: () => import('@/views/book.vue'),
          meta: { title: '维修预约' }
        },
        {
          path: '/repair',
          name: 'repair',
          component: () => import('@/views/repair.vue'),
          meta: { title: '维修情况' }
        },
        {
          path: '/staff',
          name: 'staff',
          component: () => import('@/views/staff.vue'),
          meta: { title: '员工信息管理' }
        },
        {
          path: '/Addstore',
          name: 'Addstore',
          component: () => import('@/views/Addstore.vue'),
          meta: { title: '添加门店信息' }
        },
        {
          path: '/Usermsg',
          name: 'Usermsg',
          component: () => import('@/views/Usermsg.vue'),
          meta: { title: '个人中心' }
        },
        {
          path: '/rental',
          component: Rental,
          children: [
            { path: '', redirect: 'add'},
            { path: 'add', component: Add ,meta: { title: '生成订单' }},
            { path: 'find', component: Find, meta: { title: '订单跟踪' } },
            { path: 'old', component: Old, meta: { title: '历史订单' }},
          ]
        },
      ]
    },
  ],
});

export default router;
