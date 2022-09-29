//当前这个模块：对API进行统一管理
import requests from "./requests";

//登录的接口
//url:/user/login method:post  params:username password
export const reqUserLogin = (data) => {
  return requests({
    method: "post",
    url: "/user/login",
    data: data,
  });
};

//注册的接口
export const reqRegister = (data) =>
  requests({
    method: "post",
    url: "/user/register",
    params: data,
  });

//获取所有的顾客信息
export const reqAllCustomerInfo = (data) =>
  requests({
    url: "/customer/getall",
    method: "post",
    data:data,
  });

//通过id删除顾客
export const reqDeleteCustomer = (data) =>
  requests({
    url: "/customer/delete",
    method: "delete",
    params: data,
  });

//添加顾客
export const reqAddCustomer = (data) =>
  requests({
    url: "/customer/save",
    method: "post",
    data: data,
  });

//修改顾客
export const reqUpdateCustomer = (data) =>
  requests({
    url: "/customer/update",
    method: "patch",
    data: data,
  });

//获取分页数据
export const reqCustomerInfoOfPage = (data) =>
  requests({
    url: '/customer/page',
    method: "post",
    //params:params,
    data: data,
  });

//获取所有汽车数据
export const reqAllCarInfo = (data) =>
  requests({
    url: "/car/selectall",
    method: "get",
    params:data
  });

//获取分页汽车数据
export const reqCarInfoForPage = (data) =>
  requests({
    url: "/car/select",
    method: "get",
    params: data,
  });

//添加汽车数据
export const reqAddCarInfo = (data) =>
  requests({
    url: "/car/insert",
    method: "post",
    data: data,
  });
