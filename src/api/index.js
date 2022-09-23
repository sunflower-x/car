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
