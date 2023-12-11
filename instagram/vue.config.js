const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy:{
      "/insta": {
        target: "http://10.20.3.160:9000/",
        changeOrigin: true
      },
    }
  }
})
