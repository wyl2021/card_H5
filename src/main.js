// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import Vant from 'vant';
import store from './store/index.js';
import VueDPlayer from "vue-dplayer";
import ElementUI from 'element-ui';
import SvgIcon from '@/components/SvgIcon/index.vue';// svg component
import http from '@/api'
import 'vant/lib/index.css';
import 'amfe-flexible';
import 'element-ui/lib/theme-chalk/index.css';
import "@/common/style/index.css";
import '@/assets/svg/iconfont/iconfont.js';
import '@/assets/svg/iconfont/iconfont.scss';
import "vue-dplayer/dist/vue-dplayer.css";

Vue.component('svg-icon', SvgIcon)
const req = require.context('./assets/svg', false, /\.svg$/)
const requireAll = requireContext => requireContext.keys().map(requireContext)
requireAll(req)
Vue.use(Vant);
Vue.use(ElementUI);
Vue.use(VueDPlayer);
Vue.config.productionTip = false
Vue.prototype.$store = store
Vue.prototype.$http = http

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
