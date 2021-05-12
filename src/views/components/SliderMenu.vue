<template>
	<el-menu
		default-active="activeName"
		:collapse="isCollapse"
		class="el-menu-vertical"
	>
		<Menu :menus="menus" />
	</el-menu>
</template>

<script>
import Menu from './Menu'
export default {
	components: {
		Menu
	},
	props: {
		isCollapse: {
			type: Boolean,
			default: false
		}
	},
	data() {
		return {
			menus: [
				{
					children: [],
					url: '/home',
					name: '首页'
				},
				{
					children: [
						{
							children: [],
							url: 'GoodsList',
							name: '商品列表'
						}
					],
					url: '/addGoods',
					name: '添加商品'
				},
				{
					children: [],
					url: 'GoodsList',
					name: '商品列表'
				}
			]
		}
	},
	computed: {
		activeName() {
			return this.$route.path
		}
	},
	methods: {}
}
</script>

<style lang="scss" scoped>
.el-menu-vertical:not(.el-menu--collapse) {
	width: 200px;
	min-height: 400px;
}
::v-deep .el-menu--collapse {
	width: 75px;
}
::v-deep .el-menu--collapse .el-submenu__title span {
	display: none;
}
</style>
