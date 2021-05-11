<template>
	<div class="header">
		<div class="header-left">
			<el-button @click="toggleMenu"></el-button>
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
	medthods: {}
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
