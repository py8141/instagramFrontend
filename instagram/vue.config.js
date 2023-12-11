const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy:{
      "/insta": {
        target: "http://localhost:9000/",
        changeOrigin: true
      },
    }
  }
})
