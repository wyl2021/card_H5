import axios from 'axios'
import { Toast } from 'vant';
const service = axios.create({
  baseURL: 'https://akumpapi.oa00.com/', // url = base url + request url
  // baseURL: 'http://192.168.50.254:2279', // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000,
// 		dataType: "json",

})
service.interceptors.request.use(config => {
  // 在这个位置需要统一的去注入token
  if (localStorage.getItem("token")) {
    config.headers['Authorization'] = localStorage.getItem("token")
  }
  // console.log(config)
  return config // 必须返回配置
}, error => {
  return Promise.reject(error)
})
// 响应拦截器
service.interceptors.response.use(response => {
  // axios默认加了一层data

  const { code, errmsg, data } = response.data
  //   要根据success的成功与否决定下面的操作
  // 判断token过期的处理
  if (localStorage.getItem("token") && code === 401) {
    // Message.error(errmsg) // 提示错误消息
    // store.dispatch('user/logout') // 登出action 删除token
    // router.push('/index')
    Toast.fail(errmsg)
    return Promise.reject(new Error(errmsg))
  }

  if (code === 200) {
    return response.data
  }
  // Message.error(errmsg) // 提示错误消息
  // store.dispatch('user/logout') // 登出action 删除token
  // router.push('/login')
  Toast.fail(errmsg);
  return Promise.reject(new Error(errmsg))
}, error => {

  // Message.error(error.errmsg) // 提示错误信息
  return Promise.reject(error) // 返回执行错误 让当前的执行链跳出成功 直接进入 catch
})

export default service
// export default {
// 	config: {
// 		// 请求地址

// 		// baseUrl: 'http://192.168.0.102:8080/jeecg-boot/',
// 		baseUrl: 'https://akumpapi.oa00.com/',
// 		data: {},
// 		method: "GET",
// 		dataType: "json",
// 		/* 如设为json，会对返回的数据做一次 JSON.parse */
// 		responseType: "text",
// 		success() {},
// 		fail() {},
// 		complete() {}
// 	},
// 	interceptor: {
// 		request: null,
// 		response: null
// 	},
// 	request(options) {
// 		if (!options) {
// 			options = {}
// 		}
// 		options.baseUrl = options.baseUrl || this.config.baseUrl
// 		options.dataType = options.dataType || this.config.dataType
// 		options.url = options.baseUrl + options.url
// 		options.data = options.data || {}
// 		options.method = options.method || this.config.method
//     console.log('参数',options)
// 		return new Promise((resolve, reject) => {
// 			let _config = null
//       console.log('参数2',_config)
// 			options.complete = (response) => {
//         console.log('参数3',response)
// 				let statusCode = response.statusCode
// 				response.config = _config
// 				// 统一的响应日志记录
// 				_reslog(response)
//         console.log("拦截响应",statusCode)
// 				if (statusCode === 200) { //成功
// 					resolve(response.data);
// 				} else if (response.data.code == 401) {
//           // uni.removeStorageSync('token');
//           // uni.reLaunch({
//           //   url:'/pages/index/index'+uni.getStorageSync('USERID')
//           // })
//         } else {
// 					reject(response)
// 				}
// 			}
// 			_config = Object.assign({}, this.config, options)
// 			_config.requestId = new Date().getTime()
// 			if (this.interceptor.request) {
// 				this.interceptor.request(_config)
// 			}
// 			// 统一的请求日志记录
// 			_reqlog(_config)
// 			// uni.request(_config);
// 		});
// 	},
// 	get(url, data, options) {
// 		if (!options) {
// 			options = {}
// 		}
// 		options.url = url
// 		options.data = data
// 		options.method = 'GET'
// 		return this.request(options)
// 	},
// 	post(url, data, options) {
// 		if (!options) {
// 			options = {}
// 		}
// 		options.url = url
// 		options.data = data
// 		options.method = 'POST'
// 		return this.request(options)
// 	},
// 	put(url, data, options) {
// 		if (!options) {
// 			options = {}
// 		}
// 		options.url = url
// 		options.data = data
// 		options.method = 'PUT'
// 		return this.request(options)
// 	},
// 	delete(url, data, options) {
// 		if (!options) {
// 			options = {}
// 		}
// 		options.url = url
// 		options.data = data
// 		options.method = 'DELETE'
// 		return this.request(options)
// 	}
// }


// /**
//  * 请求接口日志记录
//  */
// function _reqlog(req) {
// 	// 转圈圈
// 	// uni.showLoading({
// 	// 	title: '正在加载'
// 	// });
// }
// /**
//  * 响应接口日志记录
//  */
// function _reslog(res) {
// 	// 停止转圈圈
// 	// uni.hideLoading();
// 	// if (res.data.code == 401) {
// 	// 	uni.showModal({
// 	// 		title: "提示",
// 	// 		content: '登录已过期',
// 	// 		showCancel: true,
// 	// 		cancelText: '关闭',
// 	// 		confirmText: '确定',
// 	// 		success: resa => {
// 	// 			if (resa.confirm) {
// 	// 				uni.reLaunch({
// 	// 					url: '/pages/login/login'
// 	// 				})
// 	// 				uni.hideLoading();
// 	// 			} else {
// 	// 				// 否则点击了取消
// 	// 			}
// 	// 		}
// 	// 	})
// 	// 	return false
// 	// }
// 	// // 如果错误 提示
// 	// if (res.data.code !== 1) {
// 	// 	if(res.data.msg == '验证信息无效'){
// 	// 		return
// 	// 	}
// 	// 	uni.showToast({
// 	// 		icon: 'none',
// 	// 		position: 'bottom',
// 	// 		title: res.data.msg
// 	// 	});
// 	// }

// }
