<template>
	<div class="wrapper">
		<el-form class="form-container" ref="form" :model="form" :rules="rules">
			<div style="width: 80%">
				<div class="title">后台管理系统</div>
				<el-form-item label="用户名" label-width="80px" prop="username">
					<el-input placeholder="请输入账号" v-model="form.username" type="text"></el-input>
				</el-form-item>
				<el-form-item label="密码" label-width="80px" prop="password">
					<el-input type="password" v-model="form.password" placeholder="请输入密码"></el-input>
				</el-form-item>
				<el-form-item>
					<div class="btnWrapper">
						<el-button @click="resetForm('form')">取消</el-button>
						<el-button type="primary" @click="submitForm('form')">登录</el-button>
					</div>
				</el-form-item>
			</div>
		</el-form>
	</div>
</template>

<script>
const checkName = (rule, value, callback) => {
	if (!value) {
		return callback(new Error('用户名不能为空'))
	}
	callback()
}
const validatePass = (rule, value, callback) => {
	// if (value.length !== 6) {
	// 	return callback(new Error('用户名长度必须为6位'))
	// }
	callback()
}
export default {
	data() {
		return {
			form: {
				username: '',
				password: ''
			},
			rules: {
				username: [
					{
						validator: checkName,
						triggle: 'blur'
					}
				],
				password: [
					{
						validator: validatePass,
						triggle: 'blur'
					}
				]
			}
		}
	},
	methods: {
		submitForm(formname) {
			this.$refs[formname].validate(valid => {
				if (valid) {
					console.log('submit')
					this.$router.push('/home')
				} else {
					this.$message.error('提交失败')
					return false
				}
			})
		},
		resetForm(formname) {
			this.$refs[formname].resetFields()
		}
	}
}
</script>

<style lang="scss" scoped>
.wrapper {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
	.form-container {
		display: flex;
		justify-content: center;
		align-items: center;
		margin-top: -20px;
		width: 460px;
		height: 400px;
		::v-deep .el-form-item__content {
			display: flex;
		}
		.title {
			text-align: center;
			font-size: 30px;
			margin-bottom: 20px;
		}
		.btnWrapper {
			display: flex;
			justify-content: center;
			align-items: center;
			width: 100%;
		}
	}
}
</style>
