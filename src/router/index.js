import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'login',
		component: () => import('@/views/Login')
	},
	{
		path: '/home',
		name: 'home',
		component: () => import('@/views/Home'),
		children: [
			{
				path: '/goodLists',
				name: 'goodLists',
				component: () => import('@/views/GoodLists')
			},
			{
				path: '/gddGoods',
				name: 'addGoods',
				component: () => import('@/views/AddGoods')
			},
			{
				path: '/goodsClassify',
				name: 'goodsClassify',
				component: () => import('@/views/GoodClassify')
			}
		]
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
