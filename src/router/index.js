import Vue from 'vue'
import VueRouter from 'vue-router'
import path from './path.js'

Vue.use(VueRouter)

const routes = path

const router = new VueRouter({
	routes
})

export default router
