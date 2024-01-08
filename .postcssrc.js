// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  "plugins": {
    "postcss-import": {},
    "postcss-url": {},
    // to edit target browsers: use "browserslist" field in package.json
    "autoprefixer": {},
    // 配置使用 postcss-pxtorem 插件
    // 作用：把 px 转为 rem
    'postcss-pxtorem': {
      // lib-flexible 的 REM 适配方案：把一行分为 10 份，每份就是十分之一
      // 所以 rootValue 应该设置为你的设计稿宽度的十分之一
      // 我们的设计稿是 750，所以应该设置为 750 / 10 = 75
      // 但是 Vant 建议设置为 37.5，为什么？因为 Vant 是基于 375 写的
      // 所以必须设置为 37.5，唯一的缺点就是使用我们设计稿的尺寸都必须 / 2
      // 有没有更好的办法？
      // 如果是 Vant 的样式，就按照 37.5 来转换
      // 如果是 我们自己 的样式，就按照 75 来转换
      // 通过查阅文档，我们发现 rootValue 支持两种类型：
      // 数字：固定的数值
      // 函数：可以动态处理返回
      // postcss-pxtorem 处理每个 CSS 文件的时候都会来调用这个函数
      // 它会把被处理的 CSS 文件相关的信息通过参数传递给该函数
      // file ： vant-button.css
      // file :  login.vue
      mediaQuery: false, //媒体查询( @media screen 之类的)中不生效
      minPixelValue: 12, //px小于12的不会被转换
      // unitPrecision: 5, //保留rem小数点多少位
      // selectorBlackList: [''],  //则是一个对css选择器进行过滤的数组，比如你设置为['fs']，那例如fs-xl类名，里面有关px的样式将不被转换，这里也支持正则写法。
      rootValue({ file }) {
        return file.indexOf('vant') !== -1 ? 37.5 : 75 // 此处是以375为基准进行计算   1rem相当于37.5px
      },
      rootValue: 37.5, // 或者直接指定所有的都为37.5 二选一

      // 配置要转换的 CSS 属性
      // * 表示所有
      propList: ['*']
    }
  }
}
