const system = {
	namespaced: true,
	state:{
		statusBarHeight:'2112',
		titleBarHeight:'',
		foldState:false
	},
	mutations:{
		setFoldState(state,value){
			state.foldState = value
		},		
		
	}
}

export default system