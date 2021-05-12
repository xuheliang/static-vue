<template>
	<div>
		<template v-for="item in menus">
			<el-menu-item
				v-if="item.children.length === 0 || item.url === '/home'"
				:key="item.url"
				:index="item.url"
				@click="gotoRoute(item.url)"
			>
				<i class="el-icon-location"></i>
				<span slot="title">{{ item.name }}</span>
			</el-menu-item>

			<el-submenu
				v-if="item.children.length > 0 && item.url !== '/home'"
				:key="item.url"
				:index="item.url"
			>
				<template slot="title">
					<i class="el-icon-location"></i>
					<span slot="title">{{ item.name }}</span>
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
