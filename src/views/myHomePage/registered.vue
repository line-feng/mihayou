<template>
	<div style="height: 100%;">
		<van-nav-bar left-arrow @click-left="onClickLeft" />
		<div class="title">
			注册
		</div>
		<div class="Inp">

			<van-field v-model="username" label="账号" placeholder="请输入手机号或邮箱" />
			<van-field type='password' v-model="password" label="密码" placeholder="请输入密码" />
			<van-field type='password' v-model="confirm" label="确认密码" placeholder="确认密码" />

			<van-button @click='btnClick()' style='margin: 15px 0;' round block type="info" native-type="submit">
				注册
			</van-button>
			
			<div class="dc-flex jc-between" style='width: 90%;margin: 0 auto;'>
				<div>
					注册即代表你同意并遵守<span style="color: skyblue;">《米哈游用户协议》《米哈游用户个人信息及隐私保护政策》</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import {
		NavBar,
		Form,
		Field,
		Button,
		Dialog
	} from 'vant';
	export default {
		components: {
			[NavBar.name]: NavBar,
			[Form.name]: Form,
			[Field.name]: Field,
			[Button.name]: Button,
			[Dialog.name]: Dialog
		},
		data() {
			return {
				username: '',
				password: '',
				confirm: '',
			};
		},
		methods: {
			onClickLeft() {
				this.$router.go(-1)
			},
			onSubmit() {

			},
			btnClick() {

				const email = new RegExp(
					'^([a-zA-Z0-9]+[_|\\_|\\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\\_|\\.]?)*[a-zA-Z0-9]+\\.[a-zA-Z]{2,3}$', '');

				if (this.username == '' || this.password == "") {
					Dialog({
						width: '300px',
						message: '账号密码不能为空！！！'
					});
				} else if (!email.test(this.username) && !(/^1[3456789]\d{9}$/.test(this.username))) {

					Dialog({
						width: '300px',
						message: '请输入正确的手机号或邮箱！！！'
					});

				} else if (this.password.length < 6) {
					Dialog({
						width: '300px',
						message: '密码长度必须大于6位数！！！'
					});
				} else if (this.confirm != this.password) {
					Dialog({
						width: '300px',
						message: '两次输入的密码不一致！！！'
					});
				} else {

					if (window.sessionStorage.userObj != undefined) {
						Dialog({
							width: '300px',
							message: '请先退出登录！！！'
						});
						return
					}

					var userObj = {
						username: this.username,
						password: this.password
					}
					userObj = JSON.stringify(userObj)
					window.sessionStorage.userObj = userObj
					this.$router.push('/myhomepage/login')
				}
			}
		},
	}
</script>

<style scoped="">
	.title {
		padding: 40px 0;
		width: 80%;
		margin: 0 auto;
		font-size: 20px;
	}

	.Inp {
		width: 90%;
		margin: 0 auto;
	}
</style>
