import request from "./request"

// http.interceptor.request = (config) => {
// 	//添加通用参数
// 	config.header = {
// 		'authorization': localStorage.getItem("token"),
// 		// 'Content-type': 'application/x-www-form-urlencoded',
// 		"OS": 'APP'
// 	}
// }
// 获取用户列表
export const cardUserList = (data) => {
	return request({
		url: 'v1/app/user/staffList',
		method: 'GET',

		params:data
	})
}
//获取用户信息
export const cardUserInfo = (data) => {
	return request({
		url: 'v1/app/user/staffInfo',
		method: 'GET',
		// data,
	})
}


// 切换员工
export const cardUserEdit = (data) => {
	return request({
		url: 'v1/app/user/staffSwitch',
		method: 'POST',
		data,
	})
}
//切换名片样式
export const cardInfo = (data) => {
	return request({
		url: 'v1/app/user/selectSwitch',
		method: 'POST',
		data,
	})
}

//解密手机号
export const decodePhone = (data) => {
	return request({
		url: 'v1/app/user/decodePhone',
		method: 'POST',
		data:data,
	})
}

//修改手机号
export const updatePhone = (data) => {
	return request({
		url: 'v1/app/user/updatePhone',
		method: 'PUT',
		data:data,
	})
}

//获取公司产品列表
export const productList = (data) => {
	return request({
		url: 'v1/app/user/productList',
		method: 'GET',
		params:data
	})
}

//获取公司产品详情
export const productDetail = (data) => {
	return request({
		url: 'v1/app/user/productDetail/' + data.id,
		method: 'GET',
		// data: {},
	})
}

//获取公司方案类型列表
export const solutionTypeList = (data) => {
	return request({
		url: 'v1/app/user/solutionTypeList',
		method: 'GET',
    params:data
	})
}

//获取公司方案详情
export const solutionDetail = (data) => {
	return request({
		url: 'v1/app/user/solutionDetail/' + data.id,
		method: 'GET'
	})
}


//登录
export const login = (data) => {
	return request({
		url: 'v1/app/user/login',
		method: 'POST',
		data:data,
	})
}
// 三级类型列表
export const categoryCategoryTypeList=(data)=>{

	return request({
		url:'v1/pc/product/categoryType/list',
		method:'GET',
		params:data
	})
}
// 三级列表
export const categorySolutionTypeList=(data)=>{

	return request({
		url:'v1/app/user/categorySolutionTypeList',
		method:'GET',
		params:data
	})
}


///三级详情
export const categorySolutionTypeDetail=(data)=>{
	return request({
		url:'v1/app/user/categorySolution/'+data.id,
		method:'GET',
	})
}
export default {
	login,
	cardUserList,
	cardUserInfo,
	cardUserEdit,
	cardInfo,
	decodePhone,
	updatePhone,
	productList,
	productDetail,
	solutionTypeList,
	solutionDetail,
	categorySolutionTypeList,
	categorySolutionTypeDetail,
  categoryCategoryTypeList
}
