// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vant from 'vant';
import 'vant/lib/index.css';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import store from './store/index.js'
import "@/common/style/index.css";
import '@/assets/svg/iconfont/iconfont.js'
import '@/assets/svg/iconfont/iconfont.scss'
import SvgIcon from '@/components/SvgIcon/index.vue'// svg component
Vue.component('svg-icon', SvgIcon)
const req = require.context('./assets/svg', false, /\.svg$/)
const requireAll = requireContext => requireContext.keys().map(requireContext)
requireAll(req)
Vue.use(Vant);
Vue.use(ElementUI);
Vue.config.productionTip = false
Vue.prototype.$store = store

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
