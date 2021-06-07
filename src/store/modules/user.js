export default {
	state: ()=>({
		name: ''	}),
	getters: {
		getOAuth: state=>{
			return state.oauth
		}
	},
	mutations: {
		SET_NAME(state, payload) {
			state.name = name
		}
	},
	actions: {
		saveName({ commit }, data) {
			commit('SET_NAME', data)
		}
	}
}