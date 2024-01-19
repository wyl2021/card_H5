export default {
	config: {
		// 请求地址

		// baseUrl: 'http://192.168.0.102:8080/jeecg-boot/',
		baseUrl: 'https://akumpapi.oa00.com/',
		data: {},
		method: "GET",
		dataType: "json",
		/* 如设为json，会对返回的数据做一次 JSON.parse */
		responseType: "text",
		success() {},
		fail() {},
		complete() {}
	},
	interceptor: {
		request: null,
		response: null
	},
	request(options) {
		if (!options) {
			options = {}
		}
		options.baseUrl = options.baseUrl || this.config.baseUrl
		options.dataType = options.dataType || this.config.dataType
		options.url = options.baseUrl + options.url
		options.data = options.data || {}
		options.method = options.method || this.config.method
		return new Promise((resolve, reject) => {
			let _config = null
			options.complete = (response) => {
				let statusCode = response.statusCode
				response.config = _config
				// 统一的响应日志记录
				_reslog(response)
				if (statusCode === 200) { //成功
					resolve(response.data);
				} else {
					reject(response)
				}
			}
			_config = Object.assign({}, this.config, options)
			_config.requestId = new Date().getTime()
			if (this.interceptor.request) {
				this.interceptor.request(_config)
			}
			// 统一的请求日志记录
			_reqlog(_config)
			// uni.request(_config);
		});
	},
	get(url, data, options) {
		if (!options) {
			options = {}
		}
		options.url = url
		options.data = data
		options.method = 'GET'
		return this.request(options)
	},
	post(url, data, options) {
		if (!options) {
			options = {}
		}
		options.url = url
		options.data = data
		options.method = 'POST'
		return this.request(options)
	},
	put(url, data, options) {
		if (!options) {
			options = {}
		}
		options.url = url
		options.data = data
		options.method = 'PUT'
		return this.request(options)
	},
	delete(url, data, options) {
		if (!options) {
			options = {}
		}
		options.url = url
		options.data = data
		options.method = 'DELETE'
		return this.request(options)
	}
}


/**
 * 请求接口日志记录
 */
function _reqlog(req) {
	// 转圈圈
	// uni.showLoading({
	// 	title: '正在加载'
	// });
}
/**
 * 响应接口日志记录
 */
function _reslog(res) {
	// 停止转圈圈
	// uni.hideLoading();
	// if (res.data.code == 401) {
	// 	uni.showModal({
	// 		title: "提示",
	// 		content: '登录已过期',
	// 		showCancel: true,
	// 		cancelText: '关闭',
	// 		confirmText: '确定',
	// 		success: resa => {
	// 			if (resa.confirm) {
	// 				uni.reLaunch({
	// 					url: '/pages/login/login'
	// 				})
	// 				uni.hideLoading();
	// 			} else {
	// 				// 否则点击了取消
	// 			}
	// 		}
	// 	})
	// 	return false
	// }
	// // 如果错误 提示
	// if (res.data.code !== 1) {
	// 	if(res.data.msg == '验证信息无效'){
	// 		return
	// 	}
	// 	uni.showToast({
	// 		icon: 'none',
	// 		position: 'bottom',
	// 		title: res.data.msg
	// 	});
	// }

}
