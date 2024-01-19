import http from "./request"

http.interceptor.request = (config) => {
	//添加通用参数
	config.header = {
		'authorization': localStorage.getItem("token"),
		// 'Content-type': 'application/x-www-form-urlencoded',
		"OS": 'APP'
	}
}
export const userType = (data) => {
  return http.request({
    url: 'v1/app/user/userInfo',
    method: 'get',
    data,
  })
}
export default {
  userType,

}
