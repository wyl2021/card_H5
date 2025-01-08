// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';

import Vant from 'vant';
import store from './store/index.js';
import VueDPlayer from "vue-dplayer";
import ElementUI from 'element-ui';
import SvgIcon from '@/components/SvgIcon/index.vue';// svg component
import http from '@/api/http';
import axios from 'axios';
import 'vant/lib/index.css';
import 'amfe-flexible';
import 'element-ui/lib/theme-chalk/index.css';
import "@/common/style/index.css";
import '@/assets/svg/iconfont/iconfont.js';
import '@/assets/svg/iconfont/iconfont.scss';
import "vue-dplayer/dist/vue-dplayer.css";
import "@/components/componentsAll/components.js";
import router from './router';
import { Dialog } from 'vant-green';
// import VueWechatTitle from 'vue-wechat-title';


Vue.component('svg-icon', SvgIcon)
///线上素材
Vue.prototype.IMG = 'https://card-img1.oss-cn-beijing.aliyuncs.com/'
const req = require.context('./assets/svg', false, /\.svg$/)

Vue.config.productionTip = false
const requireAll = requireContext => requireContext.keys().map(requireContext)
requireAll(req)
Vue.use(Dialog);
Vue.use(Vant);
Vue.use(ElementUI);
Vue.use(VueDPlayer);
// Vue.use(VueWechatTitle);
Vue.config.productionTip = false
Vue.prototype.$store = store
Vue.prototype.$http = http


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App,
    [Dialog.Component.name]: Dialog.Component
  },
  template: '<App/>'
})
