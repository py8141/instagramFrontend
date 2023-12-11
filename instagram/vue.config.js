const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy:{
      "/insta/search": {
        target: "http://localhost:9000/",
        changeOrigin: true
      },
    }
  }
})
