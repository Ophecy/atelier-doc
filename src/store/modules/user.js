export default {
	state: ()=>({
		name: '',
		oauth: ''
	}),
	getters: {
		getOAuth: state=>{
			return state.oauth
		}
	},
	mutations: {
		SET_NAME(state, payload) {
			state.name = payload.name
			state.oauth = payload.oauth
		}
	},
	actions: {
		saveName({ commit }, data) {
			commit('SET_NAME', data)
		}
	}
}