<template>
	<el-container>
		<el-aside :width="sliderWidth">
			<SilderMenu :isCollapse="isCollapse"></SilderMenu>
		</el-aside>
		<el-container>
			<el-header>
				<OHeader @isCollapse="toggleSliderMenu"></OHeader>
			</el-header>
			<el-main>
				<router-view></router-view>
			</el-main>
			<el-footer>
				<OFooter></OFooter>
			</el-footer>
		</el-container>
	</el-container>
</template>

<script>
import SilderMenu from './components/SliderMenu'
import OHeader from './components/OHeader'
import OFooter from './components/OFooter'
export default {
	components: {
		SilderMenu,
		OHeader,
		OFooter
	},
	data() {
		return {
			isCollapse: false,
			sliderWidth: '200px'
		}
	},
	methods: {
		// eslint-disable-next-line no-unused-vars
		toggleSliderMenu(res) {
			this.isCollapse = res
			this.sliderWidth = !res ? '200px' : '75px'
		}
	}
}
</script>

<style></style>
