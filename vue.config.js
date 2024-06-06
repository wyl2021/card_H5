
module.exports = {
  // devServer: {
  //   proxy: {
  //     '/api': {
  //       target: 'http://192.168.2.4:8088', // 目标地址
  //       changeOrigin: true, // 开启代理，在本地创建一个虚拟服务器，然后发送请求的数据，会同时会收到请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
  //       pathRewrite: {
  //         '^/api': '' // 路径重写，移除路径中的/api
  //       }
  //     }
  //   }
  // }
}
// 'use strict'
// const path = require('path')
// const defaultSettings = require('./src/settings.js')
// // // 引入等比适配插件
// // const px2rem = require('postcss-px2rem')
// // 配置基本大小
// // const postcss = px2rem({
// //   // 配置rem基准值 基准大小 baseSize
// //   remUnit: 192 // 设计稿尺寸1920/10
// // })

// function resolve(dir) {
//   return path.join(__dirname, dir)
// }

// const name = defaultSettings.title || 'vue Admin Template' // page title

// // If your port is set to 80,
// // use administrator privileges to execute the command line.
// // For example, Mac: sudo npm run
// // You can change the port by the following methods:
// // port = 9528 npm run dev OR npm run dev --port = 9528
// // 修改端口号
// const port = process.env.port || process.env.npm_config_port || 2279 // dev port

// // All configuration item explanations can be find in https://cli.vuejs.org/config/
// module.exports = {
//   /**
//    * You will need to set publicPath if you plan to deploy your site under a sub path,
//    * for example GitHub Pages. If you plan to deploy your site to https://foo.github.io/bar/,
//    * then publicPath should be set to "/bar/".
//    * In most cases please use '/' !!!
//    * Detail: https://cli.vuejs.org/config/#publicpath
//    */
//   publicPath: '/',
//   outputDir: 'dist',
//   assetsDir: 'static',
//   lintOnSave: process.env.NODE_ENV === 'development',
//   productionSourceMap: false,
//   // 反向代理
//   devServer: {
//     port: port,
//     open: true,
//     overlay: {
//       warnings: false,
//       errors: true
//     },
//     // before: require('./mock/mock-server.js')
//     // 反向代理配置项
//     // 代理跨域的配置
//     // proxy: {
//       // 当我们的本地的请求 有/api的时候，就会代理我们的请求地址向另外一个服务器发出请求
//       // '/api': {
//       // /v1/manage/login
//     //   '/': {
//     //     target: 'http://192.168.50.254:2279', // 跨域请求的地址
//     //     // target: 'https://api.interview.oa00.com', // 跨域请求的地址
//     //     changeOrigin: true // 只有这个值为true的情况下 才表示开启跨域
//     //     // pathRewrite: { // 路径重写
//     //     //   '^/api': ''
//     //     // }
//     //   }
//     // }
//   },
//   configureWebpack: {
//     // provide the app's title in webpack's name field, so that
//     // it can be accessed in index.html to inject the correct title.
//     name: name,
//     resolve: {
//       alias: {
//         '@': resolve('src')
//       }
//     }
//   },
//   // css: {
//   //   loaderOptions: {
//   //     postcss: {
//   //       plugins: [postcss]
//   //     }
//   //   }
//   // },
//   chainWebpack(config) {
//     // config.module
//     // .rule('css')
//     // .test(/\.css$/)
//     // .oneOf('vue')
//     // .use('px2rem-loader')
//     // .loader('px2rem-loader')
//     // .options({
//     //   remUnit: 192,
//     //   remPrecision: 8
//     // })
//     // .end()
//     // it can improve the speed of the first screen, it is recommended to turn on preload
//     config.plugin('preload').tap(() => [
//       {
//         rel: 'preload',
//         // to ignore runtime.js
//         // https://github.com/vuejs/vue-cli/blob/dev/packages/@vue/cli-service/lib/config/app.js#L171
//         fileBlacklist: [/\.map$/, /hot-update\.js$/, /runtime\..*\.js$/],
//         include: 'initial'
//       }
//     ])

//     // when there are many pages, it will cause too many meaningless requests
//     config.plugins.delete('prefetch')

//     // set svg-sprite-loader
//     config.module
//       .rule('svg')
//       .exclude.add(resolve('src/icons'))
//       .end()
//     config.module
//       .rule('icons')
//       .test(/\.svg$/)
//       .include.add(resolve('src/icons'))
//       .end()
//       .use('svg-sprite-loader')
//       .loader('svg-sprite-loader')
//       .options({
//         symbolId: 'icon-[name]'
//       })
//       .end()

//     config
//       .when(process.env.NODE_ENV !== 'development',
//         config => {
//           config
//             .plugin('ScriptExtHtmlWebpackPlugin')
//             .after('html')
//             .use('script-ext-html-webpack-plugin', [{
//               // `runtime` must same as runtimeChunk name. default is `runtime`
//               inline: /runtime\..*\.js$/
//             }])
//             .end()
//           config
//             .optimization.splitChunks({
//               chunks: 'all',
//               cacheGroups: {
//                 libs: {
//                   name: 'chunk-libs',
//                   test: /[\\/]node_modules[\\/]/,
//                   priority: 10,
//                   chunks: 'initial' // only package third parties that are initially dependent
//                 },
//                 elementUI: {
//                   name: 'chunk-elementUI', // split elementUI into a single package
//                   priority: 20, // the weight needs to be larger than libs and app or it will be packaged into libs or app
//                   test: /[\\/]node_modules[\\/]_?element-ui(.*)/ // in order to adapt to cnpm
//                 },
//                 commons: {
//                   name: 'chunk-commons',
//                   test: resolve('src/components'), // can customize your rules
//                   minChunks: 3, //  minimum common number
//                   priority: 5,
//                   reuseExistingChunk: true
//                 }
//               }
//             })
//           // https:// webpack.js.org/configuration/optimization/#optimizationruntimechunk
//           config.optimization.runtimeChunk('single')
//         }

//       )
//   }
// }
