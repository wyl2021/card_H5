const imageList = {
	namespaced: true,
	state:{
		image1:[],
    image2:[],
    image3:[],
    image4:[]
	},
	mutations:{
		page1(state,obj){
      let newBbj=Array.assign([], obj)
      state.image1=newBbj
    },
    page2(state,obj){
      let newBbj=Array.assign([], obj)
      state.image2=newBbj
    },
    page3(state,obj){
      let newBbj=Array.assign([], obj)
      state.image3=newBbj
    },
    page4(state,obj){
      let newBbj=Array.assign([], obj)
      state.image4=newBbj
    },
	},
  actions:{

  }
}

export default imageList
