import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import axios from 'axios'
export default new Vuex.Store({
	state: {
		homeObj:''
	},
	mutations: {
		userLists(context) {
			axios({
				url: 'https://www.fastmock.site/mock/634944dcacc043c80eafe845adddcb9e/userName/api',
				method:'get'
			})
			.then(rel => {
				context.homeObj = rel.data
			})
		}
	},
	actions: {

	},
	modules: {}
})
