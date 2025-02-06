module.exports = {
  // https://gitee.com/KFCFans/PowerJob/issues/I7MU6J
  publicPath: './',
  devServer: {
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:7700',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}