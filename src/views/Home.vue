<template>
	<el-container>
		<el-aside>
			<SilderMenu :isCollapse="isCollapse"></SilderMenu>
		</el-aside>
		<el-conatiner>
			<el-header>
				<OHeader @click="toggleMenu"></OHeader>
			</el-header>
			<el-main>
				<router-view></router-view>
			</el-main>
			<el-footer>
				<OFooter></OFooter>
			</el-footer>
		</el-conatiner>
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
			isCollapse: false
		}
	},
	methods: {
		toggleMenu(res) {
			res = !res
		}
	}
}
</script>

<style></style>
