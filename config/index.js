'use strict'
// Template version: 1.3.1
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require('path')
const resolve = dir => path.join(__dirname, dir)
const os = require('os');
function getNetworkIp() {
  let needHost = ''; // 打开的host
  try {
    // 获得网络接口列表
    let network = os.networkInterfaces();
    for (let dev in network) {
      let iface = network[dev];
      for (let i = 0; i < iface.length; i++) {
        let alias = iface[i];
        if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
          needHost = alias.address;
        }
      }
    }
  } catch (e) {
    needHost = 'localhost';
  }
  return needHost;
}
module.exports = {
  chainWebpack: config => {
    //包别名
    config.resolve.alias
      .set('@', resolve('src'))
    //iview-loader  Vue 限制的两个标签 Switch 和 Circle
    config.module
      .rule('svg')
      .exclude.add(resolve('src/assets/svg'))
      .end()
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/assets/svg'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end()
  },
  dev: {

    // Paths
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {},

    // Various Dev Server settings
    host: getNetworkIp(), // can be overwritten by process.env.HOST
    port: 8088, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
    autoOpenBrowser: false,
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-


    /**
     * Source Maps
     */

    // https://webpack.js.org/configuration/devtool/#development
    devtool: 'cheap-module-eval-source-map',

    // If you have problems debugging vue-files in devtools,
    // set this to false - it *may* help
    // https://vue-loader.vuejs.org/en/options.html#cachebusting
    cacheBusting: true,

    cssSourceMap: true
  },

  build: {
    // Template for index.html
    index: path.resolve(__dirname, '../dist/index.html'),

    // Paths
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',

    /**
     * Source Maps
     */

    productionSourceMap: true,
    // https://webpack.js.org/configuration/devtool/#production
    devtool: '#source-map',

    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],

    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  }
  // "plugins": {
  //   "postcss-import": {},
  //   "postcss-url": {},
  //   // to edit target browsers: use "browserslist" field in package.json
  //   "autoprefixer": {},
  //   // 配置使用 postcss-pxtorem 插件
  //   // 作用：把 px 转为 rem
  //   'postcss-pxtorem': {
  //     // lib-flexible 的 REM 适配方案：把一行分为 10 份，每份就是十分之一
  //     // 所以 rootValue 应该设置为你的设计稿宽度的十分之一
  //     // 我们的设计稿是 750，所以应该设置为 750 / 10 = 75
  //     // 但是 Vant 建议设置为 37.5，为什么？因为 Vant 是基于 375 写的
  //     // 所以必须设置为 37.5，唯一的缺点就是使用我们设计稿的尺寸都必须 / 2
  //     // 有没有更好的办法？
  //     // 如果是 Vant 的样式，就按照 37.5 来转换
  //     // 如果是 我们自己 的样式，就按照 75 来转换
  //     // 通过查阅文档，我们发现 rootValue 支持两种类型：
  //     // 数字：固定的数值
  //     // 函数：可以动态处理返回
  //     // postcss-pxtorem 处理每个 CSS 文件的时候都会来调用这个函数
  //     // 它会把被处理的 CSS 文件相关的信息通过参数传递给该函数
  //     // file ： vant-button.css
  //     // file :  login.vue
  //     mediaQuery: false, //媒体查询( @media screen 之类的)中不生效
  //     minPixelValue: 12, //px小于12的不会被转换
  //     // unitPrecision: 5, //保留rem小数点多少位
  //     // selectorBlackList: [''],  //则是一个对css选择器进行过滤的数组，比如你设置为['fs']，那例如fs-xl类名，里面有关px的样式将不被转换，这里也支持正则写法。
  //     rootValue({ file }) {
  //       return file.indexOf('vant') !== -1 ? 37.5 : 75 // 此处是以375为基准进行计算   1rem相当于37.5px
  //     },
  //     rootValue: 37.5, // 或者直接指定所有的都为37.5 二选一

  //     // 配置要转换的 CSS 属性
  //     // * 表示所有
  //     propList: ['*']
  //   }
  // }
}
