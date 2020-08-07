import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import axios from 'axios'
export default new Vuex.Store({
	state: {
		homeObj:'',
		speechList:''
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
		},
		speechList(context){
			axios({
				url:'https://www.fastmock.site/mock/634944dcacc043c80eafe845adddcb9e/userName/speech',
				method:'get'
			})
			.then(rel => {
				context.speechList = rel.data
			})
		}
	},
	actions: {

	},
	modules: {}
})
