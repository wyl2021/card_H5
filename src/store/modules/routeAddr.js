const routeAddr = {
	namespaced: true,
	state:{
		active:0
	},
	mutations:{
		setActive(state,value){
			state.active = value
		},		
	}
}

export default routeAddr