<template>
	<div class="header">
		<div class="header-left">
			<el-button @click="toggleMenuFn"></el-button>
		</div>
		<div class="header-right">
			<el-button></el-button>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		isCollapse: {
			type: Boolean,
			defalut: false
		}
	},
	data() {
		return {}
	},
	computed: {
		isCollapseMenu() {
			return this.isCollapse
		}
	},
	methods: {
		toggleMenuFn() {
			this.$emit('toggleMenu', !this.isCollapseMenu)
		}
	}
}
</script>

<style lang="scss" scoped>
.header {
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 60px;
	line-height: 60px;
}
</style>
