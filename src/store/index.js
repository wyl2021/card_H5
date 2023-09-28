import Vue from "vue"
import Vuex from "vuex"
import system from "@/store/modules/system.js"
import user from "@/store/modules/user.js"
import routeAddr from "@/store/modules/routeAddr.js"
import getters from "./getters.js"

Vue.use(Vuex)

const store = new Vuex.Store({
	getters,
	modules:{
		system,
		user,
		routeAddr
	}
})

export default store