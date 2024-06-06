const user = {
  namespaced: true,
  state: {
    id: "123123123"
  },
  mutations: {
    // 定义一个修改储存对象
    upData(state, upData) {
      state.id = upData
    }
  },
  actions: {
    // 定义一个action来调用mutation
    updateMyObjectAction({ commit }, payload) {
      commit('upData', payload);
    }
  }
}

export default user
