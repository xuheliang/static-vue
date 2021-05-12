<template>
	<div class="header">
		<div class="header-left">
			<el-button @click="toggleMenu"></el-button>
		</div>
		<div class="header-right"></div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			isCollapse: false
		}
	},
	methods: {
		toggleMenu() {
			this.isCollapse = !this.isCollapse
			this.$emit('isCollapse', !this.isCollapse)
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
