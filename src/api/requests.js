//对于axios进行二次封装
import axios from "axios";

//2.request就是axios,只不过稍微配置一下
const requests = axios.create({
    //配置对象
    //基础路径，发请求的时候，路径当中会出现api
    baseURL: "/api",
    //代表请求超时的时间
    timeout: 5000,
  });

  //对外暴露
export default requests;