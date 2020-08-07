export default [{
		path: '/',
		redirect: '/home'
	},
	{
		path: '/home',
		component: () => import('@/views/Home/Home'),
	},
	{
		path: '/details/:item',
		name: 'details',
		component: () => import('@/views/Home/deTails')
	},
	{
		path: '/speech',
		name: 'speech',
		component: () => import('@/views/speech/speech')
	},
	{
		path: '/themsg',
		component: () => import('@/views/theMsg/theMsg')
	},
	{
		path: '/myhomepage',
		component: () => import('@/views/myHomePage/myHomePage')
	}, {
		path: "/announcement",
		component: () => import('@/views/speech/announCement')
	}, {
		path: '/more',
		component: () => import('@/views/speech/more')
	}, {
		path: '/reply',
		component: () => import('@/views/theMsg/replyToMy')
	}, {
		path: '/receivedPraise',
		component: () => import('@/views/theMsg/receivedPraise')
	}, {
		path: '/systemInfo',
		component: () => import('@/views/theMsg/systemInfo')
	}, {
		path: '/settings',
		component: () => import('@/views/theMsg/Settings')
	}
]