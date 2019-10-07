import Vue from 'vue'
import Vuex from 'vuex'
import modules from './modules'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		admin: {
			name: 'Борис Дрябин'
		},
		loaded: false
	},
	mutations:{
		setLoaded (state, flag) {
      state.loaded = flag
    },
	},
	modules
})
