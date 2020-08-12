import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import axios from 'axios'
export default new Vuex.Store({
	state: {
		homeObj: '',
		bhsObj:'',
		speechList: '',
		Focus: []
	},
	mutations: {
		userLists(context) {
			axios({
					url: 'https://www.fastmock.site/mock/634944dcacc043c80eafe845adddcb9e/userName/api',
					method: 'get'
				})
				.then(rel => {
					context.homeObj = rel.data
				})
		},
		bhs(context){
			axios({
					url: 'https://www.fastmock.site/mock/634944dcacc043c80eafe845adddcb9e/userName/api/bhs',
					method: 'get'
				})
				.then(rel => {
					context.bhsObj = rel.data
				})
		},
		speechList(context) {
			axios({
					url: 'https://www.fastmock.site/mock/634944dcacc043c80eafe845adddcb9e/userName/speech',
					method: 'get'
				})
				.then(rel => {
					context.speechList = rel.data
				})
		},
		Focus(context, item) {
			context['Focus'].push(item)
		},
		removeFocus(context, item) {
			context['Focus'].splice(context['Focus'].indexOf(item), 1)
		}
	},
	actions: {

	},
	modules: {}
})
