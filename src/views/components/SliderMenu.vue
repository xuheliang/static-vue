<template>
	<el-menu
		default-active="activeName"
		:collapse="MenuCollapse"
		class="el-menu-vertical-demo"
		:menus="menus"
	>
		<Menu />
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
	created() {
		//console.log(this.menus)
	},
	data() {
		return {
			menus: [
				{
					children: [],
					url: '/home'
				},
				{
					children: [],
					url: '/addGoods'
				},
				{
					children: [],
					url: 'GoodsList'
				}
			]
		}
	},
	computed: {
		activeName() {
			return this.$route.path
		},
		MenuCollapse() {
			return this.isCollapse
		}
	}
}
</script>

<style></style>
