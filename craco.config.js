const path = require("path");

const resolve = dir => path.resolve(__dirname,dir);

module.exports = {
  webpack:{
    alias:{
      "@":resolve("src"),
      "components":resolve("src/components")
    },
    // configure: (webpackConfig, {
    //   env, paths
    // }) => {
    //   // paths.appPath='public'
    //   paths.appBuild = 'dist'
    //   webpackConfig.output = {
    //     ...webpackConfig.output,
    //     // ...{
    //     //     filename: whenDev(() => 'static/js/bundle.js', 'static/js/[name].js'),
    //     //     chunkFilename: 'static/js/[name].js'
    //     //   },
    //       path: path.resolve(__dirname, 'dist'), // 修改输出文件目录
    //       publicPath: './'
    //   }
    //   return webpackConfig
    // }
  },
  // eslint:{
  //   rules: {
  //     "no-mixed-operators":0,
  //   }
  // }
  
}