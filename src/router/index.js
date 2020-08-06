import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
		path: '/',
		redirect: '/home'
	},
	{
		path: '/home',
		component: () => import('@/views/Home/Home'),
	},
	{
		path:'/details/:item',
		name:'details',
		component:() => import('@/views/Home/deTails')
	},
	{
		path:'/speech',
		component:() => import('@/views/speech/speech')
	},
	{
		path:'/themsg',
		component:() => import('@/views/theMsg/theMsg')
	},
	{
		path:'/myhomepage',
		component:() => import('@/views/myHomePage/myHomePage')
	}
]

const router = new VueRouter({
	routes
})

export default router
