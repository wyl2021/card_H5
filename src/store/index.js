import Vue from "vue"
import Vuex from "vuex"
import system from "@/store/modules/system.js"
import user from "@/store/modules/user.js"
import image from "@/store/modules/imageUrl.js"
import routeAddr from "@/store/modules/routeAddr.js"
import getters from "./getters.js"

Vue.use(Vuex)

const store = new Vuex.Store({
	getters,
	modules:{
		system,
		user,
		routeAddr,
    image
	},


})

export default store
