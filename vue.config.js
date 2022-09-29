const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  devServer: {
    port: 80,
    proxy: {
      '/api': { // '/api'是代理标识，用于告诉node，url前面是/api的就是使用代理的
        target: "http://localhost:8089", //目标地址，一般是指后台服务器地址
        changeOrigin: true, //表示是否改变原域名
        ws: false,//表示WebSocket协议
        pathRewrite: { // pathRewrite 的作用是把实际Request Url中的'/api'用""代替
          '^/api': ""
        }
      }
    }
  },
  transpileDependencies: true,
  lintOnSave: false,
});
