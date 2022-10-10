const { defineConfig } = require('@vue/cli-service')
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");
const target = 'http://127.0.0.1:3000';

module.exports = {
  transpileDependencies: true,
  lintOnSave: false,
  configureWebpack: {
    plugins: [new NodePolyfillPlugin()],
    optimization: {
      splitChunks: {
        chunks: "all",
      },
    },
  },
  devServer: {
    port: 8080,
    proxy: {
      //proxy 요청을 보낼 api 시작 부분
      '^/api': {
        target,
        changeOrigin: true
      }
    }
  }
};