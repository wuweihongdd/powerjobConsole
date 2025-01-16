module.exports = {
  // https://gitee.com/KFCFans/PowerJob/issues/I7MU6J
  publicPath: './',
  devServer: {
    proxy: {
      '/api': {
        target: 'http://192.168.5.191:7700',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}