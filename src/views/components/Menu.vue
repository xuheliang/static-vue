<template>
	<div>
		<template v-for="item in menus">
			<el-menu-item
				v-if="!item.children.length || item.url === '/home'"
				:key="item.url"
				:index="item.url"
				@click="gotoRoute(item.url)"
			>
				<i class="el-icon-location"></i>
				<span slot="title">1111</span>
			</el-menu-item>

			<el-submenu
				v-if="item.chilren.length && item.url !== '/home'"
				:key="item.url"
				:index="item.url"
			>
				<template slot="title">
					<i class="el-icon-location"></i>
					<span slot="title">2222</span>
				</template>
				<Menus :menus="item.children" />
			</el-submenu>
		</template>
	</div>
</template>

<script>
export default {
	name: 'Menus',
	props: {
		menus: {
			type: Array,
			default: () => []
		}
	},
	created() {
		console.log(this.menus)
	},
	watch: {
		menu() {
			console.log(this.menu)
		}
	},
	data() {
		return {}
	},
	methods: {
		gotoRoute(url) {
			this.$router.push(url)
		}
	}
}
</script>

<style></style>
